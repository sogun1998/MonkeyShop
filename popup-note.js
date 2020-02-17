function popupNote() {
    let div_note_extend = document.getElementById("note-extend");
    div_note_extend.style.display = 'none';
    let div_borrow = document.getElementById("borrow");
    div_borrow.style.display = 'none';
    let btn_switch = document.getElementById("customSwitch");
    btn_switch.checked = false;
}

function noteExtend() {
    let div_note_extend = document.getElementById("note-extend");
    if (div_note_extend.style.display === 'none') {
        div_note_extend.style.display = 'block';
    } else {
        div_note_extend.style.display = 'none';
    }
}

function borrow() {
    let div_borrow = document.getElementById("borrow");
    if (div_borrow.style.display === 'none') {
        div_borrow.style.display = 'block';
    } else {
        div_borrow.style.display = 'none';
    }
}