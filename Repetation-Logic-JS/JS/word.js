  function word() {
      let max =document.getElementById("input").value;
      let ans = document.getElementById("ans"); 
      
      if (max < 1 || max > 100) {
          ans.innerText = "Please enter a valid number between 1 and 100.";
        }else{

            let i = 1;
              do {
                if (max % 3 == 0 && max % 5 == 0) {
                  ans.innerHTML = "FizzBuzz";
                } else if (max % 3 == 0) {
                  ans.innerHTML = "Fizz";
                } else if (max % 5 == 0) {
                  ans.innerHTML = "Buzz";
                } else {
                  ans.innerHTML = "sorry your number is not";
                }
                i++;
              } while (i<=100);
        }
        

    //   ans.innerText = output;
    }