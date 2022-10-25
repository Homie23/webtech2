const menuBurger = document.querySelector(".burger-menu");
menuBurger.addEventListener("click", function () {
  menuBurger.classList.toggle('burger-menu_active');
});

document.querySelector('.burger-menu__nav').addEventListener('click', event => {
  if (event.target.innerText.trim() === 'Buttons') {
    delElements();
    buttons();
  }
  if (event.target.innerText.trim() === 'Create table') {
    delElements();
    create_table_form();
  }
})

function delElements() {
  document.querySelectorAll('.divAdd div').forEach(function (a) {
    a.remove()
  })
}







