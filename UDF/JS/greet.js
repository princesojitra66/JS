 function greet(message) {
            let ans = document.getElementById("output");
            if (message === undefined) {
                ans.textContent = "Good Morning";
            } else {
                ans.textContent = message;
            }
        }