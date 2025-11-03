function rectangle() {
    var length = document.getElementById("length").value;
    var width = document.getElementById("width").value;
    
    var areaOfRect = length * width;
    
    var rectResult = document.getElementById("ans");
    
    rectResult.innerHTML = "your rectangle area is " + areaOfRect;
}