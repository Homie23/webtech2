const menuBurger = document.querySelector(".burger-menu");
menuBurger.addEventListener("click", function () {
  menuBurger.classList.toggle('burger-menu_active');
});

document.querySelector('.burger-menu__nav').addEventListener('click', event => {
  if (event.target.tagName !== 'A') return;
  if (event.target.innerText.trim() === 'Buttons') {
    let div_btns = document.createElement('div');
    div_btns.className = 'btns';
    document.body.appendChild(div_btns);

    var h = document.createElement("H1");
    var t = document.createTextNode("Buttons");
    h.appendChild(t);
    div_btns.appendChild(h);

    let p = document.createElement("p");
    p.innerHTML = "Choose color: ";
    div_btns.appendChild(p);

    let inpt = document.createElement("input");
    inpt.id = 'idColor';
    inpt.setAttribute("type", "color");
    div_btns.appendChild(inpt);

    for (i = 0; i < 3; i++) {
      let btn = document.createElement("button");
      btn.className = "buttons";
      btn.innerHTML = "Click me :)";
      div_btns.appendChild(btn);
    }

  }

})

document.addEventListener("click", function (event) {
  const color = document.getElementById("idColor").value;
  if (!event.target.classList.contains("buttons")) {
    return;
  }

  if (event.target.style.backgroundColor) {
    event.target.style.removeProperty("background-color");
  } else {
    event.target.style.backgroundColor = color;
  }
});