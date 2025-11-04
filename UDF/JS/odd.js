        function OddEven(number) {
            const ans = document.getElementById("ans");

            if (isNaN(number)) {
                ans.innerHTML = "Please enter a valid number.";
                return;
            }

            if (number % 2 === 0) {
                ans.innerHTML = number + " is Even.";
            } else {
                ans.innerHTML = number + " is Odd.";
            }
        }

        function check() {
            const input = document.getElementById("numInput").value;
            const number = parseInt(input);
            OddEven(number);
        }