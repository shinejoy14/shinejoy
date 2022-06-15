class BankAccount {
    static getAccDetails(){
    var userData = {
        1900 : {name: "Shine Joy", age: 20, acNo: 1900, password: "pass", address: "ittanthottil(H)", balance: 15000, email: "shinejoy14@gmail.com", pin: 1111},
        2001 : {name: "Shinu Joy", age: 25, acNo: 2001, password: "password", address: "Pulikkal(H)", balance:10000, email: "shinu@gmail.com", pin: 1111},
        3245 : {name: "Sheeja Joy", age: 30, acNo: 3245, password: "password",address: "Pulikkal(H)", balance:12000, email: "sheeja@gmail.com", pin: 1111}
    }
    return userData;
}
static login(){
    var accNo = document.getElementById("loginInputAccNo").value;
    var accPass = document.getElementById("loginInputPassword").value;
    var spans = document.getElementById("accHolderName");
    var data = BankAccount.getAccDetails();
    if(accNo in data){
        let realPWD = data[accNo].password;
        if(accPass == realPWD){
            localStorage.setItem('accountNO', accNo)
            alert("Welcome Back to E-BANK");
            window.location.href = "./userDetails.html";
        }
        else{
            alert("Incorrect password");
        }
    }
    else{
        alert("Sorry This Account Does Not Exist")
    }
        
}
static register(){
     console.log("something");
    //event.preventDefault();
    //location.href = "userDetails.html";
}

static deposit(){
    var acNo = localStorage.getItem('accountNO');
    var depAMT = Number(document.getElementById("depAmt").value);
    let pin = document.getElementById("pin").value;
    
    let data = BankAccount.getAccDetails();
    let pinR = data[acNo].pin;
    
    if(pin == pinR){
        var temp = localStorage.getItem('depmoney') + data[acNo].balance;
        var depsave = localStorage.setItem('depmoney', depAMT + Number(localStorage.getItem('depmoney')));
        if(depAMT >= 1000){
    alert("Successfully deposited "+ depAMT);
    data[acNo].balance += localStorage.getItem('depmoney');
    console.log(data[acNo].balance);
    window.location.href = "userDetails.html";
    }
    else{
        alert("minimum deposit amount is 1000");
    }
    }
    else{
        alert("Wrong pin");
    }
    
}

static withdraw(){
    var accNo = localStorage.getItem('accountNO');
    var withAMT = Number(document.getElementById("withAmt").value);
    let pin = document.getElementById("pin").value;
    localStorage.setItem('withmoney', 0);
    
    let data = BankAccount.getAccDetails();
    let pinR = data[accNo].pin;
    if(pin == pinR){
        var withSave = localStorage.setItem('withmoney', withAMT + Number(localStorage.getItem('withmoney')));
        if(withAMT >= 1000){
        alert("Succesfully withdrawed "+ withAMT);
        localStorage.setItem('depmoney', localStorage.getItem('depmoney') - withAMT);
        window.location.href = "userDetails.html";
    }
    else{
        alert("Minimum withdraw amount is 1000")
    }
    }
    else{
        alert("Wrong Pin");
    }
    
    
}

static loggedUser(){
    var acNo = localStorage.getItem('accountNO');
    var change = document.getElementById("accHolderName");
    var userName = document.getElementById("userName");
    var userAdress = document.getElementById("userAddress");
    var userEmail = document.getElementById("userEmail");
    var userAge = document.getElementById("userAge");
    var userBalance = document.getElementById("userBal");
    var useracNO = document.getElementById("acNO");
    let data = BankAccount.getAccDetails();
    change.innerHTML = data[acNo].name;
    userName.innerHTML = data[acNo].name;
    userAdress.innerHTML = data[acNo].address;
    userBalance.innerHTML = data[acNo].balance + Number(localStorage.getItem("depmoney"));
    userEmail.innerHTML = data[acNo].email;
    useracNO.innerHTML = data[acNo].acNo;
    userAge.innerText = data[acNo].age;
}

static logout(){
    window.location = "index.html";
    localStorage.clear();
    localStorage.setItem('withmoney', 0);
}
}
