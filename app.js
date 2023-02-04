/*var email = prompt('Введите вашу почту')
var password = prompt('Введите ваш пароль')

var userEmail = 'umar.abdilaipov@gmail.com'
var userPassword = '20112007'

if (email === userEmail && password === userPassword){
    console.log('Вы вошли в свой аккаунт')
}else{
    console.log('Вы ввели неверную почту или пароль')
}*/

/*var userINN = '10810465758533'
var innFirstNum = Number(userINN[0]) //1
if ((innFirstNum === 0 || innFirstNum === 1 || innFirstNum === 2) && userINN.length === 14){
    console.log('ИНН найден')
}else {
    console.log('ИНН не существует')
}*/

//switch..case
/*var size = 0
var euSize = 'S'
if (euSize === 'S'){
    console.log('В цифрах -> ', size = 36)
}else if (euSize === 'M'){
    console.log('В цифрах -> ', size = 40)
}else if (euSize === 'L'){
    console.log('В цифрах -> ', size = 44)
}else {
    console.log('Такого размера нет')
}*/

/*switch (euSize){
    case "S":
        console.log('36')
        break;
    case "M":
        console.log('40')
        break;
    case "L":
        console.log('44')
        break;
    default:
        console.log('Unknown size')
}*/

//null - нулевой
/*var userAddress = null
console.log(typeof userAddress)*/

//undefined - неопределенный
/*let apple;
console.log(typeof apple)*/

//NaN - не число
/*var a = 123
var b = 'qwerty'
console.log(a/b)*/
/*var num = NaN
console.log(typeof num)*/

//Object - комплексный
var user = {
    name: 'Umar',
    surname: 'Abdilaipov',
    phoneNumber: 996772423432,
    secondNumber: null,
    address: {
        city: 'Bishkek',
        street: undefined
    },
    isMarried: false
}
console.log(user.isMarried)
console.log(user.address.city)
//добавление
user.laptop = 'Windows'
console.log(user)
//удалить
delete user.laptop
console.log(user)

//методы
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(user.hasOwnProperty('name'))