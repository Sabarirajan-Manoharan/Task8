let currentInput = '';
    let operator = '';
    let previousInput = '';

    function inputNumber(num) {
        currentInput += num;
        document.getElementById('display').value = currentInput;
    }

    function inputOperator(op) {
        if (currentInput === '') return;
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }

    function calculate() {
        if (currentInput === '' || previousInput === '' || operator === '') return;
        let result = 0;
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        
        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
        
        document.getElementById('display').value = result;
        currentInput = result;
        previousInput = '';
        operator = '';
    }

    function clearDisplay() {
        currentInput = '';
        operator = '';
        previousInput = '';
        document.getElementById('display').value = '';
    }

    function backspace() {
        currentInput = currentInput.slice(0, -1);
        document.getElementById('display').value = currentInput;
    }