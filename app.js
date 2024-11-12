alert ("Bizning saytda timer va budilnik funksiyalri ishlamaydi, agar hohlasangiz premium sotvoling!")
alert ("Sotvolasizmi ?, blaman sotvolasz chunki boshqa ilojingiz ham yoq ! 😁")
const timeEl = document.querySelector(".time");
const dayEl = document.querySelector(".day");
const dateEl = document.querySelector(".date");


function getTime(){
    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let timeView = `${hours}:${minutes}:${seconds}`

    timeEl.innerHTML = timeView;
}
getTime();

setInterval( ()=>{
    getTime();
}, 1000)

function getDay(){
    let date = new Date();
    
    let day = date.getDay ()
    let days = ["Yakshanba", "Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma", "Shanba"];

    let a = days[day]

    dayEl.innerHTML = a;
}

getDay();

setInterval( ()=>{
    getDay();
}, 24 * 60 * 60 * 1000)

function getDate(){
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let months = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
    let a = months[month]


    let dateView = `${day}.${a}.${year}`

    dateEl.innerHTML = dateView;
}

getDate();



