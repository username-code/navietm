var sb = document.getElementById('sidebar');
var btn = document.getElementById('d-none');
var right_section = document.getElementById('full-w').classList;
var div = document.getElementById('con-fluid');
var darrow = document.getElementById('down-arrow');
var uarrow = document.getElementById('up-arrow');
var darrow1 = document.getElementById('down-arrow1');
var uarrow1 = document.getElementById('up-arrow1');
var span_ms_3 = document.getElementById('span-ms-3');


function hide() {
    right_section.add('col-12');
    right_section.remove('mt-3','mt-md-0','col-md-8','col-lg-10');
    div.classList.add('ps-md-5');
    btn.classList.remove('d-none');
    sb.classList.remove('d-block');
    sb.classList.add('d-none');
    span_ms_3.classList.add('ms-3');

}

function show() {
    right_section.add('col-12','col-md-8','col-lg-10','mt-3','mt-md-0');
    div.classList.remove('ps-md-5');
    btn.classList.add('d-none');
    sb.classList.remove('d-none');
    sb.classList.add('d-block');
    span_ms_3.classList.remove('ms-3');

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

function show_error1(){
    const submit =  document.getElementsByClassName('incorrect');
    const submit1 = document.getElementsByClassName('warning')
    const submit2 = document.getElementsByClassName('warning1')
    const submit3 = document.getElementsByClassName('incorrect1')
    const success = document.getElementById('succesfull');

    success.classList.add('d-none')
    Object.values(submit).map(element => {
        element.style.display = "inline"
    });
    
      Object.values(submit3).map(element => {
        element.style.display = "inline"
    });
    Object.values(submit1).map(element => {
        element.style.display = "none";
    });
    Object.values(submit2).map(element => {
        element.style.display = "none";
    });
}
function show_error(){

    const submit =  document.getElementsByClassName('incorrect');
    const submit1 = document.getElementsByClassName('warning')
    const submit2 = document.getElementsByClassName('warning1')
        const submit3 = document.getElementsByClassName('incorrect1')
const success = document.getElementById('succesfull');

    success.classList.remove('d-none')
    Object.values(submit).map(element => {
        element.style.display = "none"

    });
    Object.values(submit3).map(element => {
        element.style.display = "none"
        
    });
    Object.values(submit1).map(element => {
        element.style.display = "inline";
    });
    Object.values(submit2).map(element => {
        element.style.display = "inline";
    });
}

var input_pass = document.getElementById('pass');
var eye = document.getElementById('i1');
var removeeye = document.getElementById('removeeye')
function pass_show() {
    eye.classList.add('d-none');
    removeeye.classList.remove('d-none');
    input_pass.type = 'text';
}

function pass_hide() {
    eye.classList.remove('d-none');
    removeeye.classList.add('d-none');
    input_pass.type = 'password';
}

var input_pass1 = document.getElementById('pass1');
var eye1 = document.getElementById('i2');
var removeeye1 = document.getElementById('removeeye1')
function pass_show1() {
    eye1.classList.add('d-none');
    removeeye1.classList.remove('d-none');
    input_pass1.type = 'text';
}

function pass_hide1() {
    eye1.classList.remove('d-none');
    removeeye1.classList.add('d-none');
    input_pass1.type = 'password';
}