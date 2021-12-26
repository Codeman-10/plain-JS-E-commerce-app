const data = JSON.parse(sessionStorage.getItem("data"));
const currentCart = JSON.parse(sessionStorage.getItem("cart"));
const product_table = document.getElementById("product_table");
const rate_table = document.getElementById("rate_table");
let price = 0;



// to generate product table
let resultString = `<tr>
<th>Product</th>
<th></th>
<th>Price</th>
<th>Quantity</th>
<th>Subtotal</th>
</tr>`;

currentCart?.forEach(item => {
  const currentItem = data.filter(obj => obj.id == item.id)[0];
  const row = `<tr><td>
    <div class="cart_info">
      <img src="${currentItem.image}" alt="" />
      <div>
        <p>${currentItem.title.substring(0, 50)}...</p>
        <small>${currentItem.description.substring(0, 50)}...</small>
      </div>
    </div>
  </td>
  <td>        <a href="" onclick="removeItem(${currentItem.id},'${currentItem.title}')">Remove</a>
  </td>
  <td>${Math.round(currentItem.price)}$</td>
  <td>${item.quantity}</td>
  <td>${Math.round(currentItem.price) * item.quantity}$</td></tr>
  `
  resultString += row;
  price += Math.round(currentItem.price) * item.quantity;
});
product_table.innerHTML = resultString;

// to generate price table table
const tax = Math.round(price * 0.10);
const row = `<tr>
<td>Subtotal</td>
<td>${price}$</td>
</tr>
<tr>
<td>Tax</td>
<td>${tax}$</td>
</tr>
<tr>
<td>Total</td>
<td>${price + tax}$</td>
</tr>
<tr>
<td>
</td>
<td>
<button class="checkout_btn" onClick="onCheckout()"> checkout</button>
</td>
</tr>`
rate_table.innerHTML = row;


// to remove the item in the cart.
removeItem = (id, title) => {
  if (confirm(`Do you want to remove ${title}`)) {
    const updatedCart = currentCart.filter(item => item.id != id)
    sessionStorage.setItem("cart", JSON.stringify(updatedCart))
    alert("removed")
  }
}


// to Checkout
onCheckout = () => {
  if (userObject) {
    window.location = "success.html"
  }
  else {
    alert("Please login to Checkout")
  }
}


