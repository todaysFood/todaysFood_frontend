const validateLengthPw = pw => {
    if(pw.length > 12) return false;
    if(pw.length < 6) return false;
    return true;
};
const validateLetterPw = pw => {
    const lowerCaseLetters = /[a-z]/g;
    const upperCaseLetters = /[A-Z]/g;
    if(pw.match(lowerCaseLetters) || pw.match(upperCaseLetters)) return true;
    return false;
};
const validateNumberPw = pw => {
    const numbers = /[0-9]/g;
    if(pw.match(numbers)) return true;
    return false;
};

const validateEmail = email => {
    const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; 
    return email.match(regExp) != null;
};
const validatePassword = pw => validateLetterPw(pw) && validateNumberPw(pw) &&validateLengthPw(pw);

const validateName = name =>{
    if(name.length < 1) return false;
    return true;
};
const validateConfirmPw = (confirmPw, currentPw) =>{
    if(confirmPw === currentPw) return true;
    return false;
};
export {validateEmail, validatePassword, validateName, validateConfirmPw };