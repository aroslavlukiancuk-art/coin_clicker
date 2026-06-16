// ==========================================
//                 ГРА
// ==========================================

const clickButton = document.querySelector('#click-btn');
const rebirthButton = document.querySelector('#rebirth-btn');
const coinsDisplay = document.querySelector('.coins');
const rebirthCoinsDisplay = document.querySelector('.kilkist-rebirth-coins');

const limit_coins = 9999999999999999;
let coinss = 0;
let rebirth_coins = 0;
let clickPower = 1;

// Клік по монетці
clickButton.addEventListener('click', () => {
    if (coinss < limit_coins) {
        coinss += clickPower;
        coinsDisplay.textContent = coinss; 
    } else {
        console.log("Досягнуто ліміту!");
    }
});

// Кнопка переродження (Ребірт)
rebirthButton.addEventListener('click', () => {
    if (coinss >= 100) {
        coinss -= 100; 
        rebirth_coins += 1; 
        
        rebirthCoinsDisplay.textContent = rebirth_coins; 
        coinsDisplay.textContent = coinss; 
    } else {
        alert("Не вистачає монет для переродження! Треба 100 🪙");
    }
});


// ==========================================
//               МАГАЗИН
// ==========================================

const openShopButton = document.querySelector('#open-shop-btn');
const sidebar = document.querySelector('#shop-sidebar');
const closeShopButton = document.querySelector('#close-shop-btn');

openShopButton.addEventListener('click', () => {
    sidebar.classList.remove('shop-hidden'); 
});

closeShopButton.addEventListener('click', () => {
    sidebar.classList.add('shop-hidden'); 
});

// Купівля апгрейдів
const buyButton1 = document.querySelector('.buy-btn1');
const buyButton2 = document.querySelector('.buy-btn2');

buyButton1.addEventListener('click', () => {
    if (coinss >= 100) {
        coinss -= 100; 
        clickPower += 1;    
        coinsDisplay.textContent = coinss;
        console.log("Успішно куплено апгрейд! Сила кліку тепер:", clickPower);
    } else {
        alert("Не вистачає монет для покупки мульти-кліку! 🪙"); 
    }
});

buyButton2.addEventListener('click', () => {
    if (coinss >= 1000) {
        coinss -= 1000;
        clickPower += 10;
        coinsDisplay.textContent = coinss;
        console.log("Успішно куплено х10! Сила кліку тепер:", clickPower);
    } else {
        alert("Не вистачає монет для покупки мульти-кліку х10! 🪙"); 
    }
});
