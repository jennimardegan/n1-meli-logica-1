/*
Informe também a altura média destes 5 atletas.

*/

let cont, nome, nome2, altura, altura2, soma, media;
altura2 = 0;
nome2 = "";
cont = 0;
soma = 0;
media = 0;

while(cont < 5){
    nome = prompt('Digite o nome do atleta')
    altura = parseFloat(prompt("Digite a altura do atleta"))    

    if(altura > altura2){
        nome2 = nome;
        altura2 = altura;
    }
    
    cont++;
    soma = soma + altura;
    media = soma/(cont);
}

alert(`${nome2} possui a maior altura ${altura2}`);
alert(`A média das alturas é ${media}`);