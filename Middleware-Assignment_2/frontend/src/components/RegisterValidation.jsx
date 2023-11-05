function Validation(values) {
    let error = {};
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
    const phone_pattern = /^\d{10}$/;

    if (values.name === "") {
        error.name = "Name should not be empty";
    } else {
        error.name =  "";
    }

    if (values.phone === "") {
        error.phone = "Phone number should not be empty";
    } else if (!phone_pattern.test(values.phone)) {
        error.phone = "Please enter a valid phone number";
    } else {
        error.phone = "";
    }

    if (values.email === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Please enter a valid email";
    } else {
        error.email =  "";
    }

    if (values.password === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password should contain at least 8 characters, including a combination of uppercase letters, lowercase letters, and numbers";
    } else {
        error.password =  "";
    }

    return error;
}

export default Validation;
