const data = JSON.parse(sessionStorage.getItem("data"));
const currentCart = JSON.parse(sessionStorage.getItem("cart"));
const product_table = document.getElementById("product_table");
const rate_table = document.getElementById("rate_table");


let price = 0;
let resultString = `<tr>
<th>Product</th>
<th>Quantity</th>
<th>Subtotal</th>
</tr>`;
currentCart.forEach(item => {

  const currentItem = data.filter(obj => obj.id == item.id)[0]
  const row = `<tr><td>
    <div class="cart_info">
      
      <img src="${currentItem.image}" alt="" />
      <div>
        <p>${currentItem.title}</p>
        <small>${currentItem.description.substring(0, 100)}</small>
        <br />
        <a href="" onclick="removeItem(${currentItem.id})">Remove</a>
      </div>
    </div>
  </td>
  <td><input type="nunber" value="${item.quantity}" /></td>
  <td>${Math.round(currentItem.price)}$</td></tr>
  `
  resultString += row;

  price += Math.round(currentItem.price) * item.quantity;


});

product_table.innerHTML = resultString;
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
  `

rate_table.innerHTML = row;

removeItem = (id) => {
  const updatedCart=currentCart.filter(item=> item.id!=id)
  sessionStorage.setItem("cart", JSON.stringify(updatedCart))
  alert("removed")

}


