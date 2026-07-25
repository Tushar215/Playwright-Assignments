function generateTestUser(firstName, lastName) {
    return {
        name: `${firstName} ${lastName}`,
        email: generateEmail(firstName, lastName),
        username: generateUsername(firstName, lastName),
        password: "Test@123",
        userId: 1000,
        isActive: true
    };
}

let user1 = generateTestUser("Tushar", "Gaikwad");
let user2 = generateTestUser("Gaikwad", "Tushar");

console.log(user1);
console.log(user2);