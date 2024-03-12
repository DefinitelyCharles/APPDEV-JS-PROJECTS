const btn1 = document.getElementById("btn1")
btn1.addEventListener("click", () => {
    let Second = document.getElementById("Second").value;
    
    if (Second >= 86400) {
        let Day = Second / 86400;
        Second %= 86400;
        document.getElementById("output1").innerHTML = `Days: ${Day}<br> Remaining seconds: ${Second}`;
    } else if (Second >= 3600) {
        let Hour = Second / 3600;
        Second %= 3600;
        document.getElementById("output1").innerHTML = `Hours: ${Hour}<br> Remaining seconds: ${Second}`;
    } else if (Seconds >= 60) {
        let Minute = Second / 60;
        Second %= 60;
        document.getElementById("output1").innerHTML = `Minutes: ${Minute}<br> Remaining seconds: ${Second}`;
    } else {
        document.getElementById("output1").innerHTML = `Seconds: ${Second}`;
    }

})

const btn2 = document.getElementById("btn2")
btn2.addEventListener("click", () => {
    let Weight = document.getElementById("Weight").value;
    
    if (Weight <= 2) {
        let Price = 1.10;
        document.getElementById("output2").innerHTML = `Weight: ${Weight}<br> Total Price: $${Price}`;
    } else if (Weight > 2 && Weight < 7) {
        let Price = 2.20;
        document.getElementById("output2").innerHTML = `Weight: ${Weight}<br> Total Price: $${Price}`;
    } else if (Weight > 6 && Weight < 11) {
        let Price = 3.70;
        document.getElementById("output2").innerHTML = `Weight: ${Weight}<br> Total Price: $${Price}`;
    } else {
        let Price = 3.80;
        document.getElementById("output2").innerHTML = `Weight: ${Weight}<br> Total Price: $${Price}`;
    }

})

const btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () => {
    let Amount = document.getElementById("Amount").value;
    
    if (Amount <= 10) {
        let Discount = 0;
        let TotalPrice = Amount * 99;
        
        document.getElementById("output3").innerHTML = `Amount of packages: ${Amount}<br> Discount: ${Discount}%<br> Total Price: ${TotalPrice}`;
    } else if (Amount > 10 && Amount < 20) {
        let Discount = 20;
        let TotalPrice = (Amount * 99) * .20;
        
        document.getElementById("output3").innerHTML = `Amount of packages: ${Amount}<br> Discount: ${Discount}%<br> Total Price: ${TotalPrice}`;
    } else if (Amount > 20 && Amount < 50) {
        let Discount = 30;
        let TotalPrice = (Amount * 99) * .30;
        document.getElementById("output3").innerHTML = `Amount of packages: ${Amount}<br> Discount: ${Discount}%<br> Total Price: ${TotalPrice}`;
    } else if (Amount > 50 && Amount < 100){
        let Discount = 40;
        let TotalPrice = (Amount * 99) * .40;
        document.getElementById("output3").innerHTML = `Amount of packages: ${Amount}<br> Discount: ${Discount}%<br> Total Price: ${TotalPrice}`;
    } else {
        let Discount = 50;
        let TotalPrice = (Amount * 99) * .50;
        document.getElementById("output3").innerHTML = `Amount of packages: ${Amount}<br> Discount: ${Discount}%<br> Total Price: ${TotalPrice}`;
    }

})

const btn4 = document.getElementById("btn4")
btn4.addEventListener("click", () => {
    let Mass = document.getElementById("Mass").value;
    let Weight = Mass * 9.8;
    
    if (Weight >= 1000) {
        document.getElementById("output4").innerHTML = `Weight: Too Heavy`;
    } else if (Weight <= 10) {
        document.getElementById("output4").innerHTML = `Weight: Too Light`;
    } else {
        document.getElementById("output4").innerHTML = `Weight: Normal`;
    }

})


