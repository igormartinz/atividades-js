function menuOpcoes() {
    let hora = new Date().getHours();
    let valor;

    do {
        valor = Number(prompt('Escolha uma opção: 1 - Ver hora atual / 2 - Dizer Olá / 3 - Sair'));

        switch (valor) {
            case 1:
                alert(`Agora são ${hora} horas`);
                break;
            case 2:
                alert(`Olá!`);
                break;
            case 3:
                break;
            default:
                alert('Opção inválida!')
        }

    } while (valor != 3)
}

function somaAte0() {
    let valor;
    let soma = 0;

    do {
        valor = Number(prompt('Digite um valor para somar ou digite 0 para finalizar: '));

        soma += valor;

    } while (valor != 0)

    alert('A soma dos valores digitados é de ' + soma);
}

function verificaSenha() {
    let senha;
    let contador = 2;

    do {
        senha = prompt('Digite a senha: ');

        if (senha == "1234") {
            alert('Acesso Permitido');
        } else {
            if (contador == 0) {
                alert('Conta Bloqueada!')
            } else {
                alert('Senha Incorreta, Tentativas restantes: ' + contador)
            }
        }

        contador--;

    } while (senha != "1234" && contador >= 0);
}

function contaPalavras() {
    let frase = prompt('Digite uma frase: ');

    // split() separa as palavras no ' ' e vira array
    let palavras = frase.split(' ');

    alert(`A frase '${frase}' tem ${palavras.length} palavras.`)
}

function calculaMediaNotas() {
    let valor;
    let soma = 0;
    let contador = 0;
    do {
        valor = Number(prompt('Digite uma nota, para ver a média digite -1:'));

        if (valor != -1) {
            soma += valor;
            contador++;
        }

    } while (valor != -1)

    let media = soma / contador;

    alert(`A média das notas é de ${media}`);
}

function cadastraNomes() {
    let listaNome = [];
    let resposta = true;
    let continuar;

    do {
        // push() adiciona um valor no final do array.
        listaNome.push(prompt('Digite um nome:'));

        continuar = prompt('Deseja continuar? [s] [n]')

        if (continuar == 'n') {
            resposta = false;
        }
    } while (resposta == true)

    alert(listaNome);
}

function buscaNome() {
    let listaNome = [];
    let resposta = true;
    let continuar;

    do {
        // push() adiciona um valor no final do array.
        listaNome.push(prompt('Digite uma palavra:'));

        continuar = prompt('Deseja continuar? [s] [n]')

        if (continuar == 'n') {
            resposta = false;
        }
    } while (resposta == true)

    let nome = prompt('Qual nome você deseja buscar:');

    if (listaNome.includes(nome)) {
        alert(`A palavra ${nome} existe na lista '${listaNome}'.`)
    } else {
        alert(`A palavra ${nome} não existe na lista '${listaNome}'.`)
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

function tabuada() {
    let valor = prompt('Digite um número para a tabuada:');

    for (let i = 1; i <= 10; i++) {
        console.log(`${valor} x ${i} = ${valor * i}`)
    }
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

function geraSenha() {
    let caracteres = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let senha = '';

    for (let i = 1; i <= 8; i++) {

        // Math.random() gera um número aleatório.
        // Math.floor() arredonda para baixo.

        let numeroAleatorio = Math.floor(Math.random() * 36);

        senha += caracteres[numeroAleatorio];
    }

    alert(`Senha aleatória: ${senha}`);
}

function numerosEmOrdem() {
    let valor = prompt('Digite uma sequencia de números separados por vírgula:');

    // .map(Number) percorre cada valor convertendo para Number.
    let listaNumeros = valor.split(',').map(Number);

    // .sort() Utilizado para colocar em ordem.
    alert(`Lista na ordem crescente: ${listaNumeros.sort((a, b) => a - b)}`)
}

function contaCaracteres() {
    let frase = prompt('Digite uma frase: ');

    // split() separa as palavras no ' ' e vira array
    let palavras = frase.split(' ');

    for (let i = 0; i < palavras.length; i++) {
        console.log(`${palavras[i]}: ${palavras[i].length} letras.`)
    }
}

function criaUsuario() {
    let nome = prompt('Digite seu nome:');
    let idade = prompt('Digite sua idade:');
    let profissao = prompt('Digite seu profissao:');

    let usuario = {
        nome: nome,
        idade: idade,
        profissao: profissao
    };

    console.log(usuario);
}

function arrayDeObjetos() {
    let listaProdutos = [
        {
            nome: 'cafe',
            preco: 20.70,
        },
        {
            nome: 'arroz',
            preco: 26.10,
        },
        {
            nome: 'oleo',
            preco: 8.20,
        },
        {
            nome: 'macarrao',
            preco: 10.90,
        }
    ];

    let soma = 0;
    for(let i = 0; i < listaProdutos.length; i++){
        soma += listaProdutos[i].preco;
    }

    console.log(listaProdutos)
    console.log(`A soma do preço dos produtos é: ${soma}`)
}

function validaCPF(){
    let cpf = prompt('Digite seu CPF:');

    // RegEx, expressão regular
    // As barras indicam um expressão regular
    // ^ indica o inicio da string
    // $ indica o final da string
    // [0-9] indica qualquer número de 0 até 9
    // + permite que seja um caracter ou mais
    // .test() realiza o teste

    if(/^[0-9]+$/.test(cpf)){
        if(cpf.length != 11){
            alert('O CPF deve conter 11 digitos')
        }else{
            alert(`Tudo certo com o CPF ${cpf}`)
        }
    }else{
        alert('Utilize apenas números!');
    }
}

function caixaEletronico(){
    let valor = Number(prompt('Digite o valor para sacar:'));
    console.log(`Valor para sacar: ${valor}`);

    //Math.floor é utilizado para arredondar o valor para baixo 

    let nt100 = Math.floor(valor / 100);
    valor %= 100;
    let nt50 = Math.floor(valor / 50);
    valor %= 50;
    let nt20 = Math.floor(valor / 20);
    valor %= 20;
    let nt10 = Math.floor(valor / 10);
    valor %= 10;
    let nt5 = Math.floor(valor / 5);
    valor %= 5;
  
    console.log(`Notas de 100:${nt100}`);
    console.log(`Notas de 50: ${nt50}`);
    console.log(`Notas de 20: ${nt20}`);
    console.log(`Notas de 10: ${nt10}`);
    console.log(`Notas de 5: ${nt5}`);
}

function jogoDaAdivinhacao() {
    let valor = 0;
    let numeroAleatorio = Math.floor(Math.random() * 20);

    valor = prompt('Digite um número');

    do {
        if (valor > numeroAleatorio) {
            alert('O número secreto é menor');
        } else {
            alert('O número secreto é maior');
        }

        valor = prompt('Digite um número');
    } while (valor != numeroAleatorio)

    alert('Você acertou o número secreto!');
}