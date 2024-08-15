let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');
const slideShow = document.querySelector(".cardapio");
const linkCardapio = document.querySelector("#link-cardapio")
const iframeLoc = document.querySelector("#loc-iframe")



menuToggle.addEventListener('click', () => {

    document.body.style.overflow = show ? 'hidden' : 'initial'

    menuContent.classList.toggle('on', show);
    show = !show;
})

if(screen.width > 480) {
    slideShow.setAttribute("hidden", "true");
    linkCardapio.setAttribute("href", "https://www.google.com/search?q=hot+dog+lanches&sourceid=chrome&ie=UTF-8#vhid=33:/g/11ngj99n9f&vssid=menu_viewer_entrypoint")
} 

if(screen.width<480) {
    iframeLoc.setAttribute("width", "300");
}