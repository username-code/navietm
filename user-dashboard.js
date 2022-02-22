var navbar = document.getElementById('nav');
var sb = document.getElementById('sidebar');
var btn = document.getElementById('d-none');
var right_section = document.getElementById('full-w').classList;
var div = document.getElementById('con-fluid');
var darrow = document.getElementById('down-arrow');
var uarrow = document.getElementById('up-arrow');
var darrow1 = document.getElementById('down-arrow1');
var uarrow1 = document.getElementById('up-arrow1');
var search_div = document.getElementById('search-div');
var ul = document.getElementById('ul-collapse');

function hide() {
    right_section.add('col-12');
    navbar.classList.add('navbar-expand-md');
    right_section.remove('mt-3','mt-md-0','col-md-8','col-lg-10');
    div.classList.add('ps-md-5', 'flex-md-row');
    btn.classList.remove('d-none');
    sb.classList.remove('d-block');
    sb.classList.add('d-none');
    search_div.classList.remove('w-100');
    ul.classList.add('align-items-md-center');
}

function show() {
    right_section.add('col-12','col-md-8','col-lg-10','mt-3','mt-md-0');
    navbar.classList.remove('navbar-expand-md');
    div.classList.remove('ps-md-5', 'flex-md-row');
    btn.classList.add('d-none');
    sb.classList.remove('d-none');
    sb.classList.add('d-block');
    search_div.classList.add('w-100');
    ul.classList.remove('align-items-md-center');
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