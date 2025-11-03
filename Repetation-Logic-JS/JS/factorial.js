function factorial() {
    var input = document.getElementById("num1");
    var ans = document.getElementById("ans");

    var num1 = input.value;
    var factorial = 1;
    var i = 1;
    while (i <= num1) {
        factorial = factorial * i;
        i++;
    }
    ans.innerHTML = "The number " + num1 + " factorial is " + factorial;
}