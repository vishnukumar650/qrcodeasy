fname = document.getElementById("fname");
lname = document.getElementById("lname");
dob = document.getElementById("dob");
college = document.getElementById("college");
education = document.getElementById("education");
gender = document.getElementById("gender");
review = document.getElementById("qrtext");

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "Please enter the data and then try to scan me.",
  image: "",
  dotsOptions: {
    color: "#000",
    type: "square",
  },
});

let data = ["", "", "", "", ""];

const firstName = () => {
  newQrData = "First Name: " + fname.value + "\n";
  data[0] = newQrData;
  let res = data[0] + data[1] + data[2] + data[3] + data[4];
  review.innerHTML = res;
  qrCode.update({
    data: res,
  });
};

const lastName = () => {
  newQrData = "Last Name: " + lname.value + "\n";
  data[1] = newQrData;
  let res = data[0] + data[1] + data[2] + data[3] + data[4];
  review.innerHTML = res;
  qrCode.update({
    data: res,
  });
};

const getDOB = () => {
  let day = dob.value.toString();
  let month = dob.value.toString();
  let year = dob.value.toString();

  day = day.substring(8, 10);
  month = month.substring(5, 7);
  year = year.substring(0, 4);

  newQrData = "DOB: " + day + "-" + month + "-" + year + "\n";

  data[2] = newQrData;
  let res = data[0] + data[1] + data[2] + data[3] + data[4];
  review.innerHTML = res;
  qrCode.update({
    data: res,
  });
};

const getCollege = () => {
  newQrData = "College: " + college.value + "\n";
  data[3] = newQrData;
  let res = data[0] + data[1] + data[2] + data[3] + data[4];
  review.innerHTML = res;
  qrCode.update({
    data: res,
  });
};

const getEducation = () => {
  newQrData = "Education: " + education.value;
  data[4] = newQrData;
  let res = data[0] + data[1] + data[2] + data[3] + data[4];
  review.innerHTML = res;
  qrCode.update({
    data: res,
  });
};

const updateQrImg = () => {
  newQrImage = URL.createObjectURL(qrImage.files[0]);
  console.log(newQrImage);
  qrCode.update({
    image: newQrImage,
  });
};

const download = () => qrCode.download("jpeg");

qrCode.append(document.getElementById("canvas"));
