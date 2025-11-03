        // Define the original array
        const arr = [2, 5, 6, 3, 8, 9];

        // Use the map() method to create a new array with squared elements
        const squaredArr = arr.map(element => element * element);

        // Display the original array
        document.getElementById('originalArray').textContent = arr.join(', ');

        // Display the squared array
        document.getElementById('squaredArray').textContent = squaredArr.join(', ');