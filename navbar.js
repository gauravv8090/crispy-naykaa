import { navbar } from "./utilityNavbar.js";
document.getElementById("nykaa_export").innerHTML=navbar();


// -----------shopping cart  badge---------------------

// var arr1=[];
// localStorage.setItem("cartArray",JSON.stringify(arr1));
var arr=JSON.parse(localStorage.getItem("cartArray")) || [];
var element1 = document.getElementById("badge_id");
var element2 = document.getElementById("badge_id_m");
if(arr.length==0){   
  element1.classList.remove("badge");
  element2.classList.remove("badge_m");
  
}
//Just get the key of cart array




// --------------Account Name change--------------

//      var a_name="guru";
// localStorage.setItem("user",a_name);
var user_name=JSON.parse( localStorage.getItem("full_name")) || "";
var element3 = document.getElementById("account_p");
var element4 = document.getElementById("logged_in");
if(user_name!=""){   
    element3.innerText=(user_name);
    element4.innerText=("person_remove");
    
}

//get the key of user name
//while clicking login , if its sucessful change key value in localstorage
