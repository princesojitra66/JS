function prime() {
  var input = parseInt(document.getElementById("num").value);
  var ans = document.getElementById("ans");

  if (isNaN(input)) {
    ans.innerHTML = "Please enter a valid number.";
    return;
  }

  if (input <= 1) {
    ans.innerHTML = "Please enter a number greater than 1.";
    return;
  }

  if (input === 2) {
    ans.innerHTML = "2 is a prime number.";
    return;
  }

  if (input % 2 === 0) {
    ans.innerHTML = input + " is not a prime number.";
    return;
  }
var i = 3;
  while ( i <= Math.sqrt(input)) {
    if (input % i === 0) {
      ans.innerHTML = input + " is not a prime number.";
      i += 2;
      return;
    }
  }

  ans.innerHTML = input + " is a prime number.";
}
