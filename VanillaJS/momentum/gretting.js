const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    gretting = document.querySelector(".js-gretting");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function SaveName(text){
    localStorage.setItem(USER_LS, text);
}

function handlesSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    SaveName(currentValue);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handlesSubmit);
}

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    gretting.classList.add(SHOWING_CN);
    gretting.innerHTML = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null) {
        // 유저가 없는경우
        askForName();
    } else {
        // 유저가 있는 경우
        paintGreeting(currentUser);
    }
}

function inint() {
    loadName();
}

inint();