const userObject=JSON.parse(sessionStorage.getItem("userObj"));
const cart = JSON.parse(sessionStorage.getItem("cart"));

const footerData=`
    <div class="container">
      <div class="footer_container_1">
        <h3>Download Our App</h3>
        <p>
          Download App for Android <br />
          and ios mobile phone
        </p>
        <div class="app_logo">
          <img src="images/play-store.png" alt="" />
          <img src="images/app-store.png" alt="" />
        </div>
      </div>
      <div class="footer_container_2">
        <img  src="icons/shopping-bag.png" alt="" />
        <p>
          ShoppingMart
        </p>
      </div>
      <div class="footer_container_3">
        <h3>Useful Links</h3>
        <ul>
          <li>Coupons</li>
          <li>Blog Post</li>
          <li>Return Policy</li>
          <li>Join Affiliate</li>
        </ul>
      </div>

      <div class="footer_container_4">
        <h3>Follow us</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </div>
    </div>
    <hr />
    <p class="copyright">Copyright 2022 - Shopping Mart</p>
  `


  const headerData=`
  <div class="header_left">
    <img src="icons/shopping-bag.png" alt="myicon" class="my_icons" />
    <a href="index.html" class="header_title">Shopping Mart</a>
    <a href="Products.html">Products</a>
  </div>
  <div class="header_right">
    <p>Hello ${userObject?userObject.user:"Customer"}</p>
    <a href="login.html">Sign Up</a>
    <a href = "cart.html">My Cart<i class="fas fa-cart-plus">${cart?cart.length:''}</i></a>
  </div>
`;

  document.getElementById("footer").innerHTML=footerData;
  document.getElementById("header").innerHTML=headerData;