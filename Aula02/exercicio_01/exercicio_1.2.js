/*
Faça o mesmo programa anterior, agora com 3 palpites

INICIO
num1 = numero_recebido_do_usuario
sorte = numero_randomico

se num1 == sorte
    retorna "Parabéns, vc acertou!"
se não
    se num1 > sorte
    retorna "sorte é menor. Tente mais uma vez"
    num2 = numero recebido do usuário
        se num2 > sorte
        retorna "sorte é menor. Tente mais uma vez"
        num3 = numero recebido pelo usuario
            se num3 == sorte
            "Parabéns"
            se não
            "Não foi dessa vez."
        se não
        retorna "sorte é maior. Tente mais uma vez"
        num3 = numero recebido pelo usuario
        se num3 == sorte
        "Parabéns"
        se não
        "Não foi dessa vez."
    se não
    retorna "sorte é maior. Tente mais uma vez"
    num2 = numero recebido do usuário
        se num2 > sorte
        retorna "sorte é menor. Tente mais uma vez"
        num3 = numero recebido pelo usuario
            se num3 == sorte
            "Parabéns"
            se não
            "Não foi dessa vez."
        se não
        retorna "sorte é maior. Tente mais uma vez"
        num3 = numero recebido pelo usuario
        se num3 == sorte
        "Parabéns"
        se não
        "Não foi dessa vez."
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
        alert(`O número deve ser menor! Tente mais uma vez.`)
        const num2 = parseInt(prompt("Adivinhe um número de 1 a 10"));
            if (num2 > sorte) {
                alert(`O número deve ser menor! Tente mais uma vez.`)
                const num3 = parseInt(prompt("Adivinhe um número de 1 a 10"));
                if (num3 == sorte) {
                    alert(`Parabéns, vc acertou o número ${sorte}!`)
                    }
                else {
                    alert(`Não foi dessa vez.`)
                    }    
                }
            else {
                alert(`O número deve ser menor! Tente mais uma vez.`)
                const num3 = parseInt(prompt("Adivinhe um número de 1 a 10"));
                if (num3 == sorte) {
                    alert(`Parabéns, vc acertou o número ${sorte}!`)
                    }
                else {
                    alert(`Não foi dessa vez.`)
                    } 
                }
        }
    else {
        alert(`O número deve ser menor! Tente mais uma vez.`)
        const num2 = parseInt(prompt("Adivinhe um número de 1 a 10"));
        if (num2 > sorte) {
            alert(`O número deve ser menor! Tente mais uma vez.`)
            const num3 = parseInt(prompt("Adivinhe um número de 1 a 10"));
            if (num3 == sorte) {
                alert(`Parabéns, vc acertou o número ${sorte}!`)
                }
            else {
                alert(`Não foi dessa vez.`)
                }    
            }
        else {
            alert(`O número deve ser menor! Tente mais uma vez.`)
            const num3 = parseInt(prompt("Adivinhe um número de 1 a 10"));
            if (num3 == sorte) {
                alert(`Parabéns, vc acertou o número ${sorte}!`)
                }
            else {
                alert(`Não foi dessa vez.`)
                } 
            }
        }
    
    }