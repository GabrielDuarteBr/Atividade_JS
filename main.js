const form = document.getElementById('form');
let numberA = document.getElementById("numberA");
let numberB = document.getElementById("numberB");

let Bmenor = document.getElementById('Bmenor');
let Bmaior = document.getElementById('Bmaior');

function incorreto() {
    Bmenor.style.display = 'block';
    Bmaior.style.display = 'none';
}

function correto() {
    Bmaior.style.display = 'block';
    Bmenor.style.display = 'none';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(numberA.value >= numberB.value) {
        incorreto()
    } else {
        correto()
    }
    });