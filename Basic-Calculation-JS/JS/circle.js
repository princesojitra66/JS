function circle(){
    var pi = 3.14;
    
    var cirRadius = document.getElementById("radius").value;
    
    var areaOfCir = pi * cirRadius * cirRadius;
    
    var cirResult = document.getElementById("ans");
    
    cirResult.innerHTML = 'your circle area is ' + areaOfCir;
}