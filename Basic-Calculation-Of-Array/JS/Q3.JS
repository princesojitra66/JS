        // Function to find the maximum and minimum values in an array
        function findMinMax(arr) {
            if (arr.length === 0) {
                return { min: undefined, max: undefined }; // Handle empty array case
            }

            let min = arr[0];
            let max = arr[0];

            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                }
                if (arr[i] > max) {
                    max = arr[i];
                }
            }
            return { min: min, max: max };
        }

        // Define the array
        const numbers = [45, 12, 78, 34, 99, 6, 23];

        // Get the elements to display the results
        const originalArraySpan = document.getElementById('originalArray');
        const maxValueSpan = document.getElementById('maxValue');
        const minValueSpan = document.getElementById('minValue');

        // Display the original array
        originalArraySpan.textContent = `[${numbers.join(', ')}]`;

        // Call the function to find min and max
        const result = findMinMax(numbers);

        // Display the results
        maxValueSpan.textContent = result.max;
        minValueSpan.textContent = result.min;