function validateEmail(email) {
    if (email.includes("@") && email.includes(".") && email.includes()) {
        return "VALID";
    } else {
        return "INVALID";
    }
}

console.log(validateEmail("tushar.gaikwad@bajaj.com"));
//console.log(validateEmail("notanemail"));