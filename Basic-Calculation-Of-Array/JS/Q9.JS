   // 1. Extracting character "r" from "airplane"
    let x1 = "airplane";
    let charAtIndex2 = x1.charAt(2); // 0-based index
    document.getElementById("output1").textContent = charAtIndex2;

    // 2. Alternating case: "oxoxoxox" -> "oXoXoXoX"
    let x2 = "oxoxoxox";
    let altCase = "";
    for (let i = 0; i < x2.length; i++) {
      altCase += (i % 2 === 0) ? x2[i].toLowerCase() : x2[i].toUpperCase();
    }
    document.getElementById("output2").textContent = altCase;

    // 3. Lowercase and Uppercase of a sentence
    let x3 = "A New Java Book";
    document.getElementById("output3a").textContent = x3.toLowerCase();
    document.getElementById("output3b").textContent = x3.toUpperCase();