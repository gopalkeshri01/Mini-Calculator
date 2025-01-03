const num1 = document.getElementById('input1');
const num2 = document.getElementById('input2');
const output = document.getElementById('result');

document.getElementById('add').addEventListener('click' , function() {
    output.value = parseInt(num1.value) + parseInt(num2.value);
});

document.getElementById('sub').addEventListener('click' , function() {
    output.value = parseInt(num1.value) - parseInt(num2.value);
});

document.getElementById('mul').addEventListener('click' , function() {
    output.value = parseInt(num1.value) * parseInt(num2.value);
});

document.getElementById('div').addEventListener('click' , function() {
    output.value = parseInt(num1.value) / parseInt(num2.value);
});