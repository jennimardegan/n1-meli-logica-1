/*
não restrinja a entrada de dados a apenas 5 atletas. 
Agora após a inclusão de cada atleta o programa deve perguntar ao usuário se deseja incluir outro. 
A resposta é dada com (S/N). O programa continua mostrando o nome do mais alto, e a altura média.

*/

let cont, nome, nome2, altura, altura2, soma, media, novo, repete;
altura2 = 0;
nome2 = "";
cont = 0;
soma = 0;
media = 0;
repete = TRUE;

while(repete){
    nome = prompt('Digite o nome do atleta');
    altura = parseFloat(prompt("Digite a altura do atleta"));
    
    if(altura > altura2){
        nome2 = nome;
        altura2 = altura;
    }

    novo = prompt("Deseja incluir outro atleta? (S/N)");
    if (novo == "S") {
        repete = TRUE;
    } 
    else {
        repete = FALSE;
    } 

    soma = soma + altura;
    media = soma/(cont);

}

alert(`${nome2} possui a maior altura ${altura2}`);
alert(`A média das alturas é ${media}`);