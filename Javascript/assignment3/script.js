function atmWithdrawal() {
    let balance = parseFloat(document.getElementById("balance").value);
    let amount = parseFloat(document.getElementById("amount").value);
    let pin = document.getElementById("pin").value;
    let enteredPin = document.getElementById("enteredPin").value;
    const atmResult = document.getElementById("atmResult");
    if (pin !== enteredPin) {
        atmResult.innerText = "Incorrect PIN";
    } 
    else if (amount > balance) {
        atmResult.innerText = "Insufficient Funds";
    } 
    else if (amount % 100 !== 0) {
        atmResult.innerText = "Enter amount in multiples of 100";
    } 
    else {
        atmResult.innerText = `Withdrawal Successful! Remaining Balance: $${balance - amount}`;
    }
}

function calculateFinalAmount() {
    let orderAmount = parseFloat(document.getElementById("orderAmount").value);
    let discount = 0;
    if(orderAmount > 1000){
        discount = 0.2;
    } 
    else if(orderAmount >= 500){
        discount = 0.1;
    } 
    else{
        discount = 0;
    }
    let discountedPrice = orderAmount * (1 - discount);
    let shipping =  0 ;
    if(orderAmount < 50){
        shipping = 10;
    }
        
    document.getElementById("shoppingResult").innerHTML = `<p>Applied discount(%): ${discount*100}% </p>
                                                            <p>Shipping Amount: $${shipping}
                                                            <p>Final Amount: $${discountedPrice + shipping}</p>`;
}

function calculateGrade() {
    let marks = parseFloat(document.getElementById("marks").value);
    let attendance = parseFloat(document.getElementById("attendance").value);
    if (attendance > 90) marks += 5;

    let grade;
    if(marks >= 90) grade = 'A';
    else if(marks >= 80) grade = 'B';
    else if(marks >= 70) grade = 'C';
    else if(marks >= 60) grade = 'D';
    else grade = 'F';
    document.getElementById("gradeResult").innerText = `Final Grade: ${grade}`;
}

function trafficLightControl(){
    const density = document.getElementById("trafficDensity").value;
    let duration;
    if(density == "Heavy Traffic"){
        duration = 60;
    }
    else if(density == "Moderate Traffic"){
        duration = 40;
    }
    else {
        duration = 20;
    }

    document.getElementById("densityResult").innerText = `Green Light Duration : ${duration}`;
}

function calculateTicketPrice(){
    let price = 12;
    let age = parseInt(document.getElementById("customerAge").value);
    let showTime = parseInt(document.getElementById("showTime").value);
    const result = document.getElementById("ticketResult");
    let discount = 0;
    console.log("age : ", age);
    if (age <= 0|| showTime < 0 || showTime >= 24) {
        result.innerText = "Please enter valid age and show time.";
        return;
    }
    if(showTime <= 17){
        discount = 0.2; 
    } 
    if(age >= 60){
        discount = 0.3;
    }
    else if(age <= 12){
        discount= 0.4;
    }
    price = price * (1 - discount);
    result.innerHTML = `<p>Applied discount(%): ${discount*100}% </p>
                        <p>Final Ticket price: $${Math.round(price * 100) / 100}</p>`;
}

function isEligibleForJob(){
    let age = parseInt(document.getElementById("jobAge").value);
    let experience = parseInt(document.getElementById("experience").value);
    let qualification = document.getElementById("qualification").value;

    if((age>=21 && age <= 55) && (experience>=2) && (qualification != "tenth" && qualification != "inter")){
        document.getElementById("jobResult").innerText = "Congrats! You are eligible for the job application.";
    }
    else{
        document.getElementById("jobResult").innerText = "Sorry! You are not eligible";
    }
}

function applyCoupon(){
    let amount = parseInt(document.getElementById("couponOrderAmount").value);
    let couponCode = document.getElementById("couponCode").value;
    let discount = 0;
    let shipping = 10;
    const result = document.getElementById("couponResult");
    let couponText = 'Applied Coupon : ${couponCode}';
    if(couponCode === "DISCOUNT10"){
        if(amount < 500){
            result.innerHTML = "Invalid coupon.";
            return;
        }
        discount = 0.1;
        shipping = 0;
    }
    else if(couponCode === "FREESHIP"){
        if(amount < 200){
            result.innerHTML = "Invalid coupon.";
            return;
        }
        shipping = 0;
    }
    amount = amount * (1 - discount);
    result.innerHTML = `<p>Applied couponCode: ${couponCode} </p>
                        <p>Shipping Amount: $${shipping}
                        <p>Final Amount: $${amount + shipping}</p>`;
}

function choosePlan(){
    let planType = document.getElementById("planType").value;
    let wantTrainer = document.getElementById("wantTrainer").value;
    let wantDietPlan = document.getElementById("wantDietPlan").value;
    let recommendedPlan;
    let amount;
    if(wantTrainer === "Yes" && wantDietPlan === "Yes"){
        recommendedPlan = "VIP";
        amount = "$80/month"
    }
    else if(wantTrainer === "Yes"){
        recommendedPlan = "Premium"
        amount = "$50/month"
    }
    else if(wantDietPlan === "Yes"){
        recommendedPlan = "VIP";
        amount = "$80/month"
    }
    else{
        recommendedPlan = "Basic";
        amount = "$20/month"
    }
    const result = document.getElementById("planResult");
    if(planType === recommendedPlan){
        result.innerHTML = `<p>You chose the right plan.</p>
                            <p>Your Plan: ${recommendedPlan} - ${amount}</p>`;
    }
    else{
        result.innerHTML = `<p>As per your requirements, here is your suggested plan.</p>
                            <p>${recommendedPlan} - ${amount}</p>`;
    }
}

function calculateElectricityBill(){
    let units = parseInt(document.getElementById("units").value);
    let timeOfDay = parseInt(document.getElementById("timeOfDay").value);

    let amount;
    if(units <= 100){
        amount = units * 5;
    }
    else if(units <= 300){
        amount = 500 + ((units - 100) * 4);
    }
    else{
        amount = 500 + 600 + ((units - 300) * 3);
    }
    const result = document.getElementById("electricityResult");
    if(timeOfDay < 0 || timeOfDay > 24){
        result.innerText = "Enter valid time."
        return;
    }
    else if(timeOfDay < 8 || timeOfDay > 20){
        amount = amount * 1.1;
    }
    result.innerText = `Your Total Bill : $${amount}`;
}

function calculateFlightFare(){
    let classType = document.getElementById("classType").value;
    let weight = parseInt(document.getElementById('luggageWeight').value);
    let isStudent = document.querySelector('input[id="isStudent"]:checked');
    let isSenior = document.querySelector('input[id="isSenior"]:checked');
    const result = document.getElementById("flightResult");
    let fare = 300;
    let discount = 0;
    if(isSenior && isStudent){
        result.innerText = "Please choose your category correctly.";
        return;
    }
    else if(isStudent){
        discount = 0.15;
    }
    else if(isSenior){
        discount = 0.1;
    }
    if(classType === "Business"){
        fare += 200;
    }
    else if(classType === "First Class"){
        fare += 500;
    }

    fare = fare * (1 - discount);
    let extraAmount = 0;
    if(weight > 20){
        extraAmount = ((weight-20)*5);
    }
    fare += extraAmount;

    result.innerHTML = `<p>Applied discount(%): ${discount*100}% </p>
                        <p>Amount for extra luggage(over 20kg): $${extraAmount}
                        <p>Final Fare: $${Math.round(fare*100)/100}</p>`
}