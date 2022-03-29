
makeMap();
function makeMap() {
    let size = document.getElementById("mapSize").value;
    let status = document.getElementById("status");
    // if (status < 1 || status > 20) {
    //     status.innerHTML = "Неверное число. Введите число от 1 до 20."
    // }
    // else {
        for (let i = 0; i < size; i++) {
            let row = createRow();
            for (let k = 0; k < size; k++) {
                createElement(row);
            };
        };
        status.innerHTML = "Карта создана";
    // }
}

function createRow() {
    let parent = document.getElementById('parent');
    let row = document.createElement('div');
    row.className = "row";
    parent.appendChild(row);
    return row;
}

function createElement(parent) {
    let elem = document.createElement('div');
    elem.className = "elem";
    parent.appendChild(elem);
}
