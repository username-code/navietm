var userimg = document.getElementById('user-img');
var adminimg = document.getElementById('admin-img');
var userlink = document.getElementById('user-link');
var adminlink = document.getElementById('admin-link');
var userwel = document.getElementById('wel-user');
var adminwel = document.getElementById('wel-admin');
var error_msg = document.getElementById('error');
var userbtn = document.getElementById('login-btn-user');
var adminbtn = document.getElementById('login-btn-admin');

function userpage() {
    error_msg.style.visibility = 'hidden';
    userimg.classList.add('d-md-block');
    adminimg.classList.remove('d-md-block');
    userlink.classList.add('active-link');
    adminlink.classList.remove('active-link');
    userwel.classList.remove('d-none');
    adminwel.classList.add('d-none');
    userbtn.classList.remove('d-none');
    adminbtn.classList.add('d-none');
}

function adminpage() {
    adminimg.classList.add('d-md-block');
    userimg.classList.remove('d-md-block');
    userlink.classList.remove('active-link');
    adminlink.classList.add('active-link');
    userwel.classList.add('d-none');
    adminwel.classList.remove('d-none');
    userbtn.classList.add('d-none');
    adminbtn.classList.remove('d-none');
}

function show_error() {
    error_msg.style.visibility = 'visible';
}