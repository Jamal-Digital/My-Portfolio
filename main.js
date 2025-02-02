const nav = document.querySelector('.menu');
const icon = document.querySelector('.icon');

icon.onclick = ()=>{
    nav.classList.toggle('active-nav');
    if(nav.classList.contains('active-nav')) {
        icon.src = "images/icons8-cancel-50.png";
        console.log('working');
    } else{
        icon.src = "images/icons8-hamburger-button-50.png";
        console.log('not working');
    }
}
window.onscroll = ()=>{
    nav.classList.remove('active-nav');
    icon.src = "images/icons8-hamburger-button-50.png";
}
