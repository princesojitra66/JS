function fibonacci(n) {
            if (n == 1) return 0;
            if (n == 2) return 1;
            return fibonacci(n - 1) + fibonacci(n - 2);
        }

        function calculateFibonacci() {
            var num = document.getElementById("num").value;
            var ans = document.getElementById("ans");

            if (isNaN(num) || num < 1) {
                ans.innerHTML = "Please enter a valid number (1 or greater).";
                return;
            }

            var result = fibonacci(num);
            ans.innerHTML = "The Fibonacci number at position " + num + " is " + result;
        }