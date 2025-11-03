   const input = "Hire the top 1% freelance developers";

    // Convert to array by splitting on spaces, and get first 4 elements
    const resultArray = input.split(" ").slice(0, 4);

    // Display original and output
    document.getElementById("original").textContent = input;
    document.getElementById("arrayOutput").textContent = JSON.stringify(resultArray);