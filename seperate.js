


let id= JSON.parse(localStorage.getItem("SepKey"));

console.log(id);


async function getsepe(){
    let res= await fetch (`http://localhost:4000/products/${id}`);
    let res2= await res.json();
    console.log(res2);
    style(res2)
}



function style(data){
    const mainDIv = document.getElementById("mainProd");
    let img= document.createElement("img");
    img.setAttribute("id", "MainImg")
    img.src= data.image1;
    mainDIv.append(img);
}

getsepe();