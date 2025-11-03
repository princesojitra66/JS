function triangle() {
    var base = document.getElementById("base").value;
    var height = document.getElementById("height").value;
    var ans = document.getElementById("ans");

    var area = 0.5 * base * height;
    
    ans.innerHTML = "your triangle area is " + area;
  
}