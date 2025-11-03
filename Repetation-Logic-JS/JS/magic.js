    function Magic(n) {
      let sum = 0;

      while (n > 0 || sum > 9) {
        if (n === 0) {
          n = sum;
          sum = 0;
        }
        sum += n % 10;
        n = Math.floor(n / 10);
      }

      return sum === 1;
    }


    //CHECK NUMBER
    function magic() {
      var n = parseInt(document.getElementById("num").value);
      var ans = document.getElementById("ans");
      
      if (isNaN(n)) {
        ans.innerHTML = "Please enter a valid number.";
        return;
      }

      if (Magic(n)) {
        ans.innerHTML = "Your number " + n + " is a Magic Number";
      } else {
        ans.innerHTML = "Your number " + n + " is not a Magic Number";
      }
    }