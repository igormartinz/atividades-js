function soma(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let resultado = document.getElementById('resultado');
    let valor = n1 + n2;
    
    return resultado.innerHTML = "Resultado: " + valor;
}

function subtrai(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let resultado = document.getElementById('resultado');
    let valor = n1 - n2;

    return resultado.innerHTML = "Resultado: " + valor;
}

function multiplica(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let resultado = document.getElementById('resultado');
    let valor = n1 * n2;

    return resultado.innerHTML = "Resultado: " + valor;
}

function dividi(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let resultado = document.getElementById('resultado');
    let valor = n1 / n2;

    return resultado.innerHTML = "Resultado: " + valor;
}

function restoDivisao(){
    let n1 = parseInt(document.getElementById('n1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let resultado = document.getElementById('resultado');
    let valor = n1 % n2;

    return resultado.innerHTML = "Resultado: " + valor;
}

function comparar(){
    let n1 = parseInt(document.getElementById('numero1').value);
    let n2 = parseInt(document.getElementById('numero2').value);

    console.log(n1 == n2);
}

function maior10menor50(){
    let n1 = parseInt(document.getElementById('numeroComparado1').value);
    let resultado = document.getElementById('resultadoComparacao1');
    
    if(n1 > 10 && n1 < 50){
        return resultado.innerHTML = "O número " + n1 + " é maior que 10 e menor que 50";
    } else{
        return resultado.innerHTML = "O número " + n1 + " não é maior que 10 e menor que 50";
    }
}

function menor5menor20(){
    let n1 = parseInt(document.getElementById('numeroComparado2').value);
    let resultado = document.getElementById('resultadoComparacao2');
    
    if(n1 < 5 || n1 > 20){
        return resultado.innerHTML = "O número " + n1 + " é menor que 5 ou maior que 20";
    } else{
        return resultado.innerHTML = "O número " + n1 + " não é menor que 5 ou maior que 20";
    }
}
