      function Area(radius) {
            const pi = Math.PI;
            return pi * radius * radius;
        }

        function circle() {
            const radius = document.getElementById("radius").value;
            const ans = document.getElementById("ans");

            if (isNaN(radius) || radius < 0) {
                ans.textContent = "Please enter a valid positive number.";
                return;
            }

            const area = Area(radius);
            ans.textContent = "Area of the circle is: " + area.toFixed(2);
        }