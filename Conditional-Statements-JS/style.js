function ans() {

    var ans = document.getElementById("ans");
    var season = document.getElementById("input").value;
    switch (true) {
        case (season >= 1 && season <= 4):
            ans.innerHTML = 'winter season';
            break;
        case (5 <= season && season <= 8):
            ans.innerHTML = 'summer season';
            break;
        case (9 <= season  && season <= 12):
            ans.innerHTML = 'monsoon season';
            break;
        default:
            ans.innerHTML = 'invalid season';
            break;
    }
}

function voting() {
    var age = document.getElementById("input1").value;
    var ans1 = document.getElementById("ans1");
    if (age >= 18) {
        ans1.innerHTML = 'eligible for voting';
    } else {
        ans1.innerHTML = 'not eligible for voting';
    }
}

function age() {
    var age = document.getElementById("input2").value;
    var ans1 = document.getElementById("ans2");
    if (age < 14) {
        ans1.innerHTML = 'your age group is Infancy and Childhood';
    } else if (age >= 14 && age <= 19) {
        ans1.innerHTML = 'your age group is Adolescence/Teenage';
    }else if (age >= 20 && age <= 60) {
        ans1.innerHTML = 'your age group is Adulthood';
    }else if (age > 60) {
        ans1.innerHTML = 'your age group is Seniors/Elderly';
    }
}


function  interest(){
    var amount = document.getElementById("input3").value;
    var ans3 = document.getElementById("ans3");
    if(amount > 0){
        ans3.innerHTML = 'your Amount submitted sussessfully';
    }else{
        ans3.innerHTML = 'invalid amount';
    }
}

function interest1(){
    var years = document.getElementById("input4").value;
    var ans4 = document.getElementById("ans4");
    var rate ;
    if(years >= 3 && years <= 5){
        rate = 3;
        ans4.innerHTML = 'your interest rate is 3%';
    }else if(years > 5 && years <= 8){
        rate = 5;
        ans4.innerHTML = 'your interest rate is 5%';
    }else if(years > 8 && years <= 12){
        rate = 12;
        ans4.innerHTML = 'your interest rate is 12%';
    }else if(years > 12){
        rate = 15;
        ans4.innerHTML = 'your interest rate is 15%';
    }else{
        ans4.innerHTML = 'invalid years';
    }
    
    var amount = document.getElementById("input3").value;
    var interest = (amount*years*rate)/100;
    var ans5 = document.getElementById("ans5");
    ans5.innerHTML = 'your interest is '+interest;
}

function bill(){
    var unit = document.getElementById("unit").value;
    var ans = document.getElementById("ans");
    var pay 
    if(unit > 0 && unit <= 50){
        pay = unit*1;
        ans.innerHTML = 'payment is '+pay+'your unit submitted sussessfully';
    }else if(unit > 50 && unit <= 150){
        pay=50;
        unit = unit-50;
        pay = pay +unit*2;
        ans.innerHTML = 'payment is '+pay+' your unit submitted sussessfully';
    }else if(unit > 150 && unit <= 250){
        pay = 250;
        unit = unit-150;
        pay = pay+unit*3;
        ans.innerHTML = 'payment is '+pay+' your unit submitted sussessfully';
    }else if(unit > 250){
        pay = 550;
        unit = unit-250;
        pay = pay+unit*4;
        ans.innerHTML = 'payment is '+pay+' your unit submitted sussessfully';
    }else{
        ans.innerHTML = 'invalid unit';
    }
}