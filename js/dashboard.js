const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu_btn");
const closeBtn = document.querySelector("#close_btn");
const themeToggle = document.querySelector(".theme_toggler")

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display='block'
});
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display='none'
});
themeToggle.addEventListener('click',() =>{
    document.body.classList.toggle('dark_theme_variables')

    themeToggle.querySelector('span:nth.child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth.child(2)').classList.toggle('active');
});

Customers.forEach(customer => {
    const tr = document.createElement(`tr`);
    const trContent = 
        <><td>${customer.Name}</td><td>${customer.Profit}</td><td class="rating">${customer.Score}</td><td class="primary">${customer.Rating}</td></>

    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});