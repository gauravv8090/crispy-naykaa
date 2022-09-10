import { footer } from "./footer/utilityFooter.js";
import { navbar } from "./utilityNavbar.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();

let id= JSON.parse(localStorage.getItem("SepKey"));

console.log(id);


async function getsepe(){
    let res= await fetch (`http://localhost:4000/products/${id}`);
    let res2= await res.json();
    console.log(res2);
    style(res2)
}


var cartArr = JSON.parse(localStorage.getItem("nykaaProduct")) || [];
function style(data){
   document.getElementById("Div_2_img").src = data.image1
   document.getElementById("Div4_p1").innerText = data.card_title
   document.getElementById("Div_5_p1").innerText = data.rating+ "/5"
   document.getElementById("Div_5_p2").innerText = data.ratingNum+ " Rating"
   document.getElementById("Div_5_p3").innerText = data.reviews+ " reviews"
   document.getElementById("Div7_p1").innerText = "₹"+data.price 
   document.getElementById("Div7_p2").innerText = "₹"+data.off_price 
   document.getElementById("Div7_p3").innerText = data.offer + "% Off"
   document.getElementById("Div11_p3").innerText = "Sold by "+ data.brand
   document.getElementById("DESCO").innerText = data.description
   document.getElementById("PPKT").innerText= "Home>Hair>Shop By Hair Type>"+ data.category
document.querySelector(".Div8_b1").addEventListener("click", ()=>{
        cartArr.push(data)
        localStorage.setItem("nykaaProduct", JSON.stringify(cartArr));
        document.querySelector(".Div8_b1").style.backgroundColor = "pink"
    })
}

getsepe();



