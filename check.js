const products = [
    {
        tableCounter: 0,
        src: "./1.png",
        name: "Пионерка",
        price: "1500"
    },

    {
        tableCounter: 0,
        src: "./2.png",
        name: "Ева",
        price: "2500"
    },

    {
        tableCounter: 0,
        src: "./3.png",
        name: "Космонавт",
        price: "3500"
    },

    {
        tableCounter: 0,
        src: "./4.png",
        name: "Дом работница",
        price: "4500"
    }
]

const oneOrder = [
    {
        name: "Пионерка",
        number: 3
    },
    {
        name: "Космонавт",
        number: 1
    },
    {
        name: "Ева",
        number: 2
    }
]

// function getData(name){
//     for(let i = 0; i < products.length; i++){
//         if(products[i].name == name){
//             return products[i]
//         }
//     }
// }

function getData(name){
    for(let i = 0; i < products.length; i++){
        if(products[i].name == name){
            return products[i]
        }
    }
}

// const oneOrder = JSON.parse(localStorage.getItem('order'))

// localStorage.clear();

const check = document.querySelector(".check");

for(let i = 0; i < oneOrder.length; i++){
    let card = document.createElement('div');
    card.classList.add("card");

    let img = document.createElement('img');
    img.classList.add("img");
    img.setAttribute("src", getData(oneOrder[i].name).src)

    let divName = document.createElement('div');
    divName.classList.add("name");
    divName.innerHTML = oneOrder[i].name

    let divNumber = document.createElement('div');
    divNumber.classList.add("number");
    divNumber.innerHTML = `${oneOrder[i].number} шт.`

    let divPrice = document.createElement('div');
    divPrice.classList.add("price");
    divPrice.innerHTML = `${oneOrder[i].number * getData(oneOrder[i].name).price} руб.`

    card.append(img);
    card.append(divName)
    card.append(divNumber)
    card.append(divPrice);

    check.append(card)
}

// let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 
// tg.expand(); //расширяем на все окно 
// tg.MainButton.show() //показываем кнопку
// tg.MainButton.text = "Оплатить"

// Telegram.WebApp.onEvent('mainButtonClicked', function(){
//     tg.MainButton.setText("Произошла оплата")
// });





