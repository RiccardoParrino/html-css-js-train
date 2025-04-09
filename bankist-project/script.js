const riccardo = {
    username: "riccardo",
    pin: "111111",
    balance: 26000,
    ops: [26000,-3000,500,2000,100,400]
};

const francesco = {
    username: "francesco",
    pin: "123456",
    balance: 2000,
    ops: [1000,-500,500,500,500]
};

const giovanna = {
    username: "giovanna",
    pin: "123455",
    balance: 5000,
    ops: [4000,-500,500,500,500]
}

window.addEventListener("load", function() {
    const navbar_username = this.document.getElementById("logged-username");
    navbar_username.innerText = riccardo.username;
});

const send_button = document.getElementById("send-button");
console.log(send_button);

send_button.addEventListener("click", function() {
    const typed_username = document.getElementById("username");
    const typed_pin = document.getElementById("pin");
    console.log(typed_username);
    console.log(typed_pin);
});