let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');
const slideShow = document.querySelector(".cardapio");
const linkCardapio = document.querySelector("#link-cardapio")


menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

if(screen.width > 480) {
    slideShow.setAttribute("hidden", "true");
    linkCardapio.setAttribute("href", "https://google.com/search?q=hot+dog+lanches")
}