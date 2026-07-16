function greetUser(){
    const name = document.getElementById("name").value;

    if(name===""){
        document.getElementById("greeting").innerHTML = "Hello";
    }else{
        document.getElementById("greeting").innerHTML =" Hello, "+name;
    }
}

function changeColor(box,color){
    box.style.backgroundColor = color;

    if(color ==="blue"){
        box.style.color ="white";
    }else if(color ==="green"){
        box.style.color ="white";
    }else{
        box.style.color ="black";
    }
}