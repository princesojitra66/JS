        // Define the array
        const numbers = [10, 20, 30, 40, 50];

        // Display the original array
        document.getElementById('originalArray').textContent = numbers.join(', ');

        // --- Sum using a for loop ---
        let sumFor = 0;
        for (let i = 0; i < numbers.length; i++) {
            sumFor += numbers[i];
        }
        document.getElementById('sumForLoop').textContent = sumFor;

        // --- Sum using a forEach loop ---
        let sumForEach = 0;
        numbers.forEach(function(number) {
            sumForEach += number;
        });
        document.getElementById('sumForEachLoop').textContent = sumForEach;