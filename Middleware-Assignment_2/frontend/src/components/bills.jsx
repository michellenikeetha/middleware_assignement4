import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import axios from "axios";

const BillInfo = () => {
  const [packages, setPackages] = useState([]);
  const currentBills = packages.filter((pkg) => pkg.status !== 1);
const pastBills = packages.filter((pkg) => pkg.status === 1);

  useEffect(() => {
    // Make an Axios request to fetch data
    axios
      .get("http://localhost:8081/bills") // Replace with your actual API endpoint
      .then((response) => {
        setPackages(response.data); // Set the fetched data to the state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

    return formattedDate;
  };

  return (
    <div className="w-[86%] mx-auto mt-12">
      {/* Logo and Navigation Container */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <img src={logo} alt="Logo" className="w-36 h-36" />
        </div>
        <Link to="/home" className="text-indigo-600">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </Link>
      </div>

      <div className="mb-8 text-3xl font-bold text-center">Bills Info</div>

      <div className="mt-8">
        <div className="mb-2 text-xl font-semibold">Current Bills</div>
        <div className="relative overflow-x-auto rounded-b-lg shadow-md">
          <table className="w-full text-left text-gray-500 border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3">Bill ID</th>
                <th className="px-6 py-3">User ID</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentBills.map((pkg, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="px-6 py-4 whitespace-nowrap">{pkg.bill_id}</td>
                  <td className="px-6 py-4">{pkg.users}</td>
                  <td className="px-6 py-4">{pkg.amount}</td>
                  <td className="px-6 py-4"> {formatDate(pkg.date)} </td>
                  <td className="px-6 py-4">
                    <Link
                      to="/cartitem"
                      className="text-blue-600 hover:underline"
                    >
                      Pay Now
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-16">
        <div className="mb-2 text-xl font-semibold">Past Bills</div>
        <div className="relative overflow-x-auto rounded-b-lg shadow-md">
          <table className="w-full text-left text-gray-500 border-collapse">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3">Bill ID</th>
                <th className="px-6 py-3">User ID</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {pastBills.map(
                (
                  bill,
                  index // Assuming pastBills is a different array for past bills
                ) => (
                  <tr key={index} className="bg-white border-b">
                    <th className="px-6 py-4 whitespace-nowrap">
                      {bill.bill_id}
                    </th>
                    <td className="px-6 py-4">{bill.users}</td>
                    <td className="px-6 py-4">{bill.amount}</td>
                    <td className="px-6 py-4">{formatDate(bill.date)}</td>
                    <td className="px-6 py-4 font-bold text-green-500">Paid</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BillInfo;