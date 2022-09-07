import { getdata, url } from "./utility.js";


// for check number valid or not
let number = document.getElementById("number");
let pop = document.getElementById("s_register_number_required");
document.getElementById("number").onkeyup = () => {
  let x = number.value.length;
  if (x === 0) {
    pop.innerText = "REQUIERD";
  } else if (x === 10) {
    pop.style.display = "none";
  } else {
    pop.style.display = "block";
    pop.innerText = "ENTER A VALID MOBILE NUMBER";
  }
};
let dataArr;
getdata(`${url}`).then((res) => {
  console.log(res);
  dataArr = res;
});

// for check number register or not in json
document.getElementById("s_register_proceed").onclick = async () => {
  let x = number.value.length;
  if (x === 10) {
    localStorage.setItem("number", document.querySelector("#number").value);

    let flag = false;
    dataArr.map((el) => {
      if (el.number === document.querySelector("#number").value) {
        flag = true;
      }
    });
    if (flag) {
      console.log("match");
      location.href = "./login.html";
    } else {
      console.log("not match");
      location.href = "./register.html";
    }
  } else {
    document.getElementById("alertBox").style.display = "block";
  document.getElementById("alert_title").innerText ="ENTER A VALID MOBILE NUMBER"
  document.getElementById("alert_des").innerText =""
  }
};
document.getElementById("close_alert").onclick = () => {
  document.getElementById("alertBox").style.display = "none";
};