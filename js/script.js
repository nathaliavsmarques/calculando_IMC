let altura = document.querySelector('#altura');
let peso = document.querySelector('#peso');
let res = document.querySelector('#resp');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    let alturaReal = parseFloat(altura.value);
    let pesoReal = parseFloat(peso.value);
    let calcularImc = (pesoReal / (alturaReal * alturaReal)).toFixed(1);
    let classificacao = ' '; 

    if (altura.value == 0 || peso.value == 0) {
       alert('Por favor preencha todos os campos abaixo.');                 
    } else if (calcularImc < 18.5) {
        classificacao = `Você está com o peso abaixo do indicado.`      
    } else if (calcularImc >= 18.6 && calcularImc <= 24.9) {
        classificacao = `O seu peso está dentro do indicado.`
    } else if (calcularImc >= 25 && calcularImc <= 29.9) {
        classificacao = `Você está com sobrepeso.`
    } else if (calcularImc >= 30 && calcularImc <= 34.9) {
        classificacao = `Você está com obesidade grau I. `
    } else if (calcularImc >= 35 && calcularImc <= 39.9) {
        classificacao = `Você está com obesidade grau II.`
    } else {
        classificacao = `Você está com obesidade grau III.`
    }  
    
    res.innerHTML = ` Seu IMC é ${calcularImc}. ${classificacao}`  
    
    
    altura.value = ' ';
    peso.value = ' ';
    altura.focus();
    

   
});



/*  Primeira forma que foram feitas as condicionais;

    if (altura.value == 0 || peso.value == 0) {
        res.innerHTML = 'Por favor preencha os campos acima.'.toUpperCase();                 
    } else if (calcularImc < 18.5) {
        res.innerHTML = `Seu IMC é ${calcularImc}. Você está com o peso abaixo do indicado.`      
    } else if (calcularImc >= 18.6 && calcularImc < 24.9) {
        res.innerHTML = `Seu IMC é ${calcularImc}.  O seu peso está dentro do indicado.`
    } else if (calcularImc >= 25 && calcularImc < 29.9) {
        res.innerHTML = `Seu IMC é ${calcularImc}.  Você está com sobrepeso.`
    } else if (calcularImc >= 30 && calcularImc < 34.9) {
        res.innerHTML = `Seu IMC é ${calcularImc}.  Você está com obesidade grau I. `
    } else if (calcularImc >= 35 && calcularImc < 39.9) {
        res.innerHTML = `Seu IMC é ${calcularImc}.  Você está com obesidade grau II. `
    } else {
        res.innerHTML = `Seu IMC é ${calcularImc}.  Você está com obesidade grau III. `
    }  

    */ 