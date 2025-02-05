export const validateLoginForm = (methodType, email, password, name) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const nameRegex =  /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;

    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);
    let isValidName;
    if(!methodType){
        isValidName = nameRegex.test(name)
    }else{
        isValidName = true
    }


    return { email: isValidEmail, password: isValidPassword, name: isValidName };
};