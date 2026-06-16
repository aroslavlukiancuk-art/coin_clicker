
//                        ГРА

const button_coins = document.querySelector('#click-image');
const rebirth_button = document.querySelector('#rebirth-btn');
const kilkist = document.querySelector('.coins')
const kilkist_rebirth_coins = document.querySelector('.kilkist-rebirth-coins')

const limit_coins = 9999999999999999999999;
let coinss = 0;
let rebirth_coins = 0;
let clickPower = 1;

button_coins.addEventListener('click', () => {

    if (coinss < limit_coins) {
        
        coinss += clickPower;
        kilkist.textContent = coinss;
    
    } else if (coinss >= 100) {
    
        console.log("досягнуто ліміта");

    }

});

rebirth_button.addEventListener('click', () => {
    if (coinss >= 100) {
        coinss -= 100; // Скидаємо монети
        
        // ЗМІНИ ТУТ:
        rebirth_coins += 1; 
        kilkist_rebirth_coins.textContent = rebirth_coins; 
        
        kilkist.textContent = coinss; 
        rebirth_button.classList.add(''); 
    }
});


//                     МАГАЗИН

const open_shop_button = document.querySelector('#open-shop-btn');
const sidebar = document.querySelector('#shop-sidebar');
const close_shop = document.querySelector('#close-shop-btn');

open_shop_button.addEventListener('click', () => {
    sidebar.classList.remove('shop-hidden'); // Тепер використовуємо правильну змінну "sidebar"
});

close_shop.addEventListener('click', () => {
    sidebar.classList.add('shop-hidden'); // Повертаємо клас, щоб сховати панель
});


const buy_button1 = document.querySelector('.buy-btn1');
const buy_button2 = document.querySelector('.buy-btn2');

buy_button1.addEventListener('click', () => {
    if (coinss >= 100) {
        coinss -= 100; 
        clickPower += 1;    
        kilkist.textContent += clickPower;
        
        console.log("Успішно куплено апгрейд! Сила кліку тепер:", clickPower);
    } else {
        alert("Не вистачає ребірт-коїнів для покупки!"); 
    }
});

buy_button2.addEventListener('click', () => {
    if (coinss >= 1000) {
        coinss -= 1000;
        clickPower += 10;
        kilkist.textContent += clickPower;
    } else {
        alert("Не вистачає ребірт-коїнів для покупки!"); 
    }
})

//if (rebirth_coins === 1) {
//        rebirth_coins -= 1;
//        kilkist_rebirth_coins.textContent = rebirth_coins;
//
//        coinss += 1 * clicks;
//        kilkist.textContent = coinss;
//    }