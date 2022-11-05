function buttons() {
    let div_btns = document.createElement('div');
    div_btns.id = "btnss"
    div_btns.className = 'btns';
    var addDiv = document.querySelector("div.divAdd");
    addDiv.appendChild(div_btns);

    var h1 = document.createElement("H1");
    var t = document.createTextNode("Buttons");
    h1.appendChild(t);
    div_btns.appendChild(h1);

    let p_color = document.createElement("p");
    p_color.innerHTML = "Choose color: ";
    div_btns.appendChild(p_color);

    let inpt_color = document.createElement("input");
    inpt_color.id = 'idColor';
    inpt_color.setAttribute("type", "color");
    div_btns.appendChild(inpt_color);

    for (i = 0; i < 3; i++) {
        let btns = document.createElement("button");
        btns.className = "buttons";
        btns.innerHTML = "Click me :)";
        div_btns.appendChild(btns);
    }
    
    setStorage(key, 'btn');
}

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
