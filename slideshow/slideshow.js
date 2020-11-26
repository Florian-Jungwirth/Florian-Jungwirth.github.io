let sources;
let counter = 1;
let buttons = document.getElementsByClassName('button');
let descriptionBox = document.getElementById('description');
let descriptions = ['Hellmonsödt (1)', 'Ebensee (2)', 'Ebensee (3)', 'Hellmonsödt (4)', 'Hellmonsödt (5)'];
let myInterval;
descriptionBox.innerHTML = descriptions[counter-1];

myInterval = setInterval(function() {nextSlide(true);}, 3000);

function nextSlide (check) {
    clearInterval(myInterval);
    myInterval = setInterval(function() {nextSlide(true);}, 3000);
    let sourceOfFirstPic = document.images[0].src;
    if(check) {
        counter++;
        if(counter > document.images.length) {
            counter = 1;
        }
        toggle(counter);
    }

    descriptionBox.innerHTML = descriptions[counter-1];

    for(let i = 1; i !== document.images.length+1; i++) {
        if(i === document.images.length) {
            sources = document.images[0].src;
            document.images[i-1].src = sourceOfFirstPic;
        } else {
            sources = document.images[i].src;
            document.images[i-1].src = sources;
        }
    }
}

function previousSlide (check) {
    clearInterval(myInterval);
    myInterval = setInterval(function() {nextSlide(true);}, 3000);
    let sourceOfLastPic = document.images[document.images.length-1].src;
    
    if(check) {
        counter--;
        if(counter < 1) {
            counter = document.images.length;
        }
        toggle(counter);
    }

    descriptionBox.innerHTML = descriptions[counter-1];

    for(let i = document.images.length-1; i >= 0; i--) {
        if(i === 0) {
            sources = document.images[i].src;
            document.images[i].src = sourceOfLastPic;
        } else {
            sources = document.images[i-1].src;
            document.images[i].src = sources;
        }
    }
}

function toggle(value) {
    let diff = counter-value;
    counter = value;
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    buttons[value-1].classList.add('active');

    if(diff > 0) {
        for(let i = 0; i < diff; i++) {
            previousSlide(false);
        }
    }

    if(diff < 0) {
        for(let i = 0; i > diff; i--) {
            nextSlide(false);
        }
    }
}