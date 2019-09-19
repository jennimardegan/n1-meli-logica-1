/*
Escreva um programa que sorteia um número de 1 a 10, dá duas chances para que o usuário acerte, 
mas informa se o número sorteado é maior ou menor que o primeiro palpite.


INICIO
num1 = numero_recebido_do_usuario
sorte = numero_randomico

se num1 == sorte
    retorna "Parabéns, vc acertou!"
se não
    se num1 > sorte
    retorna "sorte é menor. Tente mais uma vez"
    num2 = numero recebido do usuário
        se num2 == sorte
        "Parabéns"
        se não
        "Não foi dessa vez."
    se não
    retorna "sorte é maior. Tente mais uma vez"
    num2 = numero recebido do usuário
        se num2 == sorte
        "Parabéns"
        se não
        "Não foi dessa vez."
FIM
*/

const num1 = parseInt(prompt("Adivinhe um número de 1 a 10"));
const sorte = Math.floor(Math.random() * 10 + 1);

if (num1 == sorte) {
    alert(`Parabéns, vc acertou o número ${sorte}!`)
}
else {
    if (num1 > sorte) {
        alert(`O número deve ser menor!`)
        const num2 = parseInt(prompt("Adivinhe um número de 1 a 10"));
            if (num2 == sorte) {
                alert(`Parabéns, vc acertou o número ${sorte}!`)
                }
            else {
                alert(`Não foi dessa vez.`)
                }
        }
    else {
        alert(`O número deve ser maior!`)
        const num2 = parseInt(prompt("Adivinhe um número de 1 a 10"));
        if (num2 == sorte) {
            alert(`Parabéns, vc acertou o número ${sorte}!`)
            }
        else {
            alert(`Não foi dessa vez.`)
            }
        }
    
    }