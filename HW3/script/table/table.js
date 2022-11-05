function create_table_form() {
    let div_table = document.createElement('div');
    div_table.className = 'table_div';
    var addDiv = document.querySelector("div.divAdd");
    addDiv.appendChild(div_table);

    var h1 = document.createElement("h1");
    h1.innerText = "Table creation";
    div_table.appendChild(h1);

    let p_width = document.createElement("p");
    p_width.innerText = "Table width:";
    div_table.appendChild(p_width);

    let width_input = document.createElement("input");
    width_input.type = "text";
    width_input.id = "width";
    div_table.appendChild(width_input);

    let p_height = document.createElement("p");
    p_height.innerText = "Table height:";
    div_table.appendChild(p_height);

    let height_input = document.createElement("input");
    height_input.type = "text";
    height_input.id = "height";
    div_table.appendChild(height_input);

    let btn_crt_table = document.createElement("button");
    btn_crt_table.innerText = "Create Table";
    div_table.appendChild(btn_crt_table);
    btn_crt_table.addEventListener('click', (event) => {
        draw_table(width_input.value, height_input.value);
    });

    let sect = document.createElement('section');
    sect.id = "section";
    div_table.appendChild(sect);
    
    setStorage(key, 'tab');
}

function draw_table(width, height) {
    var myTableDiv = document.getElementById("section");
    var table = document.createElement('table');
    table.className = "table";
    table.id = 'tableId';
    var tableBody = document.createElement('tbody');
    table.appendChild(tableBody);
    var section = document.getElementById("section");
    section.append(table);
    if (document.getElementById("tableId")) {
        document.getElementById("tableId").remove();
    }
    for (var i = 0; i < height; i++) {
        var tr = document.createElement('tr');
        tableBody.appendChild(tr);
        for (var j = 0; j < width; j++) {
            var td = document.createElement('td');
            if (height < 1 || width < 1 || height > 15 || width > 15 || !height || !width) {
                td.textContent = "Width and height value must be an integer between 1 and 15!";
                width = 1;
                height = 1;
            }
            tr.appendChild(td);
        }
        tableBody.append(tr);
    }
    myTableDiv.appendChild(table).onclick = function (e) {
        if (e.target.tagName !== 'TD') return;
        alert(`Позиция: ${e.target.cellIndex + 1} в ряду: ${e.target.closest('tr').rowIndex + 1}`);
    };
}