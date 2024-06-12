function calculaIMC(){
    if(document.getElementById("peso").value == ""){
        alert("preencha o peso!");
        document.getElementById("peso").style.boderColor = "red";
        document.getElementById("peso").style.backgroundColor = "#ffe5e5";
        document.getElementById("peso").focus();
        return false;
    }
    if(document.getElementById("altura").value == ""){
        alert("Preencha a altura!");
        document.getElementById("altura").style.borderColor = "red";
        document.getElementById("altura").style.backgroundColor = "#ffe5e5";
        document.getElementById("altura").focus();
        return false;
    }
        // parseflot converte os dados de String para Float.
    var peso = parsefloat(document.getElementById("peso").value);
    var altura = parsefloat(document.getElementById("altura").value);
    var resultado = peso/(altura*altura);
    alert("Seu IMC é: "+ resultado);
    return true;
    
}

