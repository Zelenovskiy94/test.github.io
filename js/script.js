$('.btn_nav_menu').click(function(){
    $('.nav_menu_mobile').toggleClass('active')
    $('body').addClass("fixed-position");
})
$('.btn_nav_close').click(function(){
    $('.nav_menu_mobile').removeClass('active')
    $('body').removeClass("fixed-position");
})


function resizeFooterLogo () {
    if(window.innerWidth > 1440) {
        const footerLogo = document.querySelector('.footer_logo')
        let width = (window.innerWidth - 1440) / 2 + 427
        footerLogo.style.width = width + 'px'
    }

}
window.onresize = function(event) {
    resizeFooterLogo ()
};
resizeFooterLogo ()