   // Array of words
    const words = ['Python', 'Javascript', 'Go', 'Java', 'PHP', 'Ruby'];

    // Display original words
    document.getElementById("original").textContent = words.join(", ");

    // Filter words with 8 or more characters
    const filteredWords = words.filter(word => word.length >= 8);

    // Display filtered words
    document.getElementById("filtered").textContent = filteredWords.join(", ");