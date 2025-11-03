    // Define the original array
    const originalArray = [1, 2, 3, 4, 5];

    // Reverse the array using .slice() to avoid mutating the original
    const reversedArray = originalArray.slice().reverse();

    // Display the arrays in HTML
    document.getElementById("original").textContent = originalArray.join(", ");
    document.getElementById("reversed").textContent = reversedArray.join(", ");