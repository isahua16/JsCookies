function create_cookie(event)
{
    Cookies.set(`button_clicked`, `yes`);
}

function delete_cookie(event)
{
    Cookies.remove(`button_clicked`);
}

let button_one = document.querySelector(`#btn_1`);
let button_two = document.querySelector(`#btn_2`);

button_one.addEventListener(`click`, create_cookie);
button_two.addEventListener(`click`, delete_cookie);

if(!Cookies.get(`button_clicked`))
{
    button_one.insertAdjacentHTML(`beforebegin`, `<h1>Please Click the button!</h1>`);
}
else
{
    button_one.insertAdjacentHTML(`beforebegin`, `<h1>Congrats on baking a cookie!</h1>`);
}
