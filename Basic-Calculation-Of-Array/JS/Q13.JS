    const inputText = "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

    // Replace all occurrences of "dog" with "cat" using regex
    const outputText = inputText.replace(/dog/g, "cat");

    // Display results
    document.getElementById("original").textContent = inputText;
    document.getElementById("modified").textContent = outputText;