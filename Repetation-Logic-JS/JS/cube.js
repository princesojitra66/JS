function cude() {
    var input = document.getElementById("num1");
    var ans = document.getElementById("ans");

    var num1 = input.value;
    var cube = num1 * num1 * num1;
    ans.innerHTML = cube;
}