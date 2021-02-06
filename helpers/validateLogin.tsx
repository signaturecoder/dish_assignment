
const validateLogin = (values: any) => {
    let errors: any = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
  
    if (values.password.trim() === '') {
      errors.password = "Password is required";
    } else if (values.password.trim().length <= 8) {
  
      errors.password = "Password needs to be more than 9 characters";
    }
  
    return errors;
  }
  export default validateLogin;