let credits = 23580;
let pricePerDroid = 3000;
let totalPrice

let input = prompt('Сколько дроидов Вы хотите купить?');
if (input === null) {
console.log('Отменено пользователем')
} else {
totalPrice = pricePerDroid * Number(input)
if (totalPrice > credits) {
    console.log('Недостаточно средств на чсету!')
} else {
    console.log('Вы купили ${input} дроидов, на счету осталось ${credits - totalPrice} кредитов')
}
} 