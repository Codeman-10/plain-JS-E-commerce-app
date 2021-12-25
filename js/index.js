


fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        showdata(json)
        sessionStorage.setItem("data", JSON.stringify(json));

    });


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

showdata = characters => {

    displaycarddata(characters.slice(0, 8), "upper")
    displaycarddata(characters.slice(8, 16), "lower")



}