let currentValue = '0';
let previousValue = '';
let operation = null;

const previousDisplay = document.getElementById('previous');
const currentDisplay = document.getElementById('current');

function updateDisplay() {
    previousDisplay.textContent = previousValue && operation ? `${previousValue} ${operation}` : '';
    currentDisplay.textContent = currentValue;
}

function clearAll() {
    currentValue = '0';
    previousValue = '';
    operation = null;
    updateDisplay();
}

function appendNumber(number) {
    if (number === '.' && currentValue.includes('.')) {
        return;
    }

    if (currentValue === '0' && number !== '.') {
        currentValue = number;
    } else {
        currentValue += number;
    }

    updateDisplay();
}

function appendOperator(nextOperator) {
    if (operation && previousValue !== '') {
        calculate();
    }

    previousValue = currentValue;
    operation = nextOperator;
    currentValue = '0';
    updateDisplay();
}

function toggleSign() {
    currentValue = currentValue === '0' ? '0' : String(Number(currentValue) * -1);
    updateDisplay();
}

function percentage() {
    currentValue = String(Number(currentValue) / 100);
    updateDisplay();
}

function calculate() {
    if (!operation || previousValue === '') {
        return;
    }

    const prev = Number(previousValue);
    const current = Number(currentValue);
    let result = 0;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '−':
            result = prev - current;
            break;
        case '×':
            result = prev * current;
            break;
        case '÷':
            result = current === 0 ? 0 : prev / current;
            break;
        default:
            return;
    }

    currentValue = String(result);
    previousValue = '';
    operation = null;
    updateDisplay();
}

updateDisplay();
