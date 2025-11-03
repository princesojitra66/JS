 function Palindrome() {
            var numInput = document.getElementById("num").value;
            var ans = document.getElementById("ans");

            if (numInput === "") {
                ans.innerHTML = "Please enter a number.";
                return;
            }

            var num = numInput;
            var reverse = 0;
            var temp = Math.abs(num);

            while (temp !== 0) {
                reverse = (reverse * 10) + (temp % 10);
                temp = Math.floor(temp / 10);
            }

            if (reverse === Math.abs(num)) {
                ans.innerHTML = "Yes, your number " + num + " is a palindrome.";
            } else {
                ans.innerHTML = "No, your number " + num + " is not a palindrome.";
            }
        }