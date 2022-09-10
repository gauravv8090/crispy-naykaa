import { footer } from "./footer/utilityFooter.js";
import { navbar } from "./utilityNavbar.js";




document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML =footer()

async function showProduct(){

var res= await fetch("http://localhost:4000/products");

var data= await res.json();


console.log(data);

append(data)

}
showProduct();


function append(data){
let dis= document.getElementById("PRODUCT");
let cards ="";
    data.map(el=>{
        let rating;
        if(el.rating>4){
            rating = '&#9733;&#9733;&#9733;&#9733;&#9733;'
        }else if(el.rating>3){
            rating = '&#9733;&#9733;&#9733;&#9733;&#9734;'
        }else{
            rating = '&#9733;&#9733;&#9733;&#9734;&#9734;'
        }
        cards += `<div class="card">
        <h6 id="G-five">BEST SELLER</h6>
        <div id="G-img"> <img src="${el.image1}" alt="${el.id}">
        <h6 id="G-des">${el.card_title}</h6>
        
        </div>
        <div id="Price-Div"><h6 id="price">MRP: <span id="ear">₹${el.price}</span><span id="G-real"> ₹${el.off_price}</span><span id="G-OFF"> ${el.offer}% Off</span> </h6></div>
        <h4 id="rating">${rating}</h4>
        <div id="addToBag">
                    <div id="hert"><span id="heart">&#x2661;</span></div>
                    <div id="add">
                    <div id="add1">
                        
                            <h5>Add to Bag</h5>
                        
                    </div>
                </div>
                </div>
    </div>`
})
dis.innerHTML= cards 
var calssSeparate= document.querySelectorAll(".card");
console.log(calssSeparate);
for(var i=0; i<calssSeparate.length; i++){
    calssSeparate[i].addEventListener("click", ()=>{
        xxxyyy();
        console.log(calssSeparate[i], "inside fun");
    })
}
}

function xxxyyy(){
    console.log(event.target.alt);
    localStorage.setItem("SepKey", JSON.stringify(event.target.alt))
    location.href = "separate.html"
}

var sortFlag= false;
document.getElementById("sortTag").addEventListener("click", function(){
    let value= document.getElementById("sortTag").value;
    mySort(value);
});

async function mySort(data){
    console.log(data);
    if(data==="Priceddes"){
        var res= await fetch("http://localhost:4000/products?_sort=off_price&_order=desc");
        var res2= await res.json()
        console.log(res2);
        document.getElementById("PRODUCT").innerHTML=null;
        localStorage.setItem("sortArr", JSON.stringify(res2));
        sortFlag= true;
        append(res2);
    }
    else if(data==="priceAsc"){
        var res= await fetch("http://localhost:4000/products?_sort=off_price&_order=asc");
        var res2= await res.json()
        console.log(res2);
        document.getElementById("PRODUCT").innerHTML=null;
        sortFlag= true;
        localStorage.setItem("sortArr", JSON.stringify(res2));
        append(res2);
    }else if(data==="Discount"){
        var res= await fetch("http://localhost:4000/products?_sort=offer&_order=desc"); 
        var res2= await res.json()
        console.log(res2);
        document.getElementById("PRODUCT").innerHTML=null;
        sortFlag= true;
        localStorage.setItem("sortArr", JSON.stringify(res2));
        append(res2);
    }else if(data==="Name"){
        var res= await fetch("http://localhost:4000/products?_sort=card_title&_order=asc");
        var res2= await res.json()
        console.log(res2);
        document.getElementById("PRODUCT").innerHTML=null;
        sortFlag= true;
        localStorage.setItem("sortArr", JSON.stringify(res2));
        append(res2);
    }else if(data==="rating"){
        var res= await fetch("http://localhost:4000/products?_sort=rating&_order=desc");
        var res2= await res.json()
        console.log(res2);
        document.getElementById("PRODUCT").innerHTML=null;
        sortFlag= true;
        localStorage.setItem("sortArr", JSON.stringify(res2));
        append(res2);
    }
}

document.getElementById("catF").addEventListener("click", function(){
    let value= document.getElementById("catF").value;
    myFilter(value);
});

async function myFilter(data){
    console.log(data);
    var res= await fetch(`http://localhost:4000/products?category=${data}`);
        var res2= await res.json()
        console.log(res2);
        document.getElementById("PRODUCT").innerHTML=null;
        append(res2);
     
    // if(data==="Hair_Styling_Tools"){
    //     var res= await fetch("http://localhost:4000/products?category=Hair_Styling_Tools");
    //     var res2= await res.json()
    //     console.log(res2);
    //     document.getElementById("PRODUCT").innerHTML=null;
        // append(res2);
    // }
    // else if(data==="Shaving_Tools"){
    //     var res= await fetch("http://localhost:4000/products?category=Shaving_Tools");
    //     var res2= await res.json()
    //     console.log(res2);
    //     document.getElementById("PRODUCT").innerHTML=null;
    //     append(res2);
    // }else if(data==="Face/Skin_Tools"){
    //     var res= await fetch("http://localhost:4000/products?category=Face/Skin_Tools");
    //     var res2= await res.json()
    //     console.log(res2);
    //     document.getElementById("PRODUCT").innerHTML=null;
    //     append(res2);
    // }else if(data==="Hair_Removal_Tools"){
    //     var res= await fetch("http://localhost:4000/products?category=Hair_Removal_Tools");
    //     var res2= await res.json()
    //     console.log(res2);
    //     document.getElementById("PRODUCT").innerHTML=null;
    //     append(res2);
    // }else if(data==="Massage_Tools"){
    //     var res= await fetch("http://localhost:4000/products?category=Massage_Tools");
    //     var res2= await res.json()
    //     console.log(res2);
    //     document.getElementById("PRODUCT").innerHTML=null;
    //     append(res2);
    // }
}
// &#9733;
// brand
// : 
// "Philips India"
// card_title
// : 
// "Philips Selfie Straightener (HP8302/06)"
// category
// : 
// "Hair_Styling_Tools"
// description
// : 
// "Straighten and style your hair with this easy to use Philips HP8302/00 Selfie Straightener. With silkpro care technology and advanced keratin ceramic coating, the plates of this straighter are smoother than silk, resulting in less heat exposure and minimal friction. 210 degree C professional styling temperature gives you that perfect look like you've just come from the salon."
// how_to_use
// : 
// "Warranty: 2 years Philips India warranty from the date of purchase"
// id
// : 
// 1
// image1
// : 
// "https://images-static.nykaa.com/media/catalog/product/2/9/29cd491nyphilips0015as__1_.jpg?tr=w-344,h-344,cm-pad_resize"
// image2
// : 
// "https://images-static.nykaa.com/media/catalog/product/2/9/29cd491nyphilips0015as__2_.jpg?tr=w-344,h-344,cm-pad_resize"
// image3
// : 
// "https://images-static.nykaa.com/media/catalog/product/2/9/29cd491nyphilips0015as__3_.jpg?tr=w-344,h-344,cm-pad_resize"
// off_price
// : 
// "1099"
// offer
// : 
// "15"
// price
// : 
// "1295"
// quan
// : 
// 1
// rating
// : 
// "4.2"
// ratingNum
// : 
// "2751"
// reviews
// : 
// "655"
// sub_category
// : 
// "Straighteners"
// title
// : 
// "Philips Selfie Straightener (HP8302/06)"