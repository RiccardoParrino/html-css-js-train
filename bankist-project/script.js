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
};

const user_list = [riccardo, francesco, giovanna, riccardo];

window.addEventListener("load", function() {
    const navbar_username = this.document.getElementById("logged-username");
    navbar_username.innerText = riccardo.username;

    const total_balance_element = this.document.getElementById("total-balance");
    total_balance_element.getElementsByTagName("p")[0].innerText = "$" + riccardo.balance;

    const current_date = this.document.getElementById("current-date");
    const d = new Date();
    current_date.innerText = "As of " + d.getDate() +"/"+ d.getDay() +"/"+ d.getFullYear() +", "+ d.getHours() + ":" + d.getMinutes();

    const left_content = this.document.getElementById("left-content");

    for (let i = 0; i < riccardo.ops.length; i++) {
        if (riccardo.ops[i] > 0) {
            const deposit_template = this.document.getElementById("deposit-template");
            console.log(deposit_template);
            deposit_template.getElementsByClassName("movement-deposit-container")[0].innerText = i + " deposit";
            deposit_template.getElementsByClassName("date-container")[0].innerText = d.getDate() +"/"+ d.getDay() +"/"+ d.getFullYear() +", "+ d.getHours() + ":" + d.getMinutes();
            deposit_template.getElementsByClassName("movement-amount-container")[0].getElementsByClassName("amount")[0].innerText =  riccardo.ops[i];
            const clone = deposit_template.content.cloneNode(true);
            left_content.appendChild(clone);
        } else {
            const withdrawal_template = this.document.getElementById("withdrawal-template");
            withdrawal_template.getElementsByClassName("movement-withdrawal-container")[0].innerText = i + " withdrawal";
            withdrawal_template.getElementsByClassName("date-container")[0].innerText = d.getDate() +"/"+ d.getDay() +"/"+ d.getFullYear() +", "+ d.getHours() + ":" + d.getMinutes();
            withdrawal_template.getElementsByClassName("movement-amount-container")[0].getElementsByClassName("amount")[0].innerText =  riccardo.ops[i];
            const clone = withdrawal_template.content.cloneNode(true);
            withdrawal_template.appendChild(clone);
        }

    }

});

const send_button = document.getElementById("change-user-button");
console.log(send_button);

send_button.addEventListener("click", function() {
    const typed_username = document.getElementById("username").value;
    const typed_pin = document.getElementById("pin").value;
    console.log(user_list.findIndex(function(element){
        if (element.username === typed_username) {
            return element.pin === typed_pin;
        } else {
            return false;
        }
    }));
});