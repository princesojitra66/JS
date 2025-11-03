    const numbers = [10, 20, 30, 40, 50];

    // Function to check if value exists in the array
    function checkValue() {
      const value = document.getElementById("searchValue").value;
      const num = Number(value); // convert to number

      // Check if number is in the array
      if (numbers.includes(num)) {
        document.getElementById("result").textContent = `${num} is found in the array.`;
      } else {
        document.getElementById("result").textContent = `${num} is NOT found in the array.`;
      }
    }