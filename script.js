let navContent = document.getElementById('navContent');
let scrollDown = document.getElementById('scrollDown');

function changeMenu(x) {
    x.classList.toggle('change');
    if(x.classList.value === 'change') {
        navContent.style.opacity = 1;
        navContent.style.zIndex = 9;
        navContent.style.position = 'sticky';
        document.body.style.overflow = 'hidden';
        scrollDown.style.zIndex = -10;
    } else {
        navContent.style.opacity = 0;
        navContent.style.zIndex = -9;
        navContent.style.position = 'absolute';
        document.body.style.overflow = 'visible';
        scrollDown.style.zIndex = 10;
    }
}
 
window.addEventListener('load', function() {
    window.onscroll = function () {

        if(window.pageYOffset < 100) {
            scrollDown.style.opacity = 1;
            scrollDown.style.position = 'fixed';
        } else {
            scrollDown.style.opacity = 0;
            scrollDown.style.position = 'absolute';
        }


        /*let element = document.getElementById('srollDown');
        let boxCoordinate = element.getBoundingClientRect().top;

        if(boxCoordinate > 0) {
            document.body.style.backgroundColor =  'white';
        } else {
            document.body.style.backgroundColor = 'black';
        }


        console.log(boxCoordinate);*/

       /* let element = document.getElementById('text');

        if(window.pageYOffset < 10) {
            element.style.opacity = 1;
        }

        if(window.pageYOffset > 0) {
            element.style.opacity -= 0.05;
        }*/
    };
});