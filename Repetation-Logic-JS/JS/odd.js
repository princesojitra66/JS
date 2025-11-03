function odd() {
    var input = document.getElementById("oddin");
    var ans = document.getElementById("ans");

        var num = input.value;
        if (num % 2 == 0) {
            ans.innerHTML = "even";
        }
        else {
            ans.innerHTML = "odd";
        }
    }