function armstrong() {
    
var input = document.getElementById("num").value;
var ans = document.getElementById("ans");

var numberOfDigits = input.length;
var sum = 0;

var temp = input;

while (temp > 0) {

    var remainder = temp % 10;

    sum += remainder ** numberOfDigits;

    temp = parseInt(temp / 10); 
}

if (sum == num) {
    ans.innerHTML= input+"Armstrong number";
}
else {
    ans.innerHTML = input + " is not an Armstrong number.";
}

}