const product_feed = document.getElementById("product_feed");

getData = (category, element) => {
    const baseUrl = "https://fakestoreapi.com/products/category/" + category
    fetch(baseUrl)
        .then(res => res.json())
        .then(json => {
            displayCardData(json, element)

        })
}

displayCardData = (data, element) => {

    const section = document.getElementById(element)
    let resultString = "";
    data
        .forEach(item => {
            const card = `<div class="product-card" onclick="redirect(${item.id})" >
            <img class="product-card-img" src="${item.image}" alt="Card image cap">
            <div class="product-card-body">
               <h5 class="product-card-title">${item.title}</h5>
               <p class="product-card-text">${item.description.substring(0, 100)}...</p>
            </div>
         </div>`
            resultString += card;
        });
    section.innerHTML = resultString
}

redirect = (id) => window.location = `product_description_page.html?id=${id}`;

// to call the api and get the the products based on category
getData("electronics", "section_a")
getData("jewelery", "section_b")
getData("men's clothing", "section_c")
getData("women's clothing", "section_d")



