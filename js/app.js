function create_cookie()
{
    Cookies.set(`button_clicked`, `yes`);
}

let button_one = document.querySelector(`#btn_1`);
button_one.addEventListener(`click`, create_cookie);