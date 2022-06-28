let order = []

const counter = (num, card) => {  // счетчик
    const table = card.querySelector(".tableCounter");

    if(num == -1){
        table.innerHTML = Number(table.innerHTML) - 1;

        if(table.innerHTML == 0){
            const counter = card.querySelector(".counter")
            const button = card.querySelector(".buttonChoose")
            const tableCounter = card.querySelector(".tableCounter")

            counter.classList.add("active")
            tableCounter.classList.add("active")
            button.classList.remove("active")
        }

    } else if(num == 1){
        table.innerHTML = Number(table.innerHTML) + 1;
    } 
}

const checkCounter = (card) => {  // Открывает счетчик
    const counter = card.querySelector(".counter")
    const button = card.querySelector(".buttonChoose")
    const tableCounter = card.querySelector(".tableCounter")

    if(counter.classList.contains("active")){
        counter.classList.remove("active")
        tableCounter.classList.remove("active")
        button.classList.add("active")
    }
}

document.addEventListener("dblclick", (e) => {  // запрещаем двойной клик
    e.preventDefault()
})

document.addEventListener("click", (e) => {  
    const card = e.target.closest(".card")

    if(e.target.closest(".buttonChoose")){
        checkCounter(card)  // открываем счетчик
        counter(+1, card)
    } else if(e.target.closest(".decrement") ){ // -1
        counter(-1, card)
    } else if(e.target.closest(".increment")){ // +1
        counter(+1, card)
    } else if(e.target.closest("img") ){  // увеличение фото
        const img = e.target.closest("img");
        const imgBlock = e.target.closest(".imgBlock");

        imgBlock.classList.toggle("imgBlockActive")
        img.classList.toggle("imgActive")
    } else if(e.target.closest(".buttonInput") ){  // чек
        // console.log("Ваш заказ" + JSON.stringify(order) );

        // localStorage.setItem('order', JSON.stringify(order));
        location.href='./check.html'
    }
})

document.addEventListener("click", (e) => {
    if(e.target.closest(".increment") || e.target.closest(".decrement") || e.target.closest(".buttonChoose")  ){

        if(e.target.closest(".increment") || e.target.closest(".buttonChoose")){

            const card = e.target.closest(".card")
            const name = card.querySelector(".name").innerHTML
            const number = card.querySelector(".tableCounter").innerHTML

            if(order.length == 0){
                order.push({
                    name: name,
                    number: number
                }) 
            }

            for(let i = 0; i < order.length; i++){
                if(order[i].name == name){
                    order[i].number = number
                } 

                if(i == order.length - 1 &&  order[i].name != name){
                    order.push({
                        name: name,
                        number: number
                    })
                }
            }
        } else if(e.target.closest(".decrement")){

            const card = e.target.closest(".card")
            const name = card.querySelector(".name").innerHTML
            const number = card.querySelector(".tableCounter").innerHTML

            for(let i = 0; i < order.length; i++){
                if(order[i].name == name){
                    if(number == 0){
                        order.splice(0, i+1);
                    } else{
                        order[i].number = number
                    }
                } 
            }
        }
    }
})




let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 
tg.expand(); //расширяем на все окно 
tg.MainButton.show() //показываем кнопку
tg.MainButton.text = "Корзина"

Telegram.WebApp.onEvent('mainButtonClicked', function(){
    // tg.MainButton.setText("Вы нажали на кнопку")
    window.location.href = './check.html';
    // tg.sendData("Было отправлено сообщение в телегу и должно вернуться в чат"); 
});
