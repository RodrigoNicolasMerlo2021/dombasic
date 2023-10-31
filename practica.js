const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const button = document.querySelector('#button');
const result = document.querySelector('p')
button.addEventListener('click', resultado)

function resultado(){
    let valor  = Number(input1.value) + Number(input2.value);
    result.innerText = "El resultado es: " + valor;
}