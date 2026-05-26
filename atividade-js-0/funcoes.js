function verificaSenha() {
    let senha = prompt('Digite a senha: ');

    if (senha == "1234") {
        alert('Acesso Permitido');
    } else {
        alert('Acesso Negado')
    }
}

function calculoIMC(){
    let peso = parseFloat(prompt('Digite seu peso: (Exemplo: 74.4)'));
    let altura = parseFloat(prompt('Digite sua altura: (Exemplo: 1.72)'));
    let imc = peso / (altura * altura);

    if(imc < 19){
        alert(`Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso!`);
    } else if(imc < 26) {
        alert(`Seu IMC é ${imc.toFixed(2)} e você está com peso ideal!`);
    } else if(imc < 30){
        alert(`Seu IMC é ${imc.toFixed(2)} e você está com sobrepeso!`);
    }else if(imc >= 30){
        alert(`Seu IMC é ${imc.toFixed(2)} e você está com obesidade!`);
    }
}