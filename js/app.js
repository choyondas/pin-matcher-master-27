//using onclick in html
/* function generatePin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        console.log(pin);
        document.getElementById('inputField').value = pin;
    } else {
        generatePin();
    }
} */

// random number generate by using id
document.getElementById('generatePin').addEventListener('click', function generate() {
    const pin = Math.round(Math.random() * 10000);
    const PinString = pin + '';
    if (PinString.length == 4) {

        document.getElementById('inputField').value = pin;
    } else {

        generate();
    }
})




document.getElementById('keyPad').addEventListener('click', function(event) {
    const inputNumber = event.target.innerText;
    const calc = document.getElementById('inputBox');
    if (isNaN(inputNumber)) {
        if (inputNumber == 'C') {
            calc.value = '';
        }

    } else {

        const previousCalc = calc.value;
        const newValue = previousCalc + inputNumber;

        calc.value = newValue;
    }

});

function submit() {
    const generatePin = document.getElementById('inputField').value;
    const calcNumber = document.getElementById('inputBox').value;
    if (generatePin == calcNumber) {
        document.getElementById('notify-match').style.display = "block";
        document.getElementById('notify-not-match').style.display = "none";
    } else {
        document.getElementById('notify-match').style.display = "none";
        document.getElementById('notify-not-match').style.display = "block";
    }
}