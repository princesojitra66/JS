        function convertAndDisplayASCII() {
            const inputArrayString = document.getElementById('inputArray').value;
            const asciiValues = [];

            for (let i = 0; i < inputArrayString.length; i++) {
                const char = inputArrayString[i];
                const ascii = char.charCodeAt(0); // Get ASCII value of the character
                asciiValues.push(ascii);
            }

            document.getElementById('asciiOutput').textContent = `[${asciiValues.join(', ')}]`;
        }

        // Call the function on page load to display initial example
        window.onload = convertAndDisplayASCII;