// to call the api to get product dewtails on load
window.onload = function () {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            showdata(json)
            sessionStorage.setItem("data", JSON.stringify(json));

        });
};


// to generate product card
displayCardData = (data, element) => {

    const section = document.getElementById(element)
    let resultString = "";
    data
        .forEach(item => {
            const card = `
            <div class="product-card" onclick="redirect(${item.id})" >
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

showdata = characters => {
    displayCardData(characters.slice(0, 8), "upper")
    displayCardData(characters.slice(8, 16), "lower")
}
