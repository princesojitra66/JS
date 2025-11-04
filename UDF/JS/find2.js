  function Expression(a, b) {
            return (a * a) + (2 * a * b) + (b * b);
        }

        function result() {
            const a = document.getElementById("a").value;
            const b = document.getElementById("b").value;
            const ans = document.getElementById("ans");

            if (isNaN(a) || isNaN(b)) {
                ans.textContent = "Please enter valid numbers for a and b.";
                return;
            }

            const result = Expression(a, b);
            ans.textContent = "Result: " + result;
        }