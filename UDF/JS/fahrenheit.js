  function convert(fahrenheit) {
            return (fahrenheit - 32) / 1.8;
        }

        function celsius() {
            const f = document.getElementById("fahrenheit").value;
            const ans = document.getElementById("ans");
            if (isNaN(f)) {
                ans.textContent = "Please enter a valid Fahrenheit temperature.";
                return;
            }

            const celsius = convert(f);
            ans.textContent =" Temperature in Celsius:" + celsius.toFixed(2);
        }