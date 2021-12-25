const product_feed = document.getElementById("product_feed");



getData=(category, element)=>
{
    const baseUrl = "https://fakestoreapi.com/products/category/" + category
    fetch(baseUrl)
        .then(res => res.json())
        .then(json => {
            console.log(json)

            displaycarddata(json, element)

        })
}



displaycarddata = (data, element) => {

    const section = document.getElementById(element)
    let resultString = "";

    data
        .forEach(item => {
            const card = `
            <div class="product-card">
        <img class="product-card-img" src="${item.image}" alt="Card image cap">
        <div class="product-card-body">
          <h5 class="product-card-title">${item.title}</h5>
          <p class="product-card-text">${item.description.substring(0, 100)}</p>
          <a href="product_description_page.html?id=${item.id}" class="product-card-tag">View</a>
        </div></div>`
            resultString += card;
        });
    section.innerHTML = resultString


}

getData("electronics","section_a")
getData("jewelery","section_b")
getData("men's clothing","section_c")
getData("women's clothing","section_d")



