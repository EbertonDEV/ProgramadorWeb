function submeti(){
    document.getElementById("log").innerHTML += "SUBMETI<br>";
    return false;
}

function resetei(){
    document.getElementById("log").innerHTML += "resetei<br>";
}

function saiDoCampo(){
    document.getElementById("log").innerHTML += "Sai do campo<br>";
}

function mudei(){
    document.getElementById("log").innerHTML += "Mudei<br>";
}  

function entreiNoCampo(){
    document.getElementById("log").innerHTML += "Enteri no Campo<br>";
}

function selecionei(){
    document.getElementById("log").innerHTML += "Selecionei<br>";
}

function teclaBaixo(){
    document.getElementById("log").innerHTML += "Tecla para baixo<br>";
}

function teclaCima(){
    document.getElementById("log").innerHTML += "Tecla para cima<br>";
}

/* Eventos de Input 
ONBLUR: Quando sai de dentro do campo.
ONCHANGE: Seleciona uma informação.
ONFOCUS: Quando entra no campo de digitação.
ONSELECT: Quando seleciona um texto.
ONSUBMIT: Quando um formulario e submetido.
ONRESET: Quando um botão de reset é presionado.
ONKEYDOWN: Quando uma tecla é precionada.
ONEKEYUP: Quando uma tecla e solta apos ser precionada.*/