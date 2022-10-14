var calculo = "";
var display = "";

function calculadora(numero){
    calculo= calculo + numero;
    document.getElementById("display").innerHTML= calculo;

}

function resultado(){
    let resultado = eval(calculo)
    document.getElementById("display").innerHTML= resultado;
    calculo = ""
}

function resetear(){
    display = "";
    document.getElementById("display").innerHTML=display;

}

function borrar(){
    let op = document.getElementById('display').innerHTML;  
    document.getElementById('display').innerHTML = op.slice(0,op.length-1);

}


