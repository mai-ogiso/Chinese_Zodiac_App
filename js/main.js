const birthYearEl = document.querySelector('#birthYear');
const placeResultEl = document.querySelector('#placeresultEN');
const placeResultJPEl = document.querySelector('#placeresultJP');
const h2El = document.querySelector('#result-h2');
const h2JPEl = document.querySelector('#result-h2-JP');
const statusEl = document.querySelector('#status');
const langEl = document.querySelector('#display-language');

const LANG_EN = ".eng";
const LANG_JP = ".jp";

let yourZodiac = "";
let yourZodiacJP = "";
let AddClassItems = "";
let RemoveClassItems = "";

// ------------------------------
// Main Function AddEventListener
// ------------------------------
//Run FUNCTION
document.querySelector('#setZordic').addEventListener('click', calcZodiac);

//Run Function
document.querySelector('#langChangeToJP').addEventListener('click', function (e) {
    changeLang('JP');
});

//Run Function
document.querySelector('#langChangeToEN').addEventListener('click', function (e) {
    changeLang('EN');
});


// ------------------------------
// Sub Function
// ------------------------------

//Caluculate Zodiac
function calcZodiac() {

    const yourZodiacNum = (Number(birthYearEl.value) + 9) % 12;

    // What is your Zodiac
    switch (yourZodiacNum) {
        case 1:
            yourZodiac = "rat";
            yourZodiacJP = "子"
            break;
        case 2:
            yourZodiac = "ox";
            yourZodiacJP = "丑"
            break;
        case 3:
            yourZodiac = "tiger";
            yourZodiacJP = "寅"
            break;
        case 4:
            yourZodiac = "rabbit";
            yourZodiacJP = "卯"
            break;
        case 5:
            yourZodiac = "dragon";
            yourZodiacJP = "辰"
            break;
        case 6:
            yourZodiac = "snake";
            yourZodiacJP = "巳"
            break;
        case 7:
            yourZodiac = "horse";
            yourZodiacJP = "午"
            break;
        case 8:
            yourZodiac = "sheep";
            yourZodiacJP = "未"
            break;
        case 9:
            yourZodiac = "monkey";
            yourZodiacJP = "申"
            break;
        case 10:
            yourZodiac = "rooster";
            yourZodiacJP = "酉"
            break;
        case 11:
            yourZodiac = "dog";
            yourZodiacJP = "戌"
            break;
        case 0:
            yourZodiac = "pig";
            yourZodiacJP = "亥"
            break;
        default:
            console.log("I'm sorry. Something is wrong!")
    }

    // setResult
    placeResultEl.innerHTML = yourZodiac;
    placeResultJPEl.innerHTML = yourZodiacJP;

    // Judge show - hidden Zodiac
    showZodiac(yourZodiacNum);

    // show h2
    showH2()

    // set Status
    changeStatus();
}

// show-hidden Zodiac
function showZodiac(yourZodiacNum) {
    const zodiacIdName = "#zodiac-";
    const zodiacId = `#zodiac-${yourZodiacNum}`;

    for (let i = 0; i < 12; i++) {
        if (i === yourZodiacNum) {
            document.querySelector(zodiacId).classList.remove('transformSmall');
            document.querySelector(zodiacId).classList.add('transformBig');
        } else {
            document.querySelector(zodiacIdName + i).classList.remove('transformBig');
            document.querySelector(zodiacIdName + i).classList.add('transformSmall');
        }
    }
}

// show h2
function showH2() {
    console.log("langEl : " + langEl.value);

    if (langEl.value ==="EN"){
        h2El.classList.remove('hidden');
        h2JPEl.classList.add('hidden');
    } else{
        h2JPEl.classList.remove('hidden');
        h2El.classList.add('hidden');
    };
}

// change status
function changeStatus(){
    statusEl.value="1";
}

// change Language English <-----> Japanese
function changeLang(language) {
    // Japanese --> English
    if (language === "EN") {
        AddClassItems = LANG_JP;
        RemoveClassItems = LANG_EN;
        langEl.value="EN";
    // English --> Japanese
    } else if (language === "JP") {
        AddClassItems = LANG_EN;
        RemoveClassItems = LANG_JP;
        langEl.value="JP";
    } else {
        console.log("I'm sorry. Something is wrong!")
    }

    const Items = document.querySelectorAll(AddClassItems);

    Items.forEach(function (item) {
        item.classList.add('hidden');
    });

    const RemoveItems = document.querySelectorAll(RemoveClassItems);
    RemoveItems.forEach(function (item) {
        item.classList.remove('hidden');
    });

    // check Status
    if (statusEl.value === "0"){
        h2El.classList.add('hidden');
        h2JPEl.classList.add('hidden');
    }
}


// change Language English --> Japanese
function changeLangEN() {
    const JPItems = document.querySelectorAll(".jp");
    JPItems.forEach(function (item) {
        item.classList.add('hidden');
    });

    const ENItems = document.querySelectorAll(".eng");
    ENItems.forEach(function (item) {
        item.classList.remove('hidden');
    });

}

// change Language Japanese --> English
function changeLangJP() {
    const JPItems = document.querySelectorAll(".jp");
    JPItems.forEach(function (item) {
        item.classList.remove('hidden');
    });

    const ENItems = document.querySelectorAll(".eng");
    ENItems.forEach(function (item) {
        item.classList.add('hidden');
    });

}

