   function Area(length, height) {
            return length * height;
        }

        function rectangleArea() {
            const length = document.getElementById("length").value;
            const height = document.getElementById("height").value;
            const ans = document.getElementById("ans");

            if (isNaN(length) || isNaN(height) || length <= 0 || height <= 0) {
                ans.textContent = "Please enter valid positive numbers for length and height.";
                return;
            }

            const area = Area(length, height);
           ans.textContent = "Area of the rectangle is: " + area.toFixed(2);
        }