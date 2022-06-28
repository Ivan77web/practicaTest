const products = [
    {
        tableCounter: 0,
        src: "./1.png",
        name: "Саске",
        price: "1500"
    },

    {
        tableCounter: 0,
        src: "./2.png",
        name: "Саске",
        price: "1500"
    },

    {
        tableCounter: 0,
        src: "./3.png",
        name: "Саске",
        price: "1500"
    },

    {
        tableCounter: 0,
        src: "./4.png",
        name: "Саске",
        price: "1500"
    }
]

container = document.querySelector('.containerForProducts');

for(let i = 0; i < products.length; i++){
    let divCard = document.createElement('div');
    divCard.classList.add("card");

    let divCounter = document.createElement('div');
    divCounter.classList.add("tableCounter");
    divCounter.classList.add("active");
    divCounter.innerHTML = products[i].tableCounter;

    let divImg = document.createElement('div');
    divImg.classList.add("imgBlock");
    
    let img = document.createElement('img');
    img.setAttribute("src", products[i].src)

    let intro = document.createElement('h4');
    intro.classList.add("name")
    intro.innerHTML = products[i].name

    let price = document.createElement('div');
    price.classList.add("price")
    price.innerHTML = products[i].price

    let buttonAdd = document.createElement('div');
    buttonAdd.classList.add("buttonChoose")
    buttonAdd.innerHTML = "Добавить"

    let counterBlock = document.createElement('div');
    counterBlock.classList.add("counter")
    counterBlock.classList.add("active")
    
    let buttonDecrement = document.createElement('div');
    buttonDecrement.classList.add("decrement")
    buttonDecrement.innerHTML = "-"

    let buttonIncrement = document.createElement('div');
    buttonIncrement.classList.add("increment")
    buttonDecrement.innerHTML = "+"

    divImg.append(img);

    counterBlock.append(buttonDecrement);
    counterBlock.append(buttonIncrement);

    divCard.append(divCounter)
    divCard.append(divImg)
    divCard.append(intro)
    divCard.append(price)
    divCard.append(buttonAdd)
    divCard.append(counterBlock);

    container.append(divCard);
}

alert("Hello")