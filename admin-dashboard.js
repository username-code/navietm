var sb = document.getElementById('sidebar');
var btn = document.getElementById('d-none');
var right_section = document.getElementById('full-w').classList;
var search = document.getElementById('search-div');
var div = document.getElementById('con-fluid');
var darrow = document.getElementById('down-arrow');
var uarrow = document.getElementById('up-arrow');
var darrow1 = document.getElementById('down-arrow1');
var uarrow1 = document.getElementById('up-arrow1');

function hide() {
    right_section.add('col-12');
    right_section.remove('col-md-8','col-lg-10');
    div.classList.add('ps-md-5');
    search.classList.add('ms-4');
    btn.classList.remove('d-none');
    sb.classList.remove('d-block');
    sb.classList.add('d-none');
}

function show() {
    right_section.add('col-12','col-md-8','col-lg-10');
    div.classList.remove('ps-md-5');
    search.classList.remove('ms-4');
    btn.classList.add('d-none');
    sb.classList.remove('d-none');
    sb.classList.add('d-block');
}

function downarrow() {
    darrow.classList.add('d-none');
    uarrow.classList.remove('d-none');
}

function uparrow() {
    darrow.classList.remove('d-none');
    uarrow.classList.add('d-none');
}

function downarrow1() {
    darrow1.classList.add('d-none');
    uarrow1.classList.remove('d-none');
}

function uparrow1() {
    darrow1.classList.remove('d-none');
    uarrow1.classList.add('d-none');
}