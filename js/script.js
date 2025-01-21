let menu=document.querySelector('#menu_icon');
let navlist=document.querySelector('.nav_list');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};