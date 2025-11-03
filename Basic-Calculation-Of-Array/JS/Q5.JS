        const numbers = [-23, -20, -17, "-12", "-5", 0, 1, 5, 12, 19, 20];

        // Display the original array
        document.getElementById('originalArray').textContent = JSON.stringify(numbers);

        // Use the filter() method to create a new array containing only non-negative values
        // The Number() constructor is used to convert potential string numbers to actual numbers
        const positiveNumbers = numbers.filter(value => Number(value) >= 0);

        // Display the filtered array
        document.getElementById('filteredArray').textContent = JSON.stringify(positiveNumbers);