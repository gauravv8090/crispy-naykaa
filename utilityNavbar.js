export const navbar = ()=>{
    // let nyka_export=document.getElementById("nykaa_export");
    return `   <div class="topnav_container">
    <div class="g_topbanner">
        <p id="beauty_bonanza">BEAUTY BONANZA Get Your Daily Dose Of Amazing Deals</p>
        <div class="navbar_icons">
            <span class="material-symbols-outlined">phone_iphone</span> 
            <p>Get App</p>
            <h1>|</h1>
            <span class="material-symbols-outlined">location_on</span>
            <p>Store & Events</p>
            <h1>|</h1>
            <span class="material-symbols-outlined">redeem</span>
            <p>Gift Card</p>
            <h1>|</h1>
            <span class="material-symbols-outlined">help</span>
            <p>Help</p>
        </div>
    </div>
    <div class="topnav_category">
         <div class="category">
            <ul>
            <li><a href="navbar.html"><img src="data:image/png;base64,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" alt="Nykaa logo" width="100px"></a></li>
                <li><p>Categories</p></li>
                <li><p>Brand</p></li>
                <li><p>Luxe
                    <div class="sub_menu_1">
                        <ul>
                          <li>Makeup
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Collection Face</b></a></li>
                                    <li><a href="">Foundation</a></li>
                                    <li><a href="">Compact</a></li>
                                    <li><a href="">Highlighter</a></li>
                                    <li><a href="">Setting Spray</a></li>
                                    <li><a href="">Primer</a></li>
                                    <li><a href="">Concealer Powder</a></li>
                                    <li><a href="">Blush</a></li>
                                    <li><a href="">Loose Powder</a></li>
                                    <li><a href="">Bronzer</a></li>
                                    <li><a href="">BB & CC Cream</a></li>
                                    <li><a href="">Makeup Remover</a></li>
                                    <li><a href="">Contouring</a></li>
                                    <li><a href=""></a>Face Palette</li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                                    <li><a href="">Eyeliner & Kajal</a></li>
                                    <li><a href="">Mascara</a></li>
                                    <li><a href="">Eye Shadow</a></li>
                                    <li><a href=""> Brows</a></li>
                                    <li><a href="">Eye Primer</a></li>
                                    <li><a href="">Cocealer</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                                    <li><a href="">Lipstick</a></li>
                                    <li><a href="">Liquid Lipstick</a></li>
                                    <li><a href="">Lip Balm</a></li>
                                    <li><a href="">Lip Tint</a></li>
                                    <li><a href="">Lip Liner</a></li>
                                    <li><a href="">Lip Plumper</a></li>
                                    <br>
                                    <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                                    <li><a href="">Nail Polish</a></li>
                                    <li><a href="">Nail Care</a></li>
                                    <li><a href="">Nail Polish Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                                    <li><a href="">Face Brush</a></li>
                                    <li><a href="">Eye Brush</a></li>
                                    <li><a href="">Lip Brush</a></li>
                                    <li><a href="">Applicators</a></li>
                                    <br>
                            </div>
                          </li>
                          <li>Skin
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                                    <li><a href="">Serums & Essence</a></li>
                                    <li><a href="">Face Moisturisers & Day</a></li>
                                    <li><a href="">Cream</a></li>
                                    <li><a href="">Toner</a></li>
                                    <li><a href="">Face Wash & Cleansers</a></li>
                                    <li><a href="">Face Mist</a></li>
                                    <li><a href="">Scrubs & Exfoliators</a></li>
                                    <li><a href="">Masks & Peels</a></li>
                                    <li><a href="">Night Cream</a></li>
                                    <li><a href="">Sunscreen</a></li>
                                    <li><a href="">Makeup Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Undereye Creams & Serums</b></a></li>
                                    <br>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                                    <br>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Shop By Concern</b></a></li>
                                    <li><a href="">Pigmentation</a></li>
                                    <li><a href="">Acne</a></li>
                                    <li><a href="">Dark Circles</a></li>
                                    <li><a href="">Ageing</a></li>
                                    <li><a href="">Dry Skin</a></li>
                                    <li><a href="">Oil Control</a></li>
                                    <li><a href="">Pore Care</a></li>
                                    <li><a href="">Wrinkles And Fine Lines</a></li>
                                    <li><a href="">Under Eye Concealer</a></li>
                                    <li><a href="">Contact Lenses</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Gift Sets</b></a></li>
                                </ul>
                            </div>
                          </li>
                          <li>Fragrance
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                                    <li><a href="">Face Primer</a></li>
                                    <li><a href="">Concealer</a></li>
                                    <li><a href="">Foundation</a></li>
                                    <li><a href="">Compact</a></li>
                                    <li><a href="">Contour</a></li>
                                    <li><a href="">Loose Powder</a></li>
                                    <li><a href="">Tinted Moisturizer</a></li>
                                    <li><a href="">Blush</a></li>
                                    <li><a href="">Bronzer</a></li>
                                    <li><a href="">BB & CC Cream</a></li>
                                    <li><a href="">Highlighters</a></li>
                                    <li><a href="">Setting Spray</a></li>
                                    <li><a href="">Makeup Remover</a></li>
                                    <li><a href="">Sindoor</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                                    <li><a href="">Kajal</a></li>
                                    <li><a href="">Eyeliner</a></li>
                                    <li><a href="">Mascara</a></li>
                                    <li><a href="">Eye Shadow</a></li>
                                    <li><a href="">Eye Brow Enhancers</a></li>
                                    <li><a href="">Eye Primer</a></li>
                                    <li><a href="">False Eyeglasses</a></li>
                                    <li><a href="">Eye Makeup Remover</a></li>
                                    <li><a href="">Under Eye Concealer</a></li>
                                    <li><a href="">Contact Lenses</a></li>
                                    <br>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                                    <li><a href="">Makeup Kits</a></li>
                                    <li><a href="">Makeup Combos</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                                    <li><a href="">Lipstick</a></li>
                                    <li><a href="">Liquid Lipstick</a></li>
                                    <li><a href="">Lip Crayon</a></li>
                                    <li><a href="">Lip Gloss</a></li>
                                    <li><a href="">Lip Liner</a></li>
                                    <li><a href="">Lip Plumper</a></li>
                                    <li><a href="">Lip Stain</a></li>
                                    <br>
                                    <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                                    <li><a href="">Nail Polish</a></li>
                                    <li><a href="">Nail Arts Kits</a></li>
                                    <li><a href="">Nail Care</a></li>
                                    <li><a href="">Nail Polish Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                                    <li><a href="">Face Brush</a></li>
                                    <li><a href="">Eye Brush</a></li>
                                    <li><a href="">Lip Brush</a></li>
                                    <li><a href="">Brush Sets</a></li>
                                    <li><a href="">Brush Cleaners</a></li>
                                    <li><a href="">Sponges &Applicators</a></li>
                                    <li><a href="">Eyelash Curlers</a></li>
                                    <li><a href="">Tweezers</a></li>
                                    <li><a href="">Sharpners</a></li>
                                    <li><a href="">Mirrors</a></li>
                                    <li><a href="">Makeup Pouches</a></li>
                                    <br>
                                    <li><a href="" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                                    <li><a href="">Kay Beauty</a></li>
                                    <li><a href="">Huda Beauty</a></li>
                                    <li><a href="">Charlotte Tilbury</a></li>
                                    <li><a href="">M.A.C</a></li>
                                    <li><a href="">Maybelline New York</a></li>
                                    <li><a href="">L'Oreal Paris</a></li>
                                    <li><a href="">Lakme</a></li>
                                    <li><a href="">Nykaa Cosmetics</a></li>
                                    <li><a href="">Nyx Pro.Makeup</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                                    <li><a href="">Combos @ Nykaa</a></li>
                                    <li><a href="">New Launches</a></li>
                                    <li><a href="">NFBA Nominees 2020</a></li>
                                    <li><a href="">Gifts @ Nykaa</a></li>
                                    <li><a href="">The Gift Store</a></li>
                                    <br>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                                    <li><a href="">Nude Lipstick</a></li>
                                    <li><a href="">Matte Lipstick</a></li>
                                    <li><a href="">Red Lipstick</a></li>
                                    <li><a href="">Pink Lipstick</a></li>
                                </ul>
                            </div>
                          </li>
                          <li>Hair
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Collection Face</b></a></li>
                                    <li><a href="">Foundation</a></li>
                                    <li><a href="">Compact</a></li>
                                    <li><a href="">Highlighter</a></li>
                                    <li><a href="">Setting Spray</a></li>
                                    <li><a href="">Primer</a></li>
                                    <li><a href="">Concealer Powder</a></li>
                                    <li><a href="">Blush</a></li>
                                    <li><a href="">Loose Powder</a></li>
                                    <li><a href="">Bronzer</a></li>
                                    <li><a href="">BB & CC Cream</a></li>
                                    <li><a href="">Makeup Remover</a></li>
                                    <li><a href="">Contouring</a></li>
                                    <li><a href=""></a>Face Palette</li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Accessories</b></a></li>
                                    <li><a href="">Dryers & Stylers</a></li>
                                    <li><a href="">Hair Brushes & Combs</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                                    <li><a href="">Lipstick</a></li>
                                    <li><a href="">Liquid Lipstick</a></li>
                                    <li><a href="">Lip Balm</a></li>
                                    <li><a href="">Lip Tint</a></li>
                                    <li><a href="">Lip Liner</a></li>
                                    <li><a href="">Lip Plumper</a></li>
                                    <br>
                                    <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                                    <li><a href="">Nail Polish</a></li>
                                    <li><a href="">Nail Care</a></li>
                                    <li><a href="">Nail Polish Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                                    <li><a href="">Face Brush</a></li>
                                    <li><a href="">Eye Brush</a></li>
                                    <li><a href="">Lip Brush</a></li>
                                    <li><a href="">Applicators</a></li>
                                    <br>
                            </div>
                          </li>
                          <li>Bath & Body
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                                    <li><a href="">Serums & Essence</a></li>
                                    <li><a href="">Face Moisturisers & Day</a></li>
                                    <li><a href="">Cream</a></li>
                                    <li><a href="">Toner</a></li>
                                    <li><a href="">Face Wash & Cleansers</a></li>
                                    <li><a href="">Face Mist</a></li>
                                    <li><a href="">Scrubs & Exfoliators</a></li>
                                    <li><a href="">Masks & Peels</a></li>
                                    <li><a href="">Night Cream</a></li>
                                    <li><a href="">Sunscreen</a></li>
                                    <li><a href="">Makeup Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Undereye Creams & Serums</b></a></li>
                                    <br>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                                    <br>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Shop By Concern</b></a></li>
                                    <li><a href="">Pigmentation</a></li>
                                    <li><a href="">Acne</a></li>
                                    <li><a href="">Dark Circles</a></li>
                                    <li><a href="">Ageing</a></li>
                                    <li><a href="">Dry Skin</a></li>
                                    <li><a href="">Oil Control</a></li>
                                    <li><a href="">Pore Care</a></li>
                                    <li><a href="">Wrinkles And Fine Lines</a></li>
                                    <li><a href="">Under Eye Concealer</a></li>
                                    <li><a href="">Contact Lenses</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Gift Sets</b></a></li>
                                </ul>
                            </div>
                          </li>
                          <li>Shop By Concern
                            <div class="sub_menu_2">
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Collection Face</b></a></li>
                                    <li><a href="">Foundation</a></li>
                                    <li><a href="">Compact</a></li>
                                    <li><a href="">Highlighter</a></li>
                                    <li><a href="">Setting Spray</a></li>
                                    <li><a href="">Primer</a></li>
                                    <li><a href="">Concealer Powder</a></li>
                                    <li><a href="">Blush</a></li>
                                    <li><a href="">Loose Powder</a></li>
                                    <li><a href="">Bronzer</a></li>
                                    <li><a href="">BB & CC Cream</a></li>
                                    <li><a href="">Makeup Remover</a></li>
                                    <li><a href="">Contouring</a></li>
                                    <li><a href=""></a>Face Palette</li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                                    <li><a href="">Eyeliner & Kajal</a></li>
                                    <li><a href="">Mascara</a></li>
                                    <li><a href="">Eye Shadow</a></li>
                                    <li><a href=""> Brows</a></li>
                                    <li><a href="">Eye Primer</a></li>
                                    <li><a href="">Cocealer</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                                    <li><a href="">Lipstick</a></li>
                                    <li><a href="">Liquid Lipstick</a></li>
                                    <li><a href="">Lip Balm</a></li>
                                    <li><a href="">Lip Tint</a></li>
                                    <li><a href="">Lip Liner</a></li>
                                    <li><a href="">Lip Plumper</a></li>
                                    <br>
                                    <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                                    <li><a href="">Nail Polish</a></li>
                                    <li><a href="">Nail Care</a></li>
                                    <li><a href="">Nail Polish Remover</a></li>
                                </ul>
                                <ul>
                                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                                    <li><a href="">Face Brush</a></li>
                                    <li><a href="">Eye Brush</a></li>
                                    <li><a href="">Lip Brush</a></li>
                                    <li><a href="">Applicators</a></li>
                                    <br>
                            </div>
                          </li>
                          <li>Gifts</li>
                          <li>Trending Now</li>
                          <li>New Launches</li>
                          <li>Minis</li>  
                        </ul>
                    </div>  
                </p></li>
                <li ><p id="NykaaFashion" >Nykaa Fashion
                    <div class="sub_menu_4">
                        <ul>
                            <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                            <li><a href="">Serums & Essence</a></li>
                            <li><a href="">Face Moisturisers & Day</a></li>
                            <li><a href="">Cream</a></li>
                            <li><a href="">Toner</a></li>
                            <li><a href="">Face Wash & Cleansers</a></li>
                            <li><a href="">Face Mist</a></li>
                            <li><a href="">Scrubs & Exfoliators</a></li>
                            <li><a href="">Masks & Peels</a></li>
                            <li><a href="">Night Cream</a></li>
                            <li><a href="">Sunscreen</a></li>
                            <li><a href="">Makeup Remover</a></li>
                        </ul>
                        <ul>
                            <li><a href="" style="color: rgb(46, 45, 45);"><b>Undereye Creams & Serums</b></a></li>
                            <br>
                            <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                            <br>
                            <li><a href="" style="color: rgb(46, 45, 45);"><b>Shop By Concern</b></a></li>
                            <li><a href="">Pigmentation</a></li>
                            <li><a href="">Acne</a></li>
                            <li><a href="">Dark Circles</a></li>
                            <li><a href="">Ageing</a></li>
                            <li><a href="">Dry Skin</a></li>
                            <li><a href="">Oil Control</a></li>
                            <li><a href="">Pore Care</a></li>
                            <li><a href="">Wrinkles And Fine Lines</a></li>
                            <li><a href="">Under Eye Concealer</a></li>
                            <li><a href="">Contact Lenses</a></li>
                        </ul>
                        <ul>
                            <li><a href="" style="color: rgb(46, 45, 45);"><b>Gift Sets</b></a></li>
                        </ul>
                        <ul >
                            <li><a href=""><img src="https://www.nykaa.com/media/wysiwyg/2022/NF-megamenu.jpg" alt=""></a></li>
                        </ul>
                    </div>
                </p></li>
                <li><p>Beauty Advice</p>
                    <div class="sub_menu_4" id="cards">
                        <ul >
                            <li><a href=""><img src="https://adn-static2.nykaa.com/media/wysiwyg/beautybook_2img.jpg" alt=""><br><p style="color:black;">BEAUTY BOOK</p><p>Nykaa's Digital Magazine</p></a></li>
                        </ul>
                        <ul >
                            <li><a href=""><img src="https://adn-static2.nykaa.com/media/wysiwyg/megamenu/nykaatv_1_img.png" alt=""><br><p style="color:black;">NYKAA TV</p><p>Masterclass by experts & vloggers</p></a></li>
                        </ul>
                       
                    </div>
                </li>
            </ul>    
         </div>
         <div class="search">
            <form id="nykaa_search">
               <span class="material-symbols-outlined">search</span> 
                <input type="text" placeholder="Search on Nykaa" style="height: 30px;margin-left:0px;">
            </form>
            <div class="account">
                <span class="material-symbols-outlined" id="person" style="margin-right:10px;">person</span>
                <a href="" style="color: black;text-decoration: none;position:relative;"><p id="account_p"> Account</p></a>
                <a href="" style="color: black; margin-left: 40px;position:relative;"><span class="material-symbols-outlined" id="shopping_bag" >shopping_bag</span><span id="badge_id" class="badge"></span></a>
            </div>
         </div>
    </div>
</div>  
<div class="offers">
    <div class="dropdown_category">
        <ul>
            <li><a href="#">Makeup</a>
            <div class="sub_menu">
                <ul>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                    <li><a href="">Face Primer</a></li>
                    <li><a href="">Concealer</a></li>
                    <li><a href="">Foundation</a></li>
                    <li><a href="">Compact</a></li>
                    <li><a href="">Contour</a></li>
                    <li><a href="">Loose Powder</a></li>
                    <li><a href="">Tinted Moisturizer</a></li>
                    <li><a href="">Blush</a></li>
                    <li><a href="">Bronzer</a></li>
                    <li><a href="">BB & CC Cream</a></li>
                    <li><a href="">Highlighters</a></li>
                    <li><a href="">Setting Spray</a></li>
                    <li><a href="">Makeup Remover</a></li>
                    <li><a href="">Sindoor</a></li>
                </ul>
                <ul>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                    <li><a href="">Kajal</a></li>
                    <li><a href="">Eyeliner</a></li>
                    <li><a href="">Mascara</a></li>
                    <li><a href="">Eye Shadow</a></li>
                    <li><a href="">Eye Brow Enhancers</a></li>
                    <li><a href="">Eye Primer</a></li>
                    <li><a href="">False Eyeglasses</a></li>
                    <li><a href="">Eye Makeup Remover</a></li>
                    <li><a href="">Under Eye Concealer</a></li>
                    <li><a href="">Contact Lenses</a></li>
                    <br>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                    <li><a href="">Makeup Kits</a></li>
                    <li><a href="">Makeup Combos</a></li>
                </ul>
                <ul>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                    <li><a href="">Lipstick</a></li>
                    <li><a href="">Liquid Lipstick</a></li>
                    <li><a href="">Lip Crayon</a></li>
                    <li><a href="">Lip Gloss</a></li>
                    <li><a href="">Lip Liner</a></li>
                    <li><a href="">Lip Plumper</a></li>
                    <li><a href="">Lip Stain</a></li>
                    <br>
                    <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                    <li><a href="">Nail Polish</a></li>
                    <li><a href="">Nail Arts Kits</a></li>
                    <li><a href="">Nail Care</a></li>
                    <li><a href="">Nail Polish Remover</a></li>
                </ul>
                <ul>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                    <li><a href="">Face Brush</a></li>
                    <li><a href="">Eye Brush</a></li>
                    <li><a href="">Lip Brush</a></li>
                    <li><a href="">Brush Sets</a></li>
                    <li><a href="">Brush Cleaners</a></li>
                    <li><a href="">Sponges &Applicators</a></li>
                    <li><a href="">Eyelash Curlers</a></li>
                    <li><a href="">Tweezers</a></li>
                    <li><a href="">Sharpners</a></li>
                    <li><a href="">Mirrors</a></li>
                    <li><a href="">Makeup Pouches</a></li>
                    <br>
                    <li><a href="" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                </ul>
                <ul>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                    <li><a href="">Kay Beauty</a></li>
                    <li><a href="">Huda Beauty</a></li>
                    <li><a href="">Charlotte Tilbury</a></li>
                    <li><a href="">M.A.C</a></li>
                    <li><a href="">Maybelline New York</a></li>
                    <li><a href="">L'Oreal Paris</a></li>
                    <li><a href="">Lakme</a></li>
                    <li><a href="">Nykaa Cosmetics</a></li>
                    <li><a href="">Nyx Pro.Makeup</a></li>
                </ul>
                <ul>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                    <li><a href="">Combos @ Nykaa</a></li>
                    <li><a href="">New Launches</a></li>
                    <li><a href="">NFBA Nominees 2020</a></li>
                    <li><a href="">Gifts @ Nykaa</a></li>
                    <li><a href="">The Gift Store</a></li>
                    <br>
                    <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                    <li><a href="">Nude Lipstick</a></li>
                    <li><a href="">Matte Lipstick</a></li>
                    <li><a href="">Red Lipstick</a></li>
                    <li><a href="">Pink Lipstick</a></li>
                </ul>
            </div>
            </li>
            
            <li><a href="#">Skin</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Moisturizers</b></a></li>
                        <li><a href="">Face Moisturizer & Day</a></li>
                        <li><a href="">Cream</a></li>
                        <li><a href="">Night Cream</a></li>
                        <li><a href="">Face Oils</a></li>
                        <li><a href="">Serums & Essence</a></li>
                        <li><a href="">All Purpose Gels/Creams</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Cleansers</b></a></li>
                        <li><a href="">Face Wash</a></li>
                        <li><a href="">Cleanser</a></li>
                        <li><a href="">Micellar Water</a></li>
                        <li><a href="">Face Wipes</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Scrubs & Exfoliators</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Toner Under 1000</a></li>
                        <li><a href="">Face Wash For Oily Skin</a></li>
                        <li><a href="">Oil Free Face</a></li>
                        <li><a href="">Moisturizers</a></li>
                        <li><a href="">Lip Balm Under 500</a></li>
                        <li><a href="">Vitamin C Serum</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Masks</b></a></li>
                        <li><a href="">Sheet Masks</a></li>
                        <li><a href="">Sleeping Masks</a></li>
                        <li><a href="">Masks & Peels</a></li>
                        <li><a href="">Face Packs</a></li>
                        <li><a href="">Face Bleach</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Toners</b></a></li>
                        <li><a href="">Toners & Mists</a></li>
                        <li><a href="">Rose Water</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Body Care</b></a></li>
                        <li><a href="">Lotions & Creams</a></li>
                        <li><a href="">Body Butter</a></li>
                        <li><a href="">Massage oils</a></li>
                        <li><a href="">Shower Gels & Body</a></li>
                        <li><a href="">Wash</a></li>
                        <li><a href="">Soaps</a></li>
                        <li><a href="">Scrubs & Loofahs</a></li>
                        <li><a href="">Bath Salts</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b> Hands & Feet</b></a></li>
                        <li><a href="">Hand Creams</a></li>
                        <li><a href="">Foot Creams</a></li>
                        <li><a href="">Hand & Foot Masks</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Neck Creams</b></a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Specialised Skincare</b></a></li>
                        <li><a href="">Acne Spot Correctors</a></li>
                        <li><a href="">Nose Strips</a></li>
                        <li><a href="">Facial Peels</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Eye Care</b></a></li>
                        <li><a href="">Under Eye Creams & Serums</a></li>
                        <li><a href="">Eye Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                        <li><a href="">Lip Balm</a></li>
                        <li><a href="">Lip Scrubs</a></li>
                        <li><a href="">Lip Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Sun Care</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Kits & Combos</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>
            </li>
            
            <li><a href="#">Hair</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                        <li><a href="">Face Primer</a></li>
                        <li><a href="">Concealer</a></li>
                        <li><a href="">Foundation</a></li>
                        <li><a href="">Compact</a></li>
                        <li><a href="">Contour</a></li>
                        <li><a href="">Loose Powder</a></li>
                        <li><a href="">Tinted Moisturizer</a></li>
                        <li><a href="">Blush</a></li>
                        <li><a href="">Bronzer</a></li>
                        <li><a href="">BB & CC Cream</a></li>
                        <li><a href="">Highlighters</a></li>
                        <li><a href="">Setting Spray</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Sindoor</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                        <li><a href="">Kajal</a></li>
                        <li><a href="">Eyeliner</a></li>
                        <li><a href="">Mascara</a></li>
                        <li><a href="">Eye Shadow</a></li>
                        <li><a href="">Eye Brow Enhancers</a></li>
                        <li><a href="">Eye Primer</a></li>
                        <li><a href="">False Eyeglasses</a></li>
                        <li><a href="">Eye Makeup Remover</a></li>
                        <li><a href="">Under Eye Concealer</a></li>
                        <li><a href="">Contact Lenses</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                        <li><a href="">Makeup Kits</a></li>
                        <li><a href="">Makeup Combos</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                        <li><a href="">Lipstick</a></li>
                        <li><a href="">Liquid Lipstick</a></li>
                        <li><a href="">Lip Crayon</a></li>
                        <li><a href="">Lip Gloss</a></li>
                        <li><a href="">Lip Liner</a></li>
                        <li><a href="">Lip Plumper</a></li>
                        <li><a href="">Lip Stain</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                        <li><a href="">Nail Polish</a></li>
                        <li><a href="">Nail Arts Kits</a></li>
                        <li><a href="">Nail Care</a></li>
                        <li><a href="">Nail Polish Remover</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                        <li><a href="">Face Brush</a></li>
                        <li><a href="">Eye Brush</a></li>
                        <li><a href="">Lip Brush</a></li>
                        <li><a href="">Brush Sets</a></li>
                        <li><a href="">Brush Cleaners</a></li>
                        <li><a href="">Sponges &Applicators</a></li>
                        <li><a href="">Eyelash Curlers</a></li>
                        <li><a href="">Tweezers</a></li>
                        <li><a href="">Sharpners</a></li>
                        <li><a href="">Mirrors</a></li>
                        <li><a href="">Makeup Pouches</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>
               
            </li>
            
            <li><a href="#">Appliances</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Moisturizers</b></a></li>
                        <li><a href="">Face Moisturizer & Day</a></li>
                        <li><a href="">Cream</a></li>
                        <li><a href="">Night Cream</a></li>
                        <li><a href="">Face Oils</a></li>
                        <li><a href="">Serums & Essence</a></li>
                        <li><a href="">All Purpose Gels/Creams</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Cleansers</b></a></li>
                        <li><a href="">Face Wash</a></li>
                        <li><a href="">Cleanser</a></li>
                        <li><a href="">Micellar Water</a></li>
                        <li><a href="">Face Wipes</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Scrubs & Exfoliators</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Toner Under 1000</a></li>
                        <li><a href="">Face Wash For Oily Skin</a></li>
                        <li><a href="">Oil Free Face</a></li>
                        <li><a href="">Moisturizers</a></li>
                        <li><a href="">Lip Balm Under 500</a></li>
                        <li><a href="">Vitamin C Serum</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Masks</b></a></li>
                        <li><a href="">Sheet Masks</a></li>
                        <li><a href="">Sleeping Masks</a></li>
                        <li><a href="">Masks & Peels</a></li>
                        <li><a href="">Face Packs</a></li>
                        <li><a href="">Face Bleach</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Toners</b></a></li>
                        <li><a href="">Toners & Mists</a></li>
                        <li><a href="">Rose Water</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Body Care</b></a></li>
                        <li><a href="">Lotions & Creams</a></li>
                        <li><a href="">Body Butter</a></li>
                        <li><a href="">Massage oils</a></li>
                        <li><a href="">Shower Gels & Body</a></li>
                        <li><a href="">Wash</a></li>
                        <li><a href="">Soaps</a></li>
                        <li><a href="">Scrubs & Loofahs</a></li>
                        <li><a href="">Bath Salts</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b> Hands & Feet</b></a></li>
                        <li><a href="">Hand Creams</a></li>
                        <li><a href="">Foot Creams</a></li>
                        <li><a href="">Hand & Foot Masks</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Neck Creams</b></a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Specialised Skincare</b></a></li>
                        <li><a href="">Acne Spot Correctors</a></li>
                        <li><a href="">Nose Strips</a></li>
                        <li><a href="">Facial Peels</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Eye Care</b></a></li>
                        <li><a href="">Under Eye Creams & Serums</a></li>
                        <li><a href="">Eye Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                        <li><a href="">Lip Balm</a></li>
                        <li><a href="">Lip Scrubs</a></li>
                        <li><a href="">Lip Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Sun Care</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Kits & Combos</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>
            </li>
            
            <li><a href="#">Bath & Body</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                        <li><a href="">Face Primer</a></li>
                        <li><a href="">Concealer</a></li>
                        <li><a href="">Foundation</a></li>
                        <li><a href="">Compact</a></li>
                        <li><a href="">Contour</a></li>
                        <li><a href="">Loose Powder</a></li>
                        <li><a href="">Tinted Moisturizer</a></li>
                        <li><a href="">Blush</a></li>
                        <li><a href="">Bronzer</a></li>
                        <li><a href="">BB & CC Cream</a></li>
                        <li><a href="">Highlighters</a></li>
                        <li><a href="">Setting Spray</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Sindoor</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                        <li><a href="">Kajal</a></li>
                        <li><a href="">Eyeliner</a></li>
                        <li><a href="">Mascara</a></li>
                        <li><a href="">Eye Shadow</a></li>
                        <li><a href="">Eye Brow Enhancers</a></li>
                        <li><a href="">Eye Primer</a></li>
                        <li><a href="">False Eyeglasses</a></li>
                        <li><a href="">Eye Makeup Remover</a></li>
                        <li><a href="">Under Eye Concealer</a></li>
                        <li><a href="">Contact Lenses</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                        <li><a href="">Makeup Kits</a></li>
                        <li><a href="">Makeup Combos</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                        <li><a href="">Lipstick</a></li>
                        <li><a href="">Liquid Lipstick</a></li>
                        <li><a href="">Lip Crayon</a></li>
                        <li><a href="">Lip Gloss</a></li>
                        <li><a href="">Lip Liner</a></li>
                        <li><a href="">Lip Plumper</a></li>
                        <li><a href="">Lip Stain</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                        <li><a href="">Nail Polish</a></li>
                        <li><a href="">Nail Arts Kits</a></li>
                        <li><a href="">Nail Care</a></li>
                        <li><a href="">Nail Polish Remover</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                        <li><a href="">Face Brush</a></li>
                        <li><a href="">Eye Brush</a></li>
                        <li><a href="">Lip Brush</a></li>
                        <li><a href="">Brush Sets</a></li>
                        <li><a href="">Brush Cleaners</a></li>
                        <li><a href="">Sponges &Applicators</a></li>
                        <li><a href="">Eyelash Curlers</a></li>
                        <li><a href="">Tweezers</a></li>
                        <li><a href="">Sharpners</a></li>
                        <li><a href="">Mirrors</a></li>
                        <li><a href="">Makeup Pouches</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>    
            </li>
            
            <li><a href="#">Natural</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Moisturizers</b></a></li>
                        <li><a href="">Face Moisturizer & Day</a></li>
                        <li><a href="">Cream</a></li>
                        <li><a href="">Night Cream</a></li>
                        <li><a href="">Face Oils</a></li>
                        <li><a href="">Serums & Essence</a></li>
                        <li><a href="">All Purpose Gels/Creams</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Cleansers</b></a></li>
                        <li><a href="">Face Wash</a></li>
                        <li><a href="">Cleanser</a></li>
                        <li><a href="">Micellar Water</a></li>
                        <li><a href="">Face Wipes</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Scrubs & Exfoliators</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Toner Under 1000</a></li>
                        <li><a href="">Face Wash For Oily Skin</a></li>
                        <li><a href="">Oil Free Face</a></li>
                        <li><a href="">Moisturizers</a></li>
                        <li><a href="">Lip Balm Under 500</a></li>
                        <li><a href="">Vitamin C Serum</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Masks</b></a></li>
                        <li><a href="">Sheet Masks</a></li>
                        <li><a href="">Sleeping Masks</a></li>
                        <li><a href="">Masks & Peels</a></li>
                        <li><a href="">Face Packs</a></li>
                        <li><a href="">Face Bleach</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Toners</b></a></li>
                        <li><a href="">Toners & Mists</a></li>
                        <li><a href="">Rose Water</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Body Care</b></a></li>
                        <li><a href="">Lotions & Creams</a></li>
                        <li><a href="">Body Butter</a></li>
                        <li><a href="">Massage oils</a></li>
                        <li><a href="">Shower Gels & Body</a></li>
                        <li><a href="">Wash</a></li>
                        <li><a href="">Soaps</a></li>
                        <li><a href="">Scrubs & Loofahs</a></li>
                        <li><a href="">Bath Salts</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b> Hands & Feet</b></a></li>
                        <li><a href="">Hand Creams</a></li>
                        <li><a href="">Foot Creams</a></li>
                        <li><a href="">Hand & Foot Masks</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Neck Creams</b></a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Specialised Skincare</b></a></li>
                        <li><a href="">Acne Spot Correctors</a></li>
                        <li><a href="">Nose Strips</a></li>
                        <li><a href="">Facial Peels</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Eye Care</b></a></li>
                        <li><a href="">Under Eye Creams & Serums</a></li>
                        <li><a href="">Eye Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                        <li><a href="">Lip Balm</a></li>
                        <li><a href="">Lip Scrubs</a></li>
                        <li><a href="">Lip Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Sun Care</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Kits & Combos</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>
            </li>
            
            <li><a href="#">Mom & Baby</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                        <li><a href="">Face Primer</a></li>
                        <li><a href="">Concealer</a></li>
                        <li><a href="">Foundation</a></li>
                        <li><a href="">Compact</a></li>
                        <li><a href="">Contour</a></li>
                        <li><a href="">Loose Powder</a></li>
                        <li><a href="">Tinted Moisturizer</a></li>
                        <li><a href="">Blush</a></li>
                        <li><a href="">Bronzer</a></li>
                        <li><a href="">BB & CC Cream</a></li>
                        <li><a href="">Highlighters</a></li>
                        <li><a href="">Setting Spray</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Sindoor</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                        <li><a href="">Kajal</a></li>
                        <li><a href="">Eyeliner</a></li>
                        <li><a href="">Mascara</a></li>
                        <li><a href="">Eye Shadow</a></li>
                        <li><a href="">Eye Brow Enhancers</a></li>
                        <li><a href="">Eye Primer</a></li>
                        <li><a href="">False Eyeglasses</a></li>
                        <li><a href="">Eye Makeup Remover</a></li>
                        <li><a href="">Under Eye Concealer</a></li>
                        <li><a href="">Contact Lenses</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                        <li><a href="">Makeup Kits</a></li>
                        <li><a href="">Makeup Combos</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                        <li><a href="">Lipstick</a></li>
                        <li><a href="">Liquid Lipstick</a></li>
                        <li><a href="">Lip Crayon</a></li>
                        <li><a href="">Lip Gloss</a></li>
                        <li><a href="">Lip Liner</a></li>
                        <li><a href="">Lip Plumper</a></li>
                        <li><a href="">Lip Stain</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                        <li><a href="">Nail Polish</a></li>
                        <li><a href="">Nail Arts Kits</a></li>
                        <li><a href="">Nail Care</a></li>
                        <li><a href="">Nail Polish Remover</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                        <li><a href="">Face Brush</a></li>
                        <li><a href="">Eye Brush</a></li>
                        <li><a href="">Lip Brush</a></li>
                        <li><a href="">Brush Sets</a></li>
                        <li><a href="">Brush Cleaners</a></li>
                        <li><a href="">Sponges &Applicators</a></li>
                        <li><a href="">Eyelash Curlers</a></li>
                        <li><a href="">Tweezers</a></li>
                        <li><a href="">Sharpners</a></li>
                        <li><a href="">Mirrors</a></li>
                        <li><a href="">Makeup Pouches</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>    
            </li>
            
            <li><a href="#">Health & Wellness</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Moisturizers</b></a></li>
                        <li><a href="">Face Moisturizer & Day</a></li>
                        <li><a href="">Cream</a></li>
                        <li><a href="">Night Cream</a></li>
                        <li><a href="">Face Oils</a></li>
                        <li><a href="">Serums & Essence</a></li>
                        <li><a href="">All Purpose Gels/Creams</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Cleansers</b></a></li>
                        <li><a href="">Face Wash</a></li>
                        <li><a href="">Cleanser</a></li>
                        <li><a href="">Micellar Water</a></li>
                        <li><a href="">Face Wipes</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Scrubs & Exfoliators</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Toner Under 1000</a></li>
                        <li><a href="">Face Wash For Oily Skin</a></li>
                        <li><a href="">Oil Free Face</a></li>
                        <li><a href="">Moisturizers</a></li>
                        <li><a href="">Lip Balm Under 500</a></li>
                        <li><a href="">Vitamin C Serum</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Masks</b></a></li>
                        <li><a href="">Sheet Masks</a></li>
                        <li><a href="">Sleeping Masks</a></li>
                        <li><a href="">Masks & Peels</a></li>
                        <li><a href="">Face Packs</a></li>
                        <li><a href="">Face Bleach</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Toners</b></a></li>
                        <li><a href="">Toners & Mists</a></li>
                        <li><a href="">Rose Water</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Body Care</b></a></li>
                        <li><a href="">Lotions & Creams</a></li>
                        <li><a href="">Body Butter</a></li>
                        <li><a href="">Massage oils</a></li>
                        <li><a href="">Shower Gels & Body</a></li>
                        <li><a href="">Wash</a></li>
                        <li><a href="">Soaps</a></li>
                        <li><a href="">Scrubs & Loofahs</a></li>
                        <li><a href="">Bath Salts</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b> Hands & Feet</b></a></li>
                        <li><a href="">Hand Creams</a></li>
                        <li><a href="">Foot Creams</a></li>
                        <li><a href="">Hand & Foot Masks</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Neck Creams</b></a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Specialised Skincare</b></a></li>
                        <li><a href="">Acne Spot Correctors</a></li>
                        <li><a href="">Nose Strips</a></li>
                        <li><a href="">Facial Peels</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Eye Care</b></a></li>
                        <li><a href="">Under Eye Creams & Serums</a></li>
                        <li><a href="">Eye Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                        <li><a href="">Lip Balm</a></li>
                        <li><a href="">Lip Scrubs</a></li>
                        <li><a href="">Lip Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Sun Care</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Kits & Combos</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>
            </li>
            
            <li><a href="#">Men</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                        <li><a href="">Face Primer</a></li>
                        <li><a href="">Concealer</a></li>
                        <li><a href="">Foundation</a></li>
                        <li><a href="">Compact</a></li>
                        <li><a href="">Contour</a></li>
                        <li><a href="">Loose Powder</a></li>
                        <li><a href="">Tinted Moisturizer</a></li>
                        <li><a href="">Blush</a></li>
                        <li><a href="">Bronzer</a></li>
                        <li><a href="">BB & CC Cream</a></li>
                        <li><a href="">Highlighters</a></li>
                        <li><a href="">Setting Spray</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Sindoor</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                        <li><a href="">Kajal</a></li>
                        <li><a href="">Eyeliner</a></li>
                        <li><a href="">Mascara</a></li>
                        <li><a href="">Eye Shadow</a></li>
                        <li><a href="">Eye Brow Enhancers</a></li>
                        <li><a href="">Eye Primer</a></li>
                        <li><a href="">False Eyeglasses</a></li>
                        <li><a href="">Eye Makeup Remover</a></li>
                        <li><a href="">Under Eye Concealer</a></li>
                        <li><a href="">Contact Lenses</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                        <li><a href="">Makeup Kits</a></li>
                        <li><a href="">Makeup Combos</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                        <li><a href="">Lipstick</a></li>
                        <li><a href="">Liquid Lipstick</a></li>
                        <li><a href="">Lip Crayon</a></li>
                        <li><a href="">Lip Gloss</a></li>
                        <li><a href="">Lip Liner</a></li>
                        <li><a href="">Lip Plumper</a></li>
                        <li><a href="">Lip Stain</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                        <li><a href="">Nail Polish</a></li>
                        <li><a href="">Nail Arts Kits</a></li>
                        <li><a href="">Nail Care</a></li>
                        <li><a href="">Nail Polish Remover</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                        <li><a href="">Face Brush</a></li>
                        <li><a href="">Eye Brush</a></li>
                        <li><a href="">Lip Brush</a></li>
                        <li><a href="">Brush Sets</a></li>
                        <li><a href="">Brush Cleaners</a></li>
                        <li><a href="">Sponges &Applicators</a></li>
                        <li><a href="">Eyelash Curlers</a></li>
                        <li><a href="">Tweezers</a></li>
                        <li><a href="">Sharpners</a></li>
                        <li><a href="">Mirrors</a></li>
                        <li><a href="">Makeup Pouches</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>    
            </li>
            
            <li><a href="#">Fragrance</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Moisturizers</b></a></li>
                        <li><a href="">Face Moisturizer & Day</a></li>
                        <li><a href="">Cream</a></li>
                        <li><a href="">Night Cream</a></li>
                        <li><a href="">Face Oils</a></li>
                        <li><a href="">Serums & Essence</a></li>
                        <li><a href="">All Purpose Gels/Creams</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Cleansers</b></a></li>
                        <li><a href="">Face Wash</a></li>
                        <li><a href="">Cleanser</a></li>
                        <li><a href="">Micellar Water</a></li>
                        <li><a href="">Face Wipes</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Scrubs & Exfoliators</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Toner Under 1000</a></li>
                        <li><a href="">Face Wash For Oily Skin</a></li>
                        <li><a href="">Oil Free Face</a></li>
                        <li><a href="">Moisturizers</a></li>
                        <li><a href="">Lip Balm Under 500</a></li>
                        <li><a href="">Vitamin C Serum</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Masks</b></a></li>
                        <li><a href="">Sheet Masks</a></li>
                        <li><a href="">Sleeping Masks</a></li>
                        <li><a href="">Masks & Peels</a></li>
                        <li><a href="">Face Packs</a></li>
                        <li><a href="">Face Bleach</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Toners</b></a></li>
                        <li><a href="">Toners & Mists</a></li>
                        <li><a href="">Rose Water</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Body Care</b></a></li>
                        <li><a href="">Lotions & Creams</a></li>
                        <li><a href="">Body Butter</a></li>
                        <li><a href="">Massage oils</a></li>
                        <li><a href="">Shower Gels & Body</a></li>
                        <li><a href="">Wash</a></li>
                        <li><a href="">Soaps</a></li>
                        <li><a href="">Scrubs & Loofahs</a></li>
                        <li><a href="">Bath Salts</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b> Hands & Feet</b></a></li>
                        <li><a href="">Hand Creams</a></li>
                        <li><a href="">Foot Creams</a></li>
                        <li><a href="">Hand & Foot Masks</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Neck Creams</b></a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Specialised Skincare</b></a></li>
                        <li><a href="">Acne Spot Correctors</a></li>
                        <li><a href="">Nose Strips</a></li>
                        <li><a href="">Facial Peels</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Eye Care</b></a></li>
                        <li><a href="">Under Eye Creams & Serums</a></li>
                        <li><a href="">Eye Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lip Care</b></a></li>
                        <li><a href="">Lip Balm</a></li>
                        <li><a href="">Lip Scrubs</a></li>
                        <li><a href="">Lip Masks</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Sun Care</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Kits & Combos</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>
            </li>
            
            <li><a href="#">Pop Ups</a>
                <div class="sub_menu">
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Face</b></a></li>
                        <li><a href="">Face Primer</a></li>
                        <li><a href="">Concealer</a></li>
                        <li><a href="">Foundation</a></li>
                        <li><a href="">Compact</a></li>
                        <li><a href="">Contour</a></li>
                        <li><a href="">Loose Powder</a></li>
                        <li><a href="">Tinted Moisturizer</a></li>
                        <li><a href="">Blush</a></li>
                        <li><a href="">Bronzer</a></li>
                        <li><a href="">BB & CC Cream</a></li>
                        <li><a href="">Highlighters</a></li>
                        <li><a href="">Setting Spray</a></li>
                        <li><a href="">Makeup Remover</a></li>
                        <li><a href="">Sindoor</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Eyes</b></a></li>
                        <li><a href="">Kajal</a></li>
                        <li><a href="">Eyeliner</a></li>
                        <li><a href="">Mascara</a></li>
                        <li><a href="">Eye Shadow</a></li>
                        <li><a href="">Eye Brow Enhancers</a></li>
                        <li><a href="">Eye Primer</a></li>
                        <li><a href="">False Eyeglasses</a></li>
                        <li><a href="">Eye Makeup Remover</a></li>
                        <li><a href="">Under Eye Concealer</a></li>
                        <li><a href="">Contact Lenses</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Makeup Kits & Combos</b></a></li>
                        <li><a href="">Makeup Kits</a></li>
                        <li><a href="">Makeup Combos</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Lips</b></a></li>
                        <li><a href="">Lipstick</a></li>
                        <li><a href="">Liquid Lipstick</a></li>
                        <li><a href="">Lip Crayon</a></li>
                        <li><a href="">Lip Gloss</a></li>
                        <li><a href="">Lip Liner</a></li>
                        <li><a href="">Lip Plumper</a></li>
                        <li><a href="">Lip Stain</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Nails</b></a></li>
                        <li><a href="">Nail Polish</a></li>
                        <li><a href="">Nail Arts Kits</a></li>
                        <li><a href="">Nail Care</a></li>
                        <li><a href="">Nail Polish Remover</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Tools & Brushes</b></a></li>
                        <li><a href="">Face Brush</a></li>
                        <li><a href="">Eye Brush</a></li>
                        <li><a href="">Lip Brush</a></li>
                        <li><a href="">Brush Sets</a></li>
                        <li><a href="">Brush Cleaners</a></li>
                        <li><a href="">Sponges &Applicators</a></li>
                        <li><a href="">Eyelash Curlers</a></li>
                        <li><a href="">Tweezers</a></li>
                        <li><a href="">Sharpners</a></li>
                        <li><a href="">Mirrors</a></li>
                        <li><a href="">Makeup Pouches</a></li>
                        <br>
                        <li><a href="" style="color:  rgb(46, 45, 45);"><b>Multi-Functional Makeup Palettes</b></a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Top Brands</b></a></li>
                        <li><a href="">Kay Beauty</a></li>
                        <li><a href="">Huda Beauty</a></li>
                        <li><a href="">Charlotte Tilbury</a></li>
                        <li><a href="">M.A.C</a></li>
                        <li><a href="">Maybelline New York</a></li>
                        <li><a href="">L'Oreal Paris</a></li>
                        <li><a href="">Lakme</a></li>
                        <li><a href="">Nykaa Cosmetics</a></li>
                        <li><a href="">Nyx Pro.Makeup</a></li>
                    </ul>
                    <ul>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Quick Links</b></a></li>
                        <li><a href="">Combos @ Nykaa</a></li>
                        <li><a href="">New Launches</a></li>
                        <li><a href="">NFBA Nominees 2020</a></li>
                        <li><a href="">Gifts @ Nykaa</a></li>
                        <li><a href="">The Gift Store</a></li>
                        <br>
                        <li><a href="" style="color: rgb(46, 45, 45);"><b>Trending Searches</b></a></li>
                        <li><a href="">Nude Lipstick</a></li>
                        <li><a href="">Matte Lipstick</a></li>
                        <li><a href="">Red Lipstick</a></li>
                        <li><a href="">Pink Lipstick</a></li>
                    </ul>
                </div>    
            </li>
        </ul>
    </div>
    <img src="\offers.png" alt="offer image" height="50px" width="130px">
</div>

<!-- --------------------for media Queries---------------------------------------- -->
<div class="div_1">
<div class="div_2">
    <div class="div_3">
        <ul>
       <li class="threeDots"><span class="material-symbols-outlined md18">density_medium</span> 
        <div class="media_cb">
            <ul>
                <li><p>Categories
                    <div class="sub_menu_3">
                        <ul>
                            <li><a href=""></a>OFFERS</a></li>
                            <li><a href=""></a>Makeup</a></li>
                            <li><a href=""></a>Skin</a></li>
                            <li><a href=""></a>Hair</a></li>
                            <li><a href=""></a>Bath & Body</a></li>
                            <li><a href=""></a>Fragrance</a></li>
                            <li><a href=""></a>Appliances</a></li>
                            <li><a href=""></a>Nykaa Luxe</a></li>
                            <li><a href=""></a>Natural</a></li>
                            <li><a href=""></a>Mom & Baby</a></li>
                            <li><a href=""></a>Men's Store</a></li>
                            <li><a href=""></a>Health & Wellness</a></li>
                            <li><a href=""></a>Pop Ups</a></li>
                            <li><a href=""></a>Covid & Home Essentials</a></li>
                            <li><a href=""></a>Nykaa Network</a></li>
                            <li><a href=""></a>Beauty Advice</a></li>
                            <li><a href=""></a>Trending Searches</a></li>
                            <li><a href=""></a>Beauty Services</a></li>
                            <li><a href=""></a>Gift Card</a></li>
                        </ul>
                    </div>
                    
                </p>
            </li>
            <li>
                <p >Brand
                    <div class="sub_menu_3">
                        <ul>
                            <li><p style=" color: black;font-weight: 600;">Top Brands</p></li>
                                    <li><a href="">Maybelline New York</a></li>
                                    <li><a href="">Lakme</a></li>
                                    <li><a href="">Nykaa Cosmetics</a></li>
                                    <li><a href="">M.A.C</a></li>
                                    <li><a href="">The Face Shop</a></li>
                                    <li><a href="">L'Oreal Paris</a></li>
                                    <li><a href="">Nyka Naturals</a></li>
                                    <li><a href="">Biotique</a></li>
                                    <li><a href="">Huda Beauty</a></li>
                                    <li><a href="">Kama Ayurveda</a></li>

                            <li><p style=" color: black;font-weight: 600;">#</p></li>
                                    <li><a href="">18m32</a></li>
                                    <li><a href="">2.Oh</a></li>
                                    <li><a href="">23 Yards</a></li>
                                    <li><a href="">24 Mantra</a></li>
                                    <li><a href="">3INA</a></li>

                            <li><p style=" color: black;font-weight: 600;">A</p></li>
                                    <li><a href="">A Clutch Story</a></li>
                                    <li><a href="">A Fragrance Story</a></li>
                                    <li><a href="">A'kin</a></li>
                                    <li><a href="">Adiva</a></li>
                                    <li><a href="">Abena</a></li>
                            
                            <li><p style=" color: black;font-weight: 600;">B</p></li>
                                    <li><a href="">Babila</a></li>
                                    <li><a href="">Baby Moo</a></li>
                                    <li><a href="">Babyliss</a></li>
                                    <li><a href="">Babymama</a></li>
                                    <li><a href="">Bajaj</a></li>  

                           <li><p style=" color: black;font-weight: 600;">C</p></li>
                                    <li><a href="">Callesta</a></li>
                                    <li><a href="">Calvadoss</a></li>
                                    <li><a href="">Calvin Klein</a></li>
                                    <li><a href="">Campus</a></li>
                                    <li><a href="">Candy Skin</a></li>                                       
                            
                        </ul>
                    </div>
                </p>
    
            </li>
            </ul> 
        </div>
    </li>       
       <li><a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JvpmDCFO5WUTxb9axPFk5bKPacl5FexVHQ&usqp=CAU" alt="Nykaa black logo" height="40px" width="110px"></a></li> 
    </ul>
    </div>
    <div class="div_4">
     <a href="" style="position:relative;"><span class="material-symbols-outlined" id="shopping_bag">shopping_bag</span><span id="badge_id_m" class="badge_m"></span></a>
    <a href=""><span class="material-symbols-outlined" id="logged_in">person_add</span></a>
    </div>
</div>
<form action="">
    <span class="material-symbols-outlined">search</span> 
    <input type="text" placeholder="Search  products, brands etc" >
</form>

</div>`
}
