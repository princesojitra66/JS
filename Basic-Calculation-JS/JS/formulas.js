
var a = document.getElementById("A").value;
var b = document.getElementById("B").value;
var c = document.getElementById("C").value;
function formulas1() {
    // equation-1
    var eq1Res = (a-b)*(a+b);
    
    var eq1Result = document.getElementById("ans");
    
    eq1Result.innerHTML = eq1Res;
}
function formulas2() {
    // equation 2
    var eq2Res = a*a - 2*a*b + b*b;
    
    var eq2Result = document.getElementById("ans2");
    
    eq2Result.innerHTML = eq2Res;
} 
    function formulas3() {     
        // equation 3
        var eq3Res = a*a + b*b + c*c + 2*a*b + 2*a*c + 2*b*c;
        
        var eq3Result = document.getElementById("ans3");
        
        eq3Result.innerHTML = eq3Res;
    }
    function formulas4() {
    // equation 4
    var eq4Res = a*a + b*b + c*c - 2*a*b - 2*a*c + 2*b*c;
    
    var eq4Result = document.getElementById("ans4");
    
    eq4Result.innerHTML = eq4Res;
    }
    function formulas5() {
    // equation 5
    var eq5Res = a*a*a - 3*a*a*b + 3*a*b*b - b*b*b;
    
    var eq5Result = document.getElementById("ans5");
    
    eq5Result.innerHTML = eq5Res;
}