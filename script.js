const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = button.textContent;
        if (value === 'C') {
            currentInput = '';
            display.value = '';
        } else if (value === '=') {
            try {
                currentInput = eval(currentInput);
                display.value = currentInput;
            } catch {
                display.value = 'Error';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
