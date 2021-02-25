function calculator(number1, number2, operator) {
    let blnValidation = true;
    let strMessage;

    if(isNaN(number1)) {
        blnValidation = false;
        if(strMessage) {
            strMessage += ' , '
        }
        strMessage += 'first argument must be a number'
    }

    if(isNaN(number2)) {
        if(strMessage) {
            strMessage = ' , '
        }
        strMessage += 'second argument must be a number'
    }

    switch (operator) {
        case '%':
        case '/':
        case '*':
        case '+':
        case '-':
        break;
        default:
            blnValidation = false;
            if(strMessage) {
                strMessage += ' , '
            }
            strMessage += "Third must have a valid operator";
        break;
    }
    if (blnValidation) {
        switch (operator) {
            case '%':
                sum = number1 % number2;
            break;
            case '/':
                sum = number1 / number2;
            break;
            case '*':
                sum = number1 * number2;
            break;
            case '+':
                sum = number1 + number2;
            break;
            case '-':
                sum = number1 - number2;
            break;
        }
        strMessage = number1 + ' ' + operator + ' ' + number2 + ' = ' + sum;
    } 
    return strMessage;
}

console.log(calculator(100, 10, 'ash'));
console.log(calculator(100, 10, '%'));
console.log(calculator(100, 10, '/'));
console.log(calculator(100, 10, '*'));
console.log(calculator(100, 10, '+'));
console.log(calculator(100, 10, '-'));