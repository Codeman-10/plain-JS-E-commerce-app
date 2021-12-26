const userdata = JSON.parse(sessionStorage.getItem("userObj"));
const order_no = document.getElementById("order_no");
const order_date = document.getElementById("order_date");
const username = document.getElementById("username");

getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return mm + '-' + dd + '-' + yyyy;
}

order_no.innerHTML = `ORDER-NO:SHMART-${Math.floor(100000 + Math.random() * 900000)}`
order_date.innerHTML = `ORDER-DATED:${getDate()}`
username.innerHTML = `Hey ${userObject?.user}`