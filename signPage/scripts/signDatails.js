import { url } from "./utility.js";

// console.log("object");
let getNum = localStorage.getItem("number");
document.getElementById("number").value = getNum;

document.getElementById("s_register_proceed").onclick = async () => {
  let data = {
    number: getNum,
    full_name: document.getElementById("fullname").value,
    email: document.getElementById("email").value,
  };
  let body = JSON.stringify(data);
  console.log(data);

  await fetch(`${url}`, {
    method: "POST",
    body,
    headers: {
      "Content-Type": "application/json",
    },
  });

  localStorage.setItem(
    "full_name",
    JSON.stringify(document.getElementById("fullname").value)
  );
  location.href = "../index.html";
};
