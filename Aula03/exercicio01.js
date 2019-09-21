/*
Escreva um programa que solicita o nome e a altura de 5 atletas. 
Ao final da entrada de dados, informe A ALTURA do atleta mais alto.

*/

let cont, nome, nome2, altura, altura2;
altura2 = 0;
nome2 = "";
cont = 0;

while(cont < 5){
    nome = prompt('Digite o nome do atleta')
    altura = parseFloat(prompt("Digite a altura do atleta"))

    if(altura > altura2){
        nome2 = nome;
        altura2 = altura;
    }
    
    cont++;
}

alert(`${nome2} possui a maior altura ${altura2}`)