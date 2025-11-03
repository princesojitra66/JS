function patten1(){

    var ans = document.getElementById("ans");

    for(var i=5;i>=1;i--){

        for(var j=5;j>=i;j--){
            ans.innerHTML += j + "  ";
        }
        ans.innerHTML += "<br>";
    }
}

function patten2(){

    var ans = document.getElementById("ans2");
    var count = 1;

    for(var i=1;i<=5;i++){
        for(var j=1;j<=i;j++){
            ans.innerHTML += count + "  ";
            count++;
        }
        ans.innerHTML += "<br>";
    }

}
