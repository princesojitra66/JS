  function Expression(a, b, c) {
            const numerator = (b * b) - (4 * a * c);
            const denominator = 2 * a;
            return numerator / denominator;
        }

        function result() {
            const a = document.getElementById("a").value;
            const b = document.getElementById("b").value;
            const c = document.getElementById("c").value;
            const ans =document.getElementById("ans");
            if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
                ans.textContent = "Please enter valid numbers. 'a' must not be 0.";
                return;
            }

            const result = Expression(a, b, c);
            ans.textContent = "Result: " + result.toFixed(2);
        }