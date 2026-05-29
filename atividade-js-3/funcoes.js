function exibirNoConsole(){
    console.log("Meu primeiro código em JavaScript");
}

function alertBemVindo(){
    alert('Seja bem-vindo ao Javascript!');
}

function soma5e7(){
    // Realiza conta e mostra em uma alerta.
    alert(`5 + 7 = ${5+7}`);
}

function alertEConsole(){
    alert('Olá, sou uma mensagem do alert()');
    console.log('Olá, sou uma mensagem do console.log()')
}

function exibirDiaOtimoParaJS(){
    console.log('Hoje é um ótimo dia para aprender JavaScript!');
}

function calculoSimples(){
    let n1 = 6;
    let n2 = 2;
    let soma = 6 + 2;

    alert(`A variavel n1 que vale ${n1} somada com a variavel n2 que vale ${n2} é igual a ${soma}`);
}

function exibiNomeEIdade(){
    // Exibi mensagem no console
    console.log('Meu nome é Igor e tenho 20 anos')
}

function exibiLocalizacao(){
    let cidade = 'Sabará';
    let estado = 'Minas Gerais';
    let pais = 'Brasil';

    console.log(`Moro em ${cidade} - ${estado}, ${pais}`);
}

function aumentaIdade(){
    let idade = 20;

    alert(`O valor de idade é ${idade}, somando mais um fica ${idade+1}`);
}

function trocaVariaveis(){
    let a = 5;
    let b = 10;

    alert(`A = ${a} e B = ${b}`);

    a = 10;
    b = 5;

    alert(`Agora, A = ${a} e B = ${b}`)
}

function incrementador(){
    for(let contador = 0; contador <= 3; contador++){
        alert(`O valor do contador é ${contador}`);
    }
}

function somaExibi(){
    let num1 = Number(prompt(`Digite o 1º número:`));
    let num2 = Number(prompt(`Digite o 2º número:`));

    alert(`A soma de ${num1} e ${num2} é de ${num1+num2}`);
}

function redeclaraVariavel(){
    let a = 10;

    alert(`A = ${a}`);

    a = 5;
    alert(`Agora, A = ${a}`);
}

function calculaAreaCirculo(){
    const PI = 3.14159;

    let raio = 7;
    let area = PI * (raio * raio);

    alert(`A área do círculo de raio 7 é de ${area}`);
}

function constanteNome(){
    const NOME = 'Igor';

    console.log(`Bem-vindo, ${NOME}!`);
}

function alteraConstante(){
    const constante = 1;
    console.log(`Constante = ${constante}`);
    
    constante = 2;
    console.log(`Constante = ${constante}`);
}

function calculaNumeros(){
    let num1 = Number(prompt(`Digite o 1º número:`));
    let num2 = Number(prompt(`Digite o 2º número:`));

    console.log(`A soma resulta em ${num1+num2}`);
    console.log(`A subitração resulta em ${num1-num2}`);
    console.log(`A multiplicação resulta em ${num1*num2}`);
    console.log(`A divisão resulta em ${num1/num2}`);
}

function restoDe10Por3(){
    alert(`O resto da divisão de 10 para 3 é igual a ${10%3}`);
}

function testeOrdemPrecedencia(){
    console.log(2+3*4);
}

function operadoresAtribuicao(){
    let valor = 10;

    console.log(`Valor = 10`);
    console.log(`Valor += 2 = ${valor+=2}`);
    console.log(`Valor -= 2 = ${valor-=2}`);
    console.log(`Valor *= 2 = ${valor*=2}`);
    console.log(`Valor /= 2 = ${valor/=2}`);
}

function calculaMedia(){
    let num1 = Number(prompt(`Digite o 1º número:`));
    let num2 = Number(prompt(`Digite o 2º número:`));
    let num3 = Number(prompt(`Digite o 3º número:`));
    
    let media = (num1+num2+num3)/3;
    
    alert(`A média dos números ${num1}, ${num2}, ${num3} é de ${media.toFixed(1)}`)
}

function dobroTiploMetade(){
    let num = Number(prompt(`Digite um número:`));

    console.log(`O dobro de ${num} é ${num*2}`);
    console.log(`O triplo de ${num} é ${num*3}`);
    console.log(`A metade de ${num} é ${num/2}`);
}

function mostraTipo(){
    let texto = 'texto';
    let numero = 3;
    let bool = true;
    let lista = ['amarelo', 'azul', 'vermelho'];
    let obj = {
        cor: 'amarelo',
        tamanho: 'pequeno',
        quantidade: 4
    }

    console.log(typeof(texto));
    console.log(typeof(numero));
    console.log(typeof(bool));
    console.log(typeof(lista));
    console.log(typeof(obj));
}

function objetoPessoa(){
    let pessoa = {
        nome: 'Igor',
        idade: 20
    }

    console.log(pessoa);
}

function listaNumeros(){
    let lista = [1,2,3,4,5];

    alert(`Lista: ${lista}; Terceiro elemento: ${lista[2]}`);
}