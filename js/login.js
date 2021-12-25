const userArray = JSON.parse(localStorage.getItem("userArray"))


loginUser = (event) => {
    const userArray = JSON.parse(localStorage.getItem("userArray"))

    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (userArray.some(obj => obj.user == username)) {
        const currentUser = userArray.filter(obj => obj.user == username)[0]
        const decodedPassword = decodeData(currentUser.pass)
        if (currentUser.user == username && decodedPassword == password) {
            alert("login success")
            sessionStorage.setItem("userObj",JSON.stringify(currentUser))
            window.location = "index.html";

        }
        else {
            alert("login fail")
        }
    }
    else{
        alert("user not exists")
    }
};


registerUser = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (userArray && userArray.some(obj => obj.user == username)) {
        alert("username exists!!!");
    }
    else {
        const user = [{ user: username, pass: encodeData(password) }]
        userArray ? localStorage.setItem("userArray", JSON.stringify([...userArray, ...user])) :
            localStorage.setItem("userArray", JSON.stringify([user]))
        alert("user added ")
    }




}

encodeData = (input) => window.btoa(input);
decodeData = (input) => window.atob(input)