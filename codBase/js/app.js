// variables
var limpia= 0;
var operando1 = 0;
var operandoact = 0;
var operador ="";
var acumular1 = 0;
var contador=0;
var result = 0;
var valoract=0;
var actvalor=0;

//limpiar pantalla

function limpiar(){
 document.querySelector('.pantalla span').textContent = "";
 limpia = 1;
}

//reset total
function resetear(){
 document.querySelector('.pantalla span').textContent = "0";
 operando1 = 0;
 operando2 = 0;
 operador = "";
 limpia = 0;
}

//Para adicionar el signo al número
function adicionarsigno(){
valoract = document.querySelector('.pantalla span').textContent
actvalor = document.querySelector('.pantalla span').textContent.substr(0,1)
if(actvalor != '-' && actvalor > 0){
        document.querySelector('.pantalla span').textContent = '-' + valoract
      }
      else{
            if (actvalor != 0){
              document.querySelector('.pantalla span').textContent = valoract.substr(1,9)
            }

      }
}

//acumular valores operación
function acumular(valor){
if (valor != 0 || operandoact != 0){
 if (limpia == 0) {
   limpiar()
 }
 varact = document.querySelector('.pantalla span').textContent.substr(0,1)
 if(varact == 0){
   document.querySelector('.pantalla span').textContent = valor.substr(1,8)
 }

  if (operador.length = 0 ){
     operando1 = valor
   }
 if (valor <= 9 ){
         contador = 0
     document.querySelector('.pantalla span').textContent = document.querySelector('.pantalla span').textContent  + valor;
        operando1 = operando1 + valor
        operandoact = operando1
      }

  else{
      operador= valor
      document.querySelector('.pantalla span').textContent = document.querySelector('.pantalla span').textContent= ""
      acumular1 = operando1
      operando1 = ""
  }
  //controlar lo 8 caracteres
  if (document.querySelector('.pantalla span').textContent.length > 8){
    alert("El cantidad de caracteres no es valido digite 8 máximo!!");
    valor = document.querySelector('.pantalla span').textContent.substr(0,8)
    document.querySelector('.pantalla span').textContent=valor
  }

}
}

//calcular operación

function resolver(operador){
limpiar()
switch(operador){
  case "+":
     if (contador == 0){
    result = parseFloat(acumular1) + parseFloat(operandoact)
    contador = 1
    break;
     }
   else{
     result = parseFloat(result) + parseFloat(operandoact)
      contador = contador + 1
      break;
      }
  case "-":
     if (contador == 0){
       result = parseFloat(acumular1) - parseFloat(operandoact)
       contador = 1
       break;
        }
       else{
         result = parseFloat(result) - parseFloat(operandoact)
         contador = contador + 1
         break;
         }
  case "*":
  if (contador == 0){
    result = parseFloat(acumular1) * parseFloat(operandoact)
    contador = 1
    break;
     }
    else{
      result = parseFloat(result) * parseFloat(operandoact)
      contador = contador + 1
      break;
      }
  case "/":
  if (contador == 0){
    result = parseFloat(acumular1) / parseFloat(operandoact)
    contador = 1
    break;
     }
    else{
      result = parseFloat(result) / parseFloat(operandoact)
      contador = contador + 1
      break;
      }
}
 document.querySelector('.pantalla span').textContent = ""
 document.querySelector('.pantalla span').textContent = result;
 operando1 = result
}

//cambiar Tamaño Tecla

function reducirTamañoLetra(id){
  document.getElementById(id).style ="width: 29%; height: 62.91px"
}
function reducirTamañoLetra2(id){
  document.getElementById(id).style ="width: 22%; height: 62.91px"
}

function aumentarTamañoLetra(id){
  document.getElementById(id).style ="width: 31%; height: 64.91px"
}

function aumentarTamañoLetra2(id){
  document.getElementById(id).style ="width: 21%; height: 64.91px"
}


//tecla 1
document.getElementById('1').onclick= tecla1
document.getElementById('1').onmouseout = tecla2

function tecla1(){
uno = document.getElementById('1').alt
aumentarTamañoLetra(uno)
acumular(uno)
}

function tecla2(){
valor = document.getElementById('1').alt
reducirTamañoLetra(valor)
}

//Tecla 2
document.getElementById('2').onclick= tecla3
document.getElementById('2').onmouseout = tecla4

function tecla3(){
dos = document.getElementById('2').alt
aumentarTamañoLetra(dos)
acumular(dos)
}
function tecla4(){
valor = document.getElementById('2').alt
reducirTamañoLetra(valor)
}

//Tecla 3
document.getElementById('3').onclick= tecla5
document.getElementById('3').onmouseout = tecla6

function tecla5(){
tres = document.getElementById('3').alt
aumentarTamañoLetra(tres)
acumular(tres)
}
function tecla6(){
valor = document.getElementById('3').alt
reducirTamañoLetra(valor)
}

//Tecla 4
document.getElementById('4').onclick= tecla7
document.getElementById('4').onmouseout = tecla8

function tecla7(){
cuatro = document.getElementById('4').alt
aumentarTamañoLetra2(cuatro)
acumular(cuatro)
}
function tecla8(){
valor = document.getElementById('4').alt
reducirTamañoLetra2(valor)
}

//Tecla 5
document.getElementById('5').onclick= tecla9
document.getElementById('5').onmouseout = tecla10

function tecla9(){
cinco = document.getElementById('5').alt
aumentarTamañoLetra2(cinco)
acumular(cinco)
}
function tecla10(){
valor = document.getElementById('5').alt
reducirTamañoLetra2(valor)
}

//Tecla 6

document.getElementById('6').onclick= tecla11
document.getElementById('6').onmouseout = tecla12

function tecla11(){
seis = document.getElementById('6').alt
aumentarTamañoLetra2(seis)
acumular(seis)
}
function tecla12(){
valor = document.getElementById('6').alt
reducirTamañoLetra2(valor)
}

//Tecla 7

document.getElementById('7').onclick= tecla13
document.getElementById('7').onmouseout = tecla14

function tecla13(){
siete = document.getElementById('7').alt
aumentarTamañoLetra2(siete)
acumular(siete)
}
function tecla14(){
valor = document.getElementById('7').alt
reducirTamañoLetra2(valor)
}

//Tecla 8
document.getElementById('8').onclick= tecla15
document.getElementById('8').onmouseout = tecla16

function tecla15(){
ocho = document.getElementById('8').alt
aumentarTamañoLetra2(ocho)
acumular(ocho)
}
function tecla16(){
valor = document.getElementById('8').alt
reducirTamañoLetra2(valor)
}

//Tecla 9

document.getElementById('9').onclick= tecla17
document.getElementById('9').onmouseout = tecla18

function tecla17(){
nueve = document.getElementById('9').alt
aumentarTamañoLetra2(nueve)
acumular(nueve)
}
function tecla18(){
diez = document.getElementById('9').alt
reducirTamañoLetra2(diez)
}

//Tecla 0

document.getElementById('0').onclick= tecla19
document.getElementById('0').onmouseout = tecla20

function tecla19(){
cero = document.getElementById('0').alt
aumentarTamañoLetra(cero)
acumular(cero)
}
function tecla20(){
valor = document.getElementById('0').alt
reducirTamañoLetra(valor)
}

//Tecla .

document.getElementById('punto').onclick= tecla21
document.getElementById('punto').onmouseout = tecla22

function tecla21(){
punto = document.getElementById('punto').alt
aumentarTamañoLetra(punto)
acumular('.')
}
function tecla22(){
valor = document.getElementById('punto').alt
reducirTamañoLetra(valor)
}

//Tecla =

document.getElementById('igual').onclick= tecla23
document.getElementById('igual').onmouseout = tecla24

function tecla23(){
igual = document.getElementById('igual').alt
aumentarTamañoLetra(igual)
resolver(operador)
}

function tecla24(){
valor = document.getElementById('igual').alt
reducirTamañoLetra(valor)
}

//Tecla on
document.getElementById('on').onclick= tecla25
document.getElementById('on').onmouseout = tecla26

function tecla25(){
on = document.getElementById('on').alt
on = on.toLowerCase();
aumentarTamañoLetra2(on)
resetear()
}
function tecla26(){
valor = document.getElementById('on').alt
valor = valor.toLowerCase();
reducirTamañoLetra2(valor)
}

//Tecla sing
document.getElementById('sign').onclick= tecla27
document.getElementById('sign').onmouseout = tecla28

function tecla27(){
sing = "sign"
aumentarTamañoLetra2(sing)
adicionarsigno()
}
function tecla28(){
valor = "sign"
reducirTamañoLetra2(valor)
}

//Tecla raiz
document.getElementById('raiz').onclick= tecla29
document.getElementById('raiz').onmouseout = tecla30

function tecla29(){
raiz = document.getElementById('raiz').alt
aumentarTamañoLetra2(raiz)
}
function tecla30(){
valor = document.getElementById('raiz').alt
reducirTamañoLetra2(valor)
}

//Tecla dividido
document.getElementById('dividido').onclick= tecla31
document.getElementById('dividido').onmouseout = tecla32

function tecla31(){
dividido = document.getElementById('dividido').alt
aumentarTamañoLetra2(dividido)
acumular('/')
}
function tecla32(){
valor = document.getElementById('dividido').alt
reducirTamañoLetra2(valor)
}

//Tecla por
document.getElementById('por').onclick= tecla33
document.getElementById('por').onmouseout = tecla34

function tecla33(){
por = document.getElementById('por').alt
aumentarTamañoLetra2(por)
acumular('*')
}
function tecla34(){
valor = document.getElementById('8').alt
reducirTamañoLetra2(valor)
}

//Tecla menos
document.getElementById('menos').onclick= tecla35
document.getElementById('menos').onmouseout = tecla36

function tecla35(){
menos = document.getElementById('menos').alt
aumentarTamañoLetra2(menos)
acumular('-')
}
function tecla36(){
valor = document.getElementById('menos').alt
reducirTamañoLetra2(valor)
}

//Tecla mas
document.getElementById('mas').onclick= tecla37
function tecla37(){
mas = document.getElementById('mas').alt
acumular('+')
}
