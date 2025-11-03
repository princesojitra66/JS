function Count(n) {
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

function Disarium(n) {
    let x = n;
    let count = Count(n);

    let sum = 0;
    while (x > 0) {
        let r = x % 10;
        sum += Math.pow(r, count--);
        x = Math.floor(x / 10);
    }

    return sum === n;
}

function disarium() {
    var n = parseInt(document.getElementById("num").value); // ✅ Convert string to number
    var ans = document.getElementById("ans");

    if (isNaN(n)) {
        ans.innerHTML = "Please enter a valid number.";
        return;
    }

    if (Disarium(n))
        ans.innerHTML = "Your number " + n + " is a Disarium number.";
    else
        ans.innerHTML = "Your number " + n + " is not a Disarium number.";
}
