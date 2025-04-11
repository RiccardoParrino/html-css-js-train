const riccardo = {
    username: "riccardo",
    pin: "111111",
    balance: new Number(26000),
    ops: [26000,-3000,500,2000,100,400]
};

const francesco = {
    username: "francesco",
    pin: "123456",
    balance: new Number(2000),
    ops: [1000,-500,500,500,500]
};

const giovanna = {
    username: "giovanna",
    pin: "123455",
    balance: new Number(5000),
    ops: [4000,-500,500,500,500]
};

const user_list = [riccardo, francesco, giovanna];
let current_logged_user = 0;

let remaining_logged_time = 60 * 9; // 9 minutes

let timerId = setInterval(function (){
    remaining_logged_time -= 1;
    remaining_minutes = Math.floor(remaining_logged_time / 60);
    remaining_seconds = remaining_logged_time - remaining_minutes*60;
    document.getElementById("remaining-time").innerText = "You will be logged out in " + remaining_minutes + ":" + remaining_seconds;
}, 1000);

window.addEventListener("load", function() {
    load_content(current_logged_user);
});

window.addEventListener("click", function() {
    remaining_logged_time = 60 * 9;
})

function load_content(logged_user_index = 0) {
    const navbar_username = this.document.getElementById("logged-username");
    navbar_username.innerText = user_list[logged_user_index].username;

    const total_balance_element = this.document.getElementById("total-balance");
    total_balance_element.getElementsByTagName("p")[0].innerText = "$" + user_list[logged_user_index].balance;

    const current_date = this.document.getElementById("current-date");
    const d = new Date(); 
    current_date.innerText = "As of " + d.getDate() +"/"+ d.getDay() +"/"+ d.getFullYear() +", "+ d.getHours() + ":" + d.getMinutes();

    const left_content = this.document.getElementsByClassName("left-content")[0];
    left_content.innerHTML = "";

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

    if (logged_user_index === -1) {
        alert("Utente non trovato!");
        return;
    }

    document.getElementById("username").value = "";
    document.getElementById("pin").value = "";
    load_content(logged_user_index);
});

const transfer_request_button = document.getElementById("transfer-request-button");

transfer_request_button.addEventListener("click", function() {
    const transfer_to = document.getElementById("transfer-to").value;
    const transfer_amount = document.getElementById("transfer-amount").value;

    document.getElementById("transfer-to").value = "";
    document.getElementById("transfer-amount").value = "";

    const transfer_to_index = user_list.findIndex(function (element){
        return transfer_to === element.username;
    });
    if (transfer_to_index === -1) {
        alert("Utente non trovato!");
        return;
    }

    const regex = /[a-zA-Z]/g;
    if(regex.test(transfer_amount)){
        alert("Inserisci un budget corretto!");
        return;
    }

    if(transfer_to_index === current_logged_user) {
        alert("Non puoi trasferire denaro a te stesso!");
        return;
    }

    let numeric_transfer_amount = new Number(transfer_amount);
    console.log( typeof numeric_transfer_amount );

    if (user_list[current_logged_user].balance >= transfer_amount) {
        user_list[current_logged_user].balance -= numeric_transfer_amount;
        user_list[current_logged_user].ops.push(-numeric_transfer_amount);
        user_list[transfer_to_index].balance += numeric_transfer_amount;
        user_list[transfer_to_index].ops.push(numeric_transfer_amount);
        load_content(current_logged_user);
    }
});

const loan_request_button = document.getElementById("loan-request-button");

loan_request_button.addEventListener("click", function() {
    request_amount = document.getElementById("request-amount").value;

    document.getElementById("request-amount").value = "";

    const regex = /[a-zA-Z]/g;
    if(regex.test(request_amount)){
        alert("Inserisci un budget corretto!");
        return;
    }

    let numeric_request_amount = new Number(request_amount);
    
    alert("Prestito approvato!");

    const loanTimeout = setTimeout(function() {
        user_list[current_logged_user].balance += numeric_request_amount;
        load_content(current_logged_user);
    }, 10000); // approve the loan after ten second
});

const close_request_button = document.getElementById("close-request-button");

close_request_button.addEventListener("click", function () {
    const request_user_close = document.getElementById("request-user-close").value;
    const request_pin_close = document.getElementById("request-pin-close").value;

    const index_user_to_be_removed = user_list.findIndex(function(element){
        if (element.username === request_user_close) {
            return element.pin === request_pin_close;
        } else {
            return false;
        }
    });
    
    if (index_user_to_be_removed === -1) {
        alert("Utente non trovato!");
        return;
    }

    document.getElementById("request-user-close").value = "";
    document.getElementById("request-pin-close").value = "";

    user_list.splice(index_user_to_be_removed, 1);

    alert("Utente rimosso con successo!");

    load_content(current_logged_user);
});


// LOGIN SECTION
const login_button =  document.getElementById("login-button");

login_button.addEventListener("click", function() {
    const typed_username = document.getElementById("login-username-input").value;
    const typed_pin = document.getElementById("login-pin-input").value;
    const logged_user_index = user_list.findIndex(function(element){
        if (element.username === typed_username) {
            return element.pin === typed_pin;
        } else {
            return false;
        }
    });

    if (logged_user_index === -1) {
        alert("Utente non trovato!");
        return;
    }

    document.getElementById("login-username-input").value = "";
    document.getElementById("login-pin-input").value = "";

    document.getElementById("login").style.display = "none";
    document.getElementById("spa").style.display = "block";
    load_content(logged_user_index);
});