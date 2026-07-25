let Email= "testuser@example.com";

if(Email.includes("@") && Email.includes("."))
{
    console.log("✅ Valid email format");
}
else
{
    console.log("❌ Invalid email format");
}


console.log("============================");

let testResult="PASSED";

if(testResult==="PASSED")
{
    console.log("✓ Test passed successfully");
}
else if(testResult==="FAILED")
{
    console.log("✗ Test failed - check logs");
}
else if(testResult==="SKIPPED")
{
    console.log("⊘ Test skipped");
}
else
{
    console.log("?  Unknown test status");
}

console.log("===========================");

let password="Test@1";

if (password.length<6)
{
    console.log("❌ Weak password - too short");
}
else if(password.length>=6 && password.length<10)
{
    console.log("⚠️ Medium password strength");
}
else if(password.length>=10)
{
    console.log("✅ Strong password");
}


console.log("===========================");


let score=95;

if(score>=90)
{
    console.log("Grade: A (Excellent)");
}
else if(score>=80 && score<90)
{
    console.log("Grade: B (Good)");
}
else if(score>=70 && score<80)
{
    console.log("Grade: C (Average)");
}
else if(score>=60 && score<70)
{
    console.log("Grade: D (Pass)");
}
else if(score<60)
{
    console.log("Grade: F (Fail)");
}