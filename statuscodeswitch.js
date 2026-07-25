let statuscode=503;

switch(statuscode)
{
case 200:
  console.log("✅ 200 OK — request successful");
 break;
case 404:
  console.log("❌ Client error — check your request");
 break;
case 503:
  console.log("Forbidden...!");
  break;
}
