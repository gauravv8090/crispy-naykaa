console.log("object");

// for taking phoneNumber in localstorage
let getNum = localStorage.getItem("number");
document.getElementById("number").value = getNum;

// for opt alert
let otp_generate = Math.floor(Math.random() * 1000000);
setTimeout(() => {
    document.getElementById("alertBox").style.display = "block"
    document.getElementById("alert_title").innerText= "OTP-      "+otp_generate
    document.getElementById("alert_des").innerText= "Message-      "+`${otp_generate} is the OTP for creating an account on Nykaa`

}, 2000);

// for countdown otp second
const countdown = () => {
  let timeleft = 10;
  let downloadTimer = setInterval(function () {
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "";
    } else {
      document.getElementById("countdown").innerHTML = "0:" + timeleft;
    }
    timeleft -= 1;
  }, 1000);
};
countdown();

// for close otp alert
document.getElementById("close_alert").onclick = () => {
    document.getElementById("alertBox").style.display = "none";
  };


document.getElementById("s_register_proceed").onclick = () => {
  let otp_verify = document.getElementById("s_otp").value;
  console.log(otp_verify);

  let wrong = document.querySelector(".s_wrong_otp");
  console.log(otp_generate);
  if (otp_verify != otp_generate) {
    // alert("wronge otp")
    wrong.style.display = "block";
  } else {
    wrong.style.display = "none";
    document.getElementById("alertBox").style.display = "block";
    document.getElementById("alert_title").innerText = "Register Successfully";
    document.getElementById("alert_des").innerText = "";

    document.getElementById("close_alert").onclick = () => {
      document.getElementById("alertBox").style.display = "none";
      location.href = "signDatails.html";
    };
  }
};


// for resend otp
document.getElementById("resendOtp").onclick = () => {
    otp_generate = Math.floor(Math.random() * 1000000);
    document.getElementById("alertBox").style.display = "block";
    document.getElementById("alert_title").innerText =
      "OTP-      " + otp_generate;
    document.getElementById("alert_des").innerText =
      "Message-      " + `${otp_generate} is the OTP for login to Nykaa account`;
    countdown();
  };
