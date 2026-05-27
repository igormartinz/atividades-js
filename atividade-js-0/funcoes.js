function verificaSenha() {
    let senha = prompt('Digite a senha: ');

    if (senha == "1234") {
        alert('Acesso Permitido');
    } else {
        alert('Acesso Negado')
    }
}

function calculoIMC() {
    let peso = parseFloat(prompt('Digite seu peso: (Exemplo: 74.4)'));
    let altura = parseFloat(prompt('Digite sua altura: (Exemplo: 1.72)'));
    let imc = peso / (altura * altura);

    if (imc < 19) {
        alert(`Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso!`);
    } else if (imc < 26) {
        alert(`Seu IMC é ${imc.toFixed(2)} e você está com peso ideal!`);
    } else if (imc < 30) {
        alert(`Seu IMC é ${imc.toFixed(2)} e você está com sobrepeso!`);
    } else if (imc >= 30) {
        alert(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade!`);
    }
}

function contador1a10() {
    let contador = 1;

    while (contador <= 10) {
        console.log(contador);
        contador++;
    }
}

function tabuada() {
    let valor = prompt('Digite um número para a tabuada:');

    for (let i = 1; i <= 10; i++) {
        console.log(`${valor} x ${i} = ${valor * i}`)
    }
}

function contagemRegressiva() {
    for (let i = 10; i >= 0; i--) {
        console.log(i)
    }
}

function jogoDaAdivinhacao() {
    let valor = prompt('Digite um número');

    do {
        if (valor > 7) {
            alert('O número secreto é menor');
            valor = prompt('Digite um número');
        } else {
            alert('O número secreto é maior');
            valor = prompt('Digite um número');
        }
    } while (valor != 7)

    alert('Você acertou o número secreto!');
}

function fatorial() {
    let valor = prompt('Digite um número e veja seu fatorial:');
    let resultado = `${valor}! = `

    while (valor != 0) {
        resultado += `${valor}`;

        if (valor != 1) {
            resultado += ` x `;
        }

        valor--;
    }

    alert(resultado);
}

function contarVogais() {
    let palavra = prompt('Digite uma palavra:');
    let vogais = 'aeiouAEIOU';
    let contaVogais = 0;

    for (let letra of palavra) {
        if (vogais.includes(letra)) {
            contaVogais++;
        }
    }

    alert(`A palavra ${palavra} tem ${contaVogais} vogais.`)
}

function palavraReverso() {
    let palavra = prompt('Digite uma palavra:');
    let palavraInvertida = "";
    let i = palavra.length - 1;

    for (i; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }

    alert(`A palavra ${palavra} ao inverso é ${palavraInvertida}.`)
}

function numeroPrimo() {
    let valor = Number(prompt('Digite um número:'));
    let ePrimo = true;

    if (valor <= 1) {
        ePrimo = false;
    }

    for (let i = 2; i < valor; i++) {
        if (valor % i == 0) {
            ePrimo = false;
        }
    }

    if (ePrimo === false) {
        alert(`O número ${valor} não é primo.`);
    } else {
        alert(`O número ${valor} é primo.`);
    }
}

function palindromo() {
    let palavra = prompt('Digite uma palavra:');
    let palavraInvertida = "";
    let i = palavra.length - 1;

    for (i; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }

    if (palavra.toLowerCase() == palavraInvertida.toLowerCase()) {
        alert(`A palavra ${palavra} é um palíndromo.`)
    } else {
        alert(`A palavra ${palavra} não é um palíndromo.`)
    }
}

function calculadoraSimples() {
    let num1 = Number(prompt('Digite um número:'));
    let num2 = Number(prompt('Digite outro número:'));
    let operador = prompt('Digite qual operção deseja fazer (+, -, *, /):');

    switch (operador) {
        case '+':
            alert(`${num1} + ${num2} = ${num1 + num2}`);
            break;
        case '-':
            alert(`${num1} - ${num2} = ${num1 - num2}`);
            break;
        case '*':
            alert(`${num1} * ${num2} = ${num1 * num2}`);
            break;
        case '/':
            alert(`${num1} / ${num2} = ${num1 / num2}`);
            break;
        default:
            alert('Valor invalido');
    }
}

function contarAteN() {
    let num = Number(prompt('Digite até qual número é para contar:'));

    for (let i = 0; i <= num; i++) {
        console.log(i);
    }
}

function somarParesAte100() {
    let resultado = `A soma de `;
    let soma = 0;

    for (let i = 0; i <= 100; i += 2) {
        resultado += i;
        soma += i

        if (i != 100) {
            resultado += ` + `
        } else {
            resultado += ` = `
        }
    }

    alert(`${resultado}${soma}`);
}

function calculaNota() {
    let nota = Number(prompt('Digite sua nota:'));

    if (nota < 5) {
        alert('Sua nota foi D.')
    } else if (nota >= 5 && nota < 7) {
        alert('Sua nota foi C.')
    } else if (nota >= 7 && nota < 9) {
        alert('Sua nota foi B.')
    } else if (nota >= 9) {
        alert('Sua nota foi A.')
    }
}

function contaDigitos() {
    let num = prompt('Digite um número:');

    alert(`O número ${num} tem ${num.length} dígitos.`)
}

function postivoNegativo() {
    let num = prompt('Digite um número:');

    if (num == 0) {
        alert(`O número é igual a zero.`);
    } else if (num < 0) {
        alert(`O número ${num} é negativo.`);
    } else {
        alert(`O número ${num} é positivo.`);
    }
}

function conversorTemperatura() {
    let num = prompt('Digite a temperatura em Cº:');
    let fah = (9 / 5) * num + 32;

    alert(`A temperatura de ${num} Cº é igual a ${fah} Fº`)
}

function repeteNome(){
    let nome = prompt('Digite um nome:');
    let num = prompt('Digite quantas vezes deseja que ele se repita:');

    for(let i = 1; i <= num; i++){
        console.log(`${i}. ${nome}`);
    }
}

function anoBissexto(){
    let ano = Number(prompt('Digite um ano:'));

    if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
        alert(`O ano ${ano} é bissexto.`)
    }else{
        alert(`O ano ${ano} não é bissexto.`)
    }
}