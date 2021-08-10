 function botao(){
     document.getElementById("agradecimento").innerHTML = "<b>Obrigada por clicar</b>";
 }

 function soma(){
     var n1 = prompt("Digite o numero");
    var n2 = prompt("Digite o segundo número");
    alert(parseInt(n1) + parseInt(n2));
 }
 
 function redirecionar(){
     window.open("https://www.google.com/");
 }
function trocar(elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigada por passar o mouse";
    //alert("Trocar texto");
    elemento.innerHTML ="Obrigado por passar o mouse"
}

function voltar(elemento){
   // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"

}

function funcaoChange(elemento){
    console.log(elemento.value)
}

 /*function soma (n1, n2){
     return n1 +n2;
 }

 function validaIdade(idade){
     if (idade >=18){
         validar = true
     }else{
         validar = false
     }
     return validar;
 }
  var idade = prompt("Qual sua idade");
  console.log(validaIdade(idade));
*/

  //alert(soma(5, 10)); 
 /*
 var d = new Date();
 alert (d.getDate()); 
*/


/*
var count;
for(count=0; count <= 5; count++){
    alert (count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/




/*
var idade = prompt("Qual sua idade");
if (idade >= 18) {
     alert("maior de idade");
 }else {
     alert("menor de idade");
 }
*/

/*
var fruta = [{nome: "maça", cor: "vermelha"} , {nome:"uva", cor: "roxa"}];
console.log(fruta);
alert(fruta[1].nome);
*/


/*
var fruta = {nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista =["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop ();
//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = "Juliana Lima";
//var n1 = 5;
//var n2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert (idade + idade2);
//console.log(nome); 
//console.log(n1 - idade);
//console.log(frase.toLowerCase());
//alert (frase.replace("Japão", "Brasil"))