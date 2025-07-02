alert("Bem-vindas (os) ao jogo do número secreto");
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto)
let chute
let tentativas = 1;

// se a variável chute for igual ao número secreto
// While = enquanto
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 100');
    if (chute == numeroSecreto) {
        break;
} else {
    if(chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
    } else{
        alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
}
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${palavraTentativa}`);


// TESTE PESSOAS

// alert("adivinhe quantas pessoas são");
// let quantidadePessoas = parseInt(Math.random() * 100 + 1);
// let chute


// while(chute != quantidadePessoas){
//  chute = prompt('Quantas pessoas tem?');
   
// if(chute == quantidadePessoas){    
//     break;
// } else {
//     alert('Vc errou');
// }
// }

// let palavraPessoa = quantidadePessoas > 1 ? 'pessoas' : 'pessoa';
// alert(`Vc acertou tem ${quantidadePessoas} ${palavraPessoa}`);

// if(tentativas > 1){
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else{
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }


// alert('Vamos calcular sua média')

// let numero = parseInt(prompt('Digite o numero'));
// let numero2 = parseInt(prompt('Digite o segundo numero'));
// let numero3 = parseInt(prompt('Digite o terceiro numero'));
// let somaMedia = (numero + numero2 + numero3) / 3; 

// alert(`Sua média é ${somaMedia}`);
// console.log(somaMedia);

// if(somaMedia >= 5){
//     alert('Aprovado');
// } else {
//     alert('Reprovado');
// }

// CONTADOR COM ERRO

// let qtdNumero = prompt('Digite um numero');
// let soma = 0;
// let contador = qtdNumero;

// while(contador > 0){
//     let numero = parseInt(prompt('Digite seu numero'));
//     soma += numero;
//     contador--;

// }

// let media = soma / qtdNumero;
// console.log(media);


// CONTADOR 1 AO 10
// alert('vamos contar ate 10')
// let contador = 0;

// while(contador <= 10){
//     alert(contador);
//     contador++;
// }



//  DIA DA SEMANA

// alert("Oi, que dia da semana é hoje?");
// // let diaSemana = "domingo";

// // console.log(diaSemana)

// let chute = prompt("Que dia da semana é hoje");

// // se a variável chute for igual ao número secreto
// if (diaSemana == chute) {
//     alert(`Bom fim de semana`);
// } else {
//     alert("boa semana");
// }

// PERGUNTE AO USUARIO QUAL É O MES

// let mes = prompt("Em que Mês estamos?");
// // let chute = prompt("Em que Mês estamos?");

// if(mes === "dezembro" ||mes === "janeiro" ||mes === "fevereiro"){
//     alert("Estamos no verão");
// } else{
//     alert("Não é verão");
// }


// PERGUNTE O HORARIO

// let hora = prompt("que horas são?");

// if(hora <= "12h"){
//     alert("Bom dia");
// } else{
//     alert("boa tarde");
// } 
// if(hora >= "12h" || hora <= "18h"){
//     alert("boa tarde");
// } else{
//     alert("bom dia");
// }

// let hora = prompt("que horas são?");

// if(hora < "12h"){
//     alert("Bom dia");
// } else if (hora >= "12h" && hora < "18h"){
//     alert("boa tarde");
// } else{
//     alert("Boa noite");
// }





/*
alert('Boas vindas ao nosso site!');
var nome = Lua;
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

alert('Erro! Preencha todos os campos');
var mensagemDeErro = "Erro! Preencha todos os campos";
var nome = prompt('Coloque seu nome aqui:');
*/