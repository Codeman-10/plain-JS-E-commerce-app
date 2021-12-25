const data = JSON.parse(sessionStorage.getItem("data"));
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product_id = urlParams.get('id')

const product = data.filter(val => val.id == product_id)[0]

const product_brand = document.getElementById("product_brand");
const product_price = document.getElementById("product_price");
const product_short_des = document.getElementById("product_short_des");
const prod_img = document.getElementById("prod_img");

product_brand.innerHTML = product.title
product_price.innerHTML = product.price;
product_short_des.innerHTML = product.description.substring(0, 100);
prod_img.src = product.image
function addToCart() {

    const currentCart = JSON.parse(sessionStorage.getItem("cart"));

    if (currentCart &&
        currentCart.some(item => item.id == product_id)) {
        currentCart.map(item => {
            if (item.id == product_id) {
                item.quantity++;
            }
        })


        sessionStorage.setItem("cart", JSON.stringify(currentCart))
        alert("updated succesfully")

    }


    else {

        const productArray = [{ id: product_id, quantity: 1 }];
        currentCart ? sessionStorage.setItem("cart", JSON.stringify([...currentCart, ...productArray])) :
            sessionStorage.setItem("cart", JSON.stringify(productArray))

        alert("added succesfully")
    }


}