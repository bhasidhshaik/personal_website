const navOpenBtn = document.getElementById('nav-toggle');
const navCloseBtn = document.getElementById('close-nav');
const navBar = document.getElementById('navbar');
const body = document.getElementById('body');
const listItem = document.getElementsByClassName('list-item');

navOpenBtn.addEventListener("click" , ()=>{
    navBar.classList.add('opened');
    navBar.classList.remove('closed');
    body.classList.add('nav-opened');
});
navCloseBtn.addEventListener("click" , ()=>{
    navBar.classList.add('closed');
    navBar.classList.remove('opened');
    body.classList.remove('nav-opened');
});

for(let i=0 ; i<listItem.length; i++){
    listItem[i].addEventListener("click" , ()=>{
        navBar.classList.add('closed');
    navBar.classList.remove('opened');
    body.classList.remove('nav-opened');
    })
}


var deviceWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
if(deviceWidth<600){
    const sections = document.querySelectorAll('section');
    window.onscroll = ()=>{
        sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
    
        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }
        // else{
        //     sec.classList.remove('show-animate');
    
        // }
    });
    } 
}
else{

    const sections = document.querySelectorAll('section');
    window.onscroll = ()=>{
        sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
    
        if(top >= offset && top < offset + height){
            sec.classList.add('show-animate');
        }
    });
    }
}
const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    progressBar.style.width = `${scrolled}%`;
});

