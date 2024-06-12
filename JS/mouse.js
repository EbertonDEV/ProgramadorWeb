function sobre(){
    document.getElementById("cores").style.backgroundColor = "red";
    document.getElementById("log").innerHTML += "sobre a div / cor:vermelha<br>";
}

function paraBaixo(){
    document.getElementById("cores").style.backgroundColor = "blue";
    document.getElementById("log").innerHTML += "Clicando na div / cor: azul<br>";
}

function movendo(){
    document.getElementById("cores").style.backgroundColor = "green";
    document.getElementById("log").innerHTML += "movendo sobre a div / cor:verde<br>";
}

function saindo(){
    document.getElementById("cores").style.backgroundColor = "yellow";
    document.getElementById("log").innerHTML += "Saindo da div / cor: amarelo<br>";
}

function paraCima(){
    document.getElementById("cores").style.backgroundColor = "pink";
    document.getelementbyid("log").innerHTML += "Soltando o mouse na div / cor: rosa<br>";
}