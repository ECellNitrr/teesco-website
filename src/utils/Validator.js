export const nameValidator=(name)=>{
  if(/^[a-zA-Z\s]+$/.test(name)){
    return (true);
  }
  else{
    return (false);
  }
}
export const emailValidator = (email) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    return (true)
  }
    return (false)
}
export const containsUpperCase=(val)=>{
  if(/(?=.*[A-Z])/.test(val)){
    return (true);
  }
  else{
    return (false);
  }
}
export const containsLowerCase=(val)=>{
  if(/(?=.*[a-z])/.test(val)){
    return (true);
  }
  else{
    return (false);
  }
}
export const containsNumericDigit=(val)=>{
  if(/\d/.test(val)){
    return (true);
  }
  else{
    return (false);
  }
}
export const phoneNumberValidator=(phoneNumber)=>{
  if(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(phoneNumber)){
    return (true);
  }
  else{
    return (false);
  }
}