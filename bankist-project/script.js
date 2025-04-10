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

const user_list = [riccardo, francesco, giovanna];

window.addEventListener("load", function() {
    load_content(0);
});

function load_content(logged_user_index = 0) {
    const navbar_username = this.document.getElementById("logged-username");
    navbar_username.innerText = user_list[logged_user_index].username;

    const total_balance_element = this.document.getElementById("total-balance");
    total_balance_element.getElementsByTagName("p")[0].innerText = "$" + user_list[logged_user_index].balance;

    const current_date = this.document.getElementById("current-date");
    const d = new Date(); 
    current_date.innerText = "As of " + d.getDate() +"/"+ d.getDay() +"/"+ d.getFullYear() +", "+ d.getHours() + ":" + d.getMinutes();

    const left_content = this.document.getElementsByClassName("left-content")[0];

    for (let i = 0; i < user_list[logged_user_index].ops.length; i++) {
        if (user_list[logged_user_index].ops[i] > 0) {
            const deposit_template = this.document.getElementById("deposit-template");
            const deposit_template_content = deposit_template.content;
            deposit_template_content.querySelector(".movement-deposit-container").innerText = i + " deposit";
            deposit_template_content.querySelector(".date-container").innerText = d.getDate() +"/"+ d.getDay() +"/"+ d.getFullYear() +", "+ d.getHours() + ":" + d.getMinutes();
            deposit_template_content.querySelector(".amount").innerText =  user_list[logged_user_index].ops[i];
            const clone = deposit_template.content.cloneNode(true);
            left_content.appendChild(clone);
        } else {
            const withdrawal_template = this.document.getElementById("withdrawal-template");
            const withdrawal_template_content = withdrawal_template.content;
            withdrawal_template_content.querySelector(".movement-withdrawal-container").innerText = i + " withdrawal";
            withdrawal_template_content.querySelector(".date-container").innerText = d.getDate() +"/"+ d.getDay() +"/"+ d.getFullYear() +", "+ d.getHours() + ":" + d.getMinutes();
            withdrawal_template_content.querySelector(".movement-amount-container").getElementsByClassName("amount")[0].innerText =  user_list[logged_user_index].ops[i];
            const clone = withdrawal_template.content.cloneNode(true);
            left_content.appendChild(clone);
        }
    }
}

const change_user_button = document.getElementById("change-user-button");

change_user_button.addEventListener("click", function() {
    const typed_username = document.getElementById("username").value;
    const typed_pin = document.getElementById("pin").value;
    const logged_user_index = user_list.findIndex(function(element){
        if (element.username === typed_username) {
            return element.pin === typed_pin;
        } else {
            return false;
        }
    });
    load_content(logged_user_index);
});