let age=2;

if(age>5)
{
  console.log("age is above 5");
}
else
{
 console.log("age is below 5");
}

console.log("=============================================");

let marks=45;

if(marks>=75)
{
    console.log("Congratulations ! You Got First Class With Distingstion...!")
}
else if(marks>=60 && marks<=74)
{
  console.log("Congratulations ! You Got First Class...!")
}
else if(marks>=50 && marks<=59)
{
console.log("Congratulations ! You Got Second Class...!")
}
else if(marks>=40 && marks<=49)
{
console.log("Congratulations ! You Got Third Class...!")
}
else if(marks>=35 && marks<=39)
{
console.log("Congratulations ! You Are Passed...!")
}
else
{
  console.log("Sorry You Are Failed");
}


console.log("=============================================");

let username="testuser";
let password="Test@123";
let email="abc@gmail.com";

if((username!="")&&(password!=""))
{
    console.log("Login Succussfully...!");
}
else
{
    console.log("Login Failed...!");
}

console.log("=============================================");

let status= "PASSED";
let ErrorCount= 0;

if((status==="PASSED" || status==="SKIPPED") && ErrorCount===0)
{
   console.log("✅ Test completed successfully");
}
else
{
    console.log("❌ Test has issues");
}


console.log("=============================================");



let responseTime= 2.5;

if (responseTime < 3)
{
    console.log("✅ Performance test PASSED");
}
else
{
    console.log("❌ Performance test FAILED");
}


console.log("=============================================");



function validateCompleteUser() 
{
    
let username="Tushar";
let password="Tushar123";
let email="Tushar@gmail.com";
let age= 19;

    if (username === "" || username.length < 3 || username.length > 20) {
    console.log("❌ Invalid Username");
    }

    if (password === "" || password.length < 8) {
    console.log("❌ Invalid Password...!");
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
    console.log("Invalid Email ID");
    }

    if (age < 18 || age > 120) {
    console.log("Invalid Age");
    }
}
validateCompleteUser();