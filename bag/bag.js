  console.log("object");

  let products = JSON.parse(localStorage.getItem("nykaaProduct"))||[]

  // console.log(dataId);
  // const getdata = async () => {
  //   let res = await fetch(`http://localhost:4000/products`);
  //   let data = await res.json();
  //   console.log(data);
  //   append(data);
  // };
  // getdata();  

  const append = () => {
    let s_content_card = document.getElementById("s_content_card");
    s_content_card.innerHTML = "";

    let s_mian_price = document.getElementById("s_mian_price")
    s_mian_price.innerText=0
  
  let s_final_price = document.getElementById("s_final_price")
  s_final_price.innerText=0

  let s_discounted_price = document.getElementById("s_discounted_price")
  s_discounted_price.innerText=0

  let s_proceed_price = document.querySelector(".s_proceed_price")
  s_proceed_price.innerText=0


    console.log(products);
    products.map((el,ind)=>{
        // console.log(el.title);
      let maainDiv = document.createElement("div")
      maainDiv.setAttribute("class","s_bag_card")

      let child1 = document.createElement("div")
      child1.setAttribute("class","s_bag_card_top")
      let img = document.createElement("img")
      img.setAttribute("src",el.image1)
      let child1_div = document.createElement("div")
      child1_div.innerText = el.title
      let child1_span = document.createElement("span")
      child1_span.setAttribute("class","material-symbols-outlined")
      child1_span.innerText = "delete"
      child1_span.onclick = ()=>{
        append()
        products.splice(ind,1)
        localStorage.setItem("objTodoList" , JSON.stringify(nykaaProduct))

      }

      child1.append(img,child1_div,child1_span);

      let child2 = document.createElement("div")
      child2.setAttribute("class","s_bag_card_bottom")

      let child2_child1_div = document.createElement("div")
      child2_child1_div.setAttribute("class","s_select_quantity")

      let child2_child1_span = document.createElement("span")
      child2_child1_span.innerText = "Quantity :"

      let child2_child1_select = document.createElement("select")
      let option1 = document.createElement("option")
      option1.innerText = 1
      option1.value=1
      let option2 = document.createElement("option")
      option2.innerText = 2
      option2.value=2
      let option3 = document.createElement("option")
      option3.innerText = 3
      option3.value=3
      let option4 = document.createElement("option")
      option4.innerText = 4
      option4.value=4
      let option5 = document.createElement("option")
      option5.innerText = 5
      option5.value=5
      child2_child1_select.append(option1,option2,option3,option4,option5)

      child2_child1_div.append(child2_child1_span,child2_child1_select)

      let child2_child2_div = document.createElement("div")
      child2_child2_div.setAttribute("class","s_price_details")

      let child2_child2_span1 = document.createElement("span")

      child2_child2_span1.innerText = "₹"+el.price
      child2_child2_span1.style.textDecoration="line-through"
      child2_child2_span1.style.marginRight = "8%"
      let child2_child2_span2 = document.createElement("span")
      child2_child2_span2.innerText = "₹"+el.off_price
      child2_child2_div.append(child2_child2_span1 , child2_child2_span2)

      child2.append(child2_child1_div,child2_child2_div)
      maainDiv.append(child1,child2)
      s_content_card.append(maainDiv)

      s_mian_price.innerText = Number(el.price) + Number(s_mian_price.innerText)

      s_final_price.innerText = Number(el.off_price) + Number(s_final_price.innerText)
     
      s_discounted_price.innerText = Number(s_mian_price.innerText) - Number(s_final_price.innerText);

      s_proceed_price.innerText = s_final_price.innerText

      child2_child1_select.onclick = ()=>{
       console.log(child2_child1_select.value * el.price); 
       console.log(child2_child1_select.value * el.off_price); 
       child2_child2_span1.innerText = child2_child1_select.value * el.price
        child2_child2_span2.innerText = child2_child1_select.value * el.off_price
        s_mian_price.innerText = Number(el.price) + Number(s_mian_price.innerText)

        s_final_price.innerText = Number(el.off_price) + Number(s_final_price.innerText)
       
        s_discounted_price.innerText = Number(s_mian_price.innerText) - Number(s_final_price.innerText);
  
        s_proceed_price.innerText = s_final_price.innerText
      }
    })
  };
  append();

  // s_proceed_price.innerText=""
//  let s_blank_bag = document.getElementById("s_blank_bag")
//  s_blank_bag.style.display = "none"

//  let s_bag_pricedetails_parent = document.getElementById("s_bag_pricedetails_parent")

//   if( s_proceed_price.innerTex === 0){
//     s_blank_bag.style.display = "block"
//     s_bag_pricedetails_parent.style.display = "none"
    
//   }
  