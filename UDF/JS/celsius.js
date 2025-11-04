   function convertf(celsius) {
            return (celsius * 1.8) + 32;
        }
        function fahrenheit() {
            const c = document.getElementById("celsius").value;
            const ans =document.getElementById("ans");
            if (isNaN(c)) {
                ans.textContent = "Please enter a valid Celsius temperature.";
                return;
            }

            const fahrenheit = convertf(c);
            ans.textContent = "Temperature in Fahrenheit: "+ fahrenheit.toFixed(2);
        }