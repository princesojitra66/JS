function sum() {
    var ans = document.getElementById("ans");
    var sum = 0;

    for(var i=1;i<=10;i++){

        sum = sum + i*i;

        if(i<=9){
            ans.innerHTML += i*i + "+";
        }else{
            ans.innerHTML += i*i + "=";
        }

    }

    ans.innerHTML += sum;


}