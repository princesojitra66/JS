function avg(){
    var input = document.getElementById("num1");
    var ans = document.getElementById("ans");

    var num1 = input.value;
    var sum = 0;
    for (var i = 1; i <= num1; i++) {
        sum = sum + i;
    }
    var avg = sum / num1;
    ans.innerHTML = avg;
}