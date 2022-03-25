let arr_cars = [
    {
        name: 'malibu',
        price: 30000
    },
    {
        name: 'matiz',
        price: 3000
    },
    {
        name: 'spark',
        price: 7500
    },
    {
        name: 'gentra',
        price: 140000
    },
    {
        name: 'santaferro',
        price: 80000
    },
    {
        name: 'tahoe',
        price: 80000
    },
    {
        name: 'tesla model y',
        price: 30000
    }
]


//1 Спрашивается название
// 2 Если отвечу то след вопрос (прайс)
// 3 Год машины 
// 4 Если год машины меньше 2010
// то цена падает на 20%
// и добавляется в массив
// 5 Перед добавлением он должен показать всю информацию которую мы ввели 
// и спросить добавить или нет

let a =  prompt('Назови машину')
let b = +prompt('цена')
let c = +prompt('год машины')



if(c < 2010){
    b = b*0.8
} 

let newCar = {
    name: a,
    price: b,
}

let d = confirm(`
name: ${a}
price: ${b}
year: ${c}
Ты хочешь добавить  ${a}?
`) 

if(d === true){
arr_cars.push(newCar)
alert('добавлено!')
}


console.log(arr_cars);