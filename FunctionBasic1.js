function generateEmail(firstName, lastName) {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`;
}

function generateUsername(firstName, lastName) {
    return firstName.toLowerCase() + lastName.toLowerCase();
}

function generatePassword(prefix) {
    return prefix + "@123";
}

let email = generateEmail("TUSHAR", "GAIKWAD");
let username = generateUsername("Tushar", "Gaikwad");
let password = generatePassword("Tushar");

console.log(email);
console.log(username);
console.log(password);