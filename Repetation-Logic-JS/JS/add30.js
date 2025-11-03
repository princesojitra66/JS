function add30() {
    var num = document.getElementById("num").value;
    var ans = document.getElementById("ans");
    let sum = 0;
    let i = 0;

    if (!isNaN(num) && num >= 0) {
        do {
            sum += i;
            i++;
        } while (i <= num);

        ans.innerHTML = "The sum of integers from 0 to " + num + " is: " + sum;
    } else {
        ans.innerHTML = "Please enter a valid non-negative number.";
    }
}
