
addEventListener("load", (event) => {});

onload = (event) => {
    const HBO = document.getElementById('hamburger_menu_btnO');
    const HBC = document.getElementById('hamburger_menu_btnC');
    const HOC = document.getElementsByClassName('hamburger_overlay')[0];

    HBO.addEventListener('click',ShowHamburgerMenu);
    HBC.addEventListener('click',HideHamburgerMenu);
    HOC.addEventListener('click',HideHamburgerMenu);
};



function ShowHamburgerMenu(){
    let menu = document.querySelector('div.hamburger');

    menu.style.display = 'block';
}

function HideHamburgerMenu(){
    let menu = document.querySelector('div.hamburger');

    menu.style.display = 'none';
}