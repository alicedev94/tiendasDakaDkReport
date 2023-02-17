// Write your JavaScript code.

const name = document.querySelector('#form-name');
const nickName = document.querySelector('#form-nickName');
const btnform = document.querySelector('.btn-form');
const formValue = document.querySelector('.form-value');

btnform.addEventListener('click', getString);

function getString()
{ 
    const getNameAndNickName = name.value;
    formValue.innerHTML = 'Valor: ' + getNameAndNickName;
}}