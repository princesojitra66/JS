   function swapValues(a, b) {
            const ans = document.getElementById("ans");

            a = a + b;
            b = a - b;
            a = a - b;

            ans.innerHTML = "After swapping:<br>First value: " + a + "<br>Second value: " + b;
        }

        function swap() {
            const val1 = document.getElementById("val1").value;
            const val2 = document.getElementById("val2").value;
            const ans = document.getElementById("ans");

            if (isNaN(val1) || isNaN(val2)) {
                ans.innerHTML = "Please enter valid numbers.";
                return;
            }

            swapValues(val1, val2);
        }