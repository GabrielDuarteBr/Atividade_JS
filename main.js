const form = document.getElementById('form');
let numberA = document.getElementById("numberA");
let numberB = document.getElementById("numberB");

function Bmenor() {
    const Bmenor = document.getElementById('Bmenor');

    Bmenor.style.display = 'block';
}

function Bmaior() {
    const Bmaior = document.getElementById('Bmaior');

    Bmaior.style.display = 'block';
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
        if(numberA.valueAsNumber >= numberB.valueAsNumber) {
            Bmenor()
        }

            else {
                Bmaior()
            }
});