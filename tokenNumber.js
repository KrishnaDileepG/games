function patientDetails() {
  let patientName = prompt("Enter the Patient Name : ");
  const confirmName = confirm("Did you enter your name ?");

  if (!confirmName) {
    console.log("please enter the Name");
    patientName = prompt("Enter the Name");
  }

  let mobileNumber = prompt("Enter the Mobile Number : ");

  if (mobileNumber.length !== 10) {
    console.log("Invalid Mobile Number");
    mobileNumber = prompt("Enter the Mobile Number : ")
  }

  let address = prompt("Enter the Address : ");
  const confirmAddress = confirm("Did you fill the address ? ");
  if (!confirmAddress) {
    console.log("please enter the Address");
    address = prompt("Enter the Address : ");
  }
  const department = prompt("Enter the Department :");

  const tokenNo = Math.floor(Math.random() * 100 + 1);

  console.log("--------------------------------------------");
  console.log(" THOUGHTWORKS HOSPITAL ");
  console.log("--------------------------------------------");
  console.log("NAME \t \t" + " : " + patientName);
  console.log("MOBILE NUMBER \t" + " : " + mobileNumber);
  console.log("ADDRESS \t" + " : " + address);
  console.log("DEPARTMENT NAME  " + " : " + department);
  console.log("TokenNo \t" + " : " + tokenNo);
  console.log("--------------------------------------------")
}

patientDetails();
