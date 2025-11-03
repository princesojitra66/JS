function hyphen(){
    var input= document.getElementById("input").value;
    var ans = document.getElementById("ans");
    
    
      let output = "";
    
      for (let i = 1; i <= input; i++) {
        output += i;
        if (i < input) {
          output += "-";
        }
      }
    
      ans.innerText = output;
}

