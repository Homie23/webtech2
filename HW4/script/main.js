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

function setStorage(key, val) {
  localStorage.setItem(key, val);
}

function runStorage(key) {
  let s = localStorage.getItem(key);
  if (s === 'btn') {
    buttons();
  } else if (s === 'tab') {
    create_table_form();
  }
}
window.onload = (event) => {
  runStorage(key);
};







