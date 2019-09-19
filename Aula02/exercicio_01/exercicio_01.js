/*
Escreva um programa que sorteia um número de 1 a 10 e dá duas chances para que o usuário acerte
*/

/*
INICIO
num1 = numero_recebido_do_usuario
sorte = numero_randomico

se num == sorte
    retorna "Parabéns, vc acertou!"
se não
    num2 = numero_recebido_do_usuario
    se num2 == sorte
        retorna "Parabéns, vc acertou!"
    se não
        retorna "Não foi dessa vez"
FIM
*/

const num1 = parseInt(prompt("Adivinhe um número de 1 a 10"));
const sorte = Math.floor(Math.random() * 10 + 1);

if (num1 == sorte) {
    alert(`Parabéns, vc acertou o número ${sorte}!`) // return neste caso não é obrigatório
}
else {
    const num2 = parseInt(prompt("Adivinhe um número de 1 a 10"));
    if (num2 == sorte) {
        alert(`Parabéns, vc acertou o número ${sorte}!`)
    }
    else {
        alert(`Não foi dessa vez.`)
    }


}


