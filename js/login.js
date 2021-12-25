const userArray = JSON.parse(localStorage.getItem("userArray"));


loginUser = (event) => {
    event.preventDefault();
    const userArray = JSON.parse(localStorage.getItem("userArray"))
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (validateMethod(username, password)) {

        if (userArray.some(obj => obj.user == username)) {
            const currentUser = userArray.filter(obj => obj.user == username)[0]
            const decodedPassword = decodeData(currentUser.pass)
            if (currentUser.user == username && decodedPassword == password) {
                alert("login successful")
                sessionStorage.setItem("userObj", JSON.stringify(currentUser))
                window.location = "index.html";
            }
            else {
                alert("login failed,Please try again !!")
            }
        }
        else {
            alert("user does not exists !!!")
        }
    }
    else {
        alert("Please enter both username and password")
    }
};


registerUser = (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (validateMethod(username, password)) {

        if (userArray && userArray.some(obj => obj.user == username)) {
            alert("username exists!!!");
        }
        else {
            const user = [{ user: username, pass: encodeData(password) }]
            userArray ? localStorage.setItem("userArray", JSON.stringify([...userArray, ...user])) :
                localStorage.setItem("userArray", JSON.stringify([user]))
            alert("user registered Succesfully ")
        }
    }
    else {
        alert("Please enter both username and password")
    }
}

validateMethod = (user, password) => user && password ? true : false;
encodeData = (input) => window.btoa(input);
decodeData = (input) => window.atob(input)