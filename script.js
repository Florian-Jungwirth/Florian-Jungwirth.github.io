let navContent = document.getElementById('navContent');

function changeMenu(x) {
    x.classList.toggle('change');
    if(x.classList.value === 'change') {
        navContent.style.opacity = 1;
        navContent.style.zIndex = 9;
        navContent.style.position = 'sticky';
        document.body.style.overflow = 'hidden';
    } else {
        navContent.style.opacity = 0;
        navContent.style.zIndex = -9;
        navContent.style.position = 'absolute';
        document.body.style.overflow = 'visible';
    }
}
 
window.addEventListener('load', function() {
    window.onscroll = function () {
        /*let element = document.getElementById('try');
        let boxCoordinate = element.getBoundingClientRect().top;

        if(boxCoordinate > 0) {
            document.body.style.backgroundColor =  'white';
        } else {
            document.body.style.backgroundColor = 'black';
        }


        console.log(boxCoordinate);*/

        let element = document.getElementById('text');

        if(window.pageYOffset < 10) {
            element.style.opacity = 1;
        }

        if(window.pageYOffset > 0) {
            element.style.opacity -= 0.05;
        }
    };
});