        // Define arrays
        const numbers = [23, 20, 17, 12, 5, 0, 1, 5, 12, 19, 20];
        const colors = ["Red", "Green", "White", "Black"];

        // Display original arrays
        document.getElementById('originalNumbers').textContent = numbers.join(', ');
        document.getElementById('originalColors').textContent = colors.join(', ');

        // Sort numbers in ascending order
        const ascendingNumbers = [...numbers].sort((a, b) => a - b);
        document.getElementById('ascendingNumbers').textContent = ascendingNumbers.join(', ');

        // Sort numbers in descending order
        const descendingNumbers = [...numbers].sort((a, b) => b - a);
        document.getElementById('descendingNumbers').textContent = descendingNumbers.join(', ');

        // Sort colors in ascending order (alphabetical)
        const ascendingColors = [...colors].sort();
        document.getElementById('ascendingColors').textContent = ascendingColors.join(', ');

        // Sort colors in descending order (reverse alphabetical)
        const descendingColors = [...colors].sort().reverse();
        document.getElementById('descendingColors').textContent = descendingColors.join(', ');