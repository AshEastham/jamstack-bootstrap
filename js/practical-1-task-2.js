function drinkOrder(size, drink) {
    let strMessage = 'You have ordered a ' + size;

    switch (drink) {
        case 'cola':
            strMessage += ' Cola';
        break;
        case 'orange':
            strMessage += ' Orangeade';
        break;
        case 'lemon':
            strMessage += ' Lemonade';
        break;
        default:
            strMessage += 'You\'ve ordered a drink we don\'t sell';
        break;
    }

    if(size != 'large' && size != 'medium' && size != 'small') {
        strMessage = 'You have ordered a size we don\'t sell';
    }

    return strMessage;
}

let order1 = drinkOrder('large', 'cola');
let order2 = drinkOrder('medium', 'lemon');
let order3 = drinkOrder('small', 'orange');
let order4 = drinkOrder('smal', 'orange');
let order5 = drinkOrder('small', 'ozrange');

console.log(order1);
console.log(order2);
console.log(order3);
console.log(order4);
console.log(order5);