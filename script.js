//IF/ELSE

//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 33
if (idade >= 18) {
    console.log("Você já pode dirigir")
}
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let humana = true
if(idade >= 18 & humana == true) {
    console.log("Você não é um robô então pode dirigir")
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let mes = "dezembro"
if(mes == "janeiro" || mes == "dezembro") {
    console.log("Você faz aniversário nas férias")
}

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let nome = "Natalia"
let primeiraLetra = nome.substring(0,1)
if(primeiraLetra == "R") {
    console.log("Seu nome não é Natalia")
}else{
    console.log("Seu nome inicia com a letra N então Você é a Natalia")
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let quantidadeLetras = nome.length
if(quantidadeLetras > 6 || primeiraLetra == "E") {
    console.log("Seu nome tem mais de 6 letras ou inicia com a letra E")
}