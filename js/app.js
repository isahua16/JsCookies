function create_cookie()
{
    Cookies.set(`button_clicked`, `yes`);
}
let button_one = document.querySelector(`#btn_1`);
button_one.addEventListener(`click`, create_cookie);

if(!Cookies.get(`button_clicked`))
{
    button_one.insertAdjacentHTML(`beforebegin`, `<h1>Please Click the button!</h1>`);
}
else
{
    button_one.insertAdjacentHTML(`beforebegin`, `<h1>Congrats on baking a cookie!</h1>`);
}
