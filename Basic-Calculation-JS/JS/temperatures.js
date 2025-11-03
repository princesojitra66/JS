function temperatureF() {
    var fehrenInput = document.getElementById("F").value;

    var celciusRes = (fehrenInput-32) * 5/9;
    
    var fehran = document.getElementById("ans");
    fehran.innerHTML = "your celcius is " + celciusRes;
}
function temperatureC() {    
    var celsiusInput = document.getElementById("C").value;

    var fehranRes = (celsiusInput*9/5) + 32;
    
    var celsius = document.getElementById("ans");
    celsius.innerHTML = "your fehranheit is " + fehranRes;
}