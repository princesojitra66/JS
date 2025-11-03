function table() {
    var input = document.getElementById("num1");
    var ans = document.getElementById("ans");    

    var num1 = input.value;
    var i = 1;
   while (i <= 10) {
       var table = num1 * i;
       ans.innerHTML +=num1 + " * " + i + " = " + table + "<br>";
       i++;
       
   }
}