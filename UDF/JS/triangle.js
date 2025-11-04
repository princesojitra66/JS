  function Area(base, height) {
            return (base * height) / 2;
        }

        function triangleArea() {
            const base = document.getElementById("base").value;
            const height = document.getElementById("height").value;
            const ans = document.getElementById("ans");

            if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
                ans.textContent = "Please enter valid positive numbers for base and height.";
                return;
            }   

            const area = Area(base, height);
            ans.textContent = "Area of the triangle is: " + area.toFixed(2);
        }