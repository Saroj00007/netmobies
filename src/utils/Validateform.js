const validateform = (email  , password)=>{
     
    const validateemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    console.log(validateemail);

    const validatepass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]).{8,}$/.test(password);
    console.log(validatepass);

     if(!validateemail) { return "invalid email"}
     if(!validatepass) { return "invalid password"}

     return null
    
}

export default validateform;
validateform("saroh@gmail.com" , "pass")