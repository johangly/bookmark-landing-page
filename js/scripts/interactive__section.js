// VARIABLES
const d = document,
    buttonOne = d.getElementById('interactive__btn--1'),
    buttonTwo = d.getElementById('interactive__btn--2'),
    buttonThree = d.getElementById('interactive__btn--3'),
    interactiveImg = d.getElementById('interactive__img'),
    interactiveTittle = d.getElementById('interactive__tittle'),
    interactiveText = d.getElementById('interactive__text');

//tittle content
let tittleContent_1 = 'Bookmark in one click',
    tittleContent_2 = 'Intelligent search',
    tittleContent_3 = 'Share your bookmarks';
//text content
let textContent_1 = 'Organize your bookmarks however you like. Our<br>simple drag-and-drop interface gives you complete<br> control over how you manage your favourite sites.</p>',
    textContent_2 = 'Our powerful search feature will help you find saved<br>sites in no time at all No need to trawl through all of<br>your bookmarks.',
    textContent_3 = 'Easily share your bookmarks and collections with<br>others. Create a shareable link that you can send at<br>the click of a button.';
//images content
let imagesContent_1 = 'images/svg/illustration-features-tab-1.svg',
    imagesContent_2 = 'images/svg/illustration-features-tab-2.svg',
    imagesContent_3 = 'images/svg/illustration-features-tab-3.svg';

interactiveText.innerHTML = textContent_1;
interactiveTittle.innerHTML = tittleContent_1;
interactiveImg.src = imagesContent_1;
//!functions

//? change content on click

buttonOne.addEventListener('click', () => {
    buttonOne.classList.remove('button__active');
    buttonTwo.classList.remove('button__active');
    buttonThree.classList.remove('button__active');
    buttonOne.classList.add('button__active');
    interactiveTittle.innerHTML = '';
    interactiveImg.src = '';
    interactiveText.innerHTML = '';

    interactiveTittle.innerHTML = tittleContent_1;
    interactiveText.innerHTML = textContent_1;
    interactiveImg.src = imagesContent_1;
});
buttonTwo.addEventListener('click', () => {
    buttonOne.classList.remove('button__active');
    buttonTwo.classList.remove('button__active');
    buttonThree.classList.remove('button__active');
    buttonTwo.classList.add('button__active');
    interactiveTittle.innerHTML = '';
    interactiveImg.src = '';
    interactiveText.innerHTML = '';
    interactiveText.innerHTML = textContent_2;
    interactiveTittle.innerHTML = tittleContent_2;
    interactiveImg.src = imagesContent_2;
});
buttonThree.addEventListener('click', () => {
    buttonOne.classList.remove('button__active');
    buttonTwo.classList.remove('button__active');
    buttonThree.classList.remove('button__active');
    buttonThree.classList.add('button__active');
    interactiveTittle.innerHTML = '';
    interactiveImg.src = '';
    interactiveText.innerHTML = '';

    interactiveTittle.innerHTML = tittleContent_3;
    interactiveText.innerHTML = textContent_3;
    interactiveImg.src = imagesContent_3;
});

//? ACCORDION

const accordion = d.querySelectorAll('.accordion__button');
const accordion1 = d.querySelector('#accordion-1');
const accordion2 = d.querySelector('#accordion-2');
const accordion3 = d.querySelector('#accordion-3');
const accordion4 = d.querySelector('#accordion-4');
const panel1 = accordion1.nextElementSibling;
const panel2 = accordion2.nextElementSibling;
const panel3 = accordion3.nextElementSibling;
const panel4 = accordion4.nextElementSibling;

accordion1.addEventListener('click', e => {
    accordion2.classList.remove('active');
    accordion3.classList.remove('active');
    accordion4.classList.remove('active');
    accordion1.classList.toggle('active');
    panel2.style.maxHeight = null;
    panel3.style.maxHeight = null;
    panel4.style.maxHeight = null;
    if (panel1.style.maxHeight) {
        panel1.style.maxHeight = null;
    } else {
        panel1.style.maxHeight = panel1.scrollHeight + "px";
    }
});
accordion2.addEventListener('click', e => {
    accordion1.classList.remove('active');
    accordion3.classList.remove('active');
    accordion4.classList.remove('active');
    accordion2.classList.toggle('active');
    panel3.style.maxHeight = null;
    panel4.style.maxHeight = null;
    panel1.style.maxHeight = null;
    if (panel2.style.maxHeight) {
        panel2.style.maxHeight = null;
    } else {
        panel2.style.maxHeight = panel2.scrollHeight + "px";
    }
});
accordion3.addEventListener('click', e => {
    accordion2.classList.remove('active');
    accordion1.classList.remove('active');
    accordion4.classList.remove('active');
    accordion3.classList.toggle('active');
    panel4.style.maxHeight = null;
    panel1.style.maxHeight = null;
    panel2.style.maxHeight = null;
    if (panel3.style.maxHeight) {
        panel3.style.maxHeight = null;
    } else {
        panel3.style.maxHeight = panel3.scrollHeight + "px";
    }
});
accordion4.addEventListener('click', e => {
    accordion2.classList.remove('active');
    accordion3.classList.remove('active');
    accordion1.classList.remove('active');
    accordion4.classList.toggle('active');
    panel1.style.maxHeight = null;
    panel2.style.maxHeight = null;
    panel3.style.maxHeight = null;
    panel2.style.maxHeight = null;
    if (panel4.style.maxHeight) {
        panel4.style.maxHeight = null;
    } else {
        panel4.style.maxHeight = panel4.scrollHeight + "px";
    }
});

// RESPONSIVE NAVBAR

const $responsiveButton = d.querySelector('#responsive__button');
const $responsiveNavbar = d.querySelector('#responsive-navbar');
const $logo = d.querySelector('#logo');
const $nav = d.querySelector('#nav-id');

$responsiveButton.addEventListener('click', e => {
    if ($responsiveNavbar.style.width) {
        $logo.src = 'images/svg/logo-bookmark.svg';
        $nav.style.background = '##252b46e7';
        $responsiveButton.src = 'images/svg/icon-hamburger.svg';
        $nav.style.background = '#fbfbfb';


        $responsiveNavbar.style.width = null;
    } else {
        $responsiveNavbar.style.width = '100%';
        $logo.src = 'images/svg/logo-footer.svg';

        $nav.style.backgroundColor = `transparent`;
        $responsiveButton.src = 'images/svg/icon-close.svg';
    }
});
// EMAIL FORM

const $emailForm = d.querySelector('#email__form');
const $emailEmailInput = d.querySelector('#email__input');
const $emailSendButton = d.querySelector('#email__button');
const $errorMessage = d.querySelector('#message');

$emailSendButton.addEventListener('click',
    e => {
        e.preventDefault();
        console.log($emailEmailInput.value);
        let gmail = $emailEmailInput.value;
        if (gmail == '') {
            console.log('alv ajja');
            $errorMessage.style.backgroundColor = '#fa5757';
            $errorMessage.style.outline = '3px solid #fa5757';
            $errorMessage.textContent = 'Whoops, The email field is empty'
            $emailEmailInput.style.outline = '3px solid #fa5757';
            setTimeout(() => {
                $emailEmailInput.style.outline = 'none';
                $errorMessage.textContent = ''
                $errorMessage.style.backgroundColor = 'transparent';
                $errorMessage.style.outline = 'none';

            }, 3000);
        } else {
            let regExp = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+/ig;
            if (regExp.test(gmail)) {
                $errorMessage.style.backgroundColor = '#00ce00';
                $errorMessage.style.outline = '3px solid #00ce00';
                $errorMessage.textContent = 'Success, check your email :)'
                $emailEmailInput.style.outline = '3px solid #00ce00';
                setTimeout(() => {
                    $emailEmailInput.style.outline = 'none';
                    $errorMessage.textContent = ''
                    $errorMessage.style.backgroundColor = 'transparent';
                    $errorMessage.style.outline = 'none';
                }, 5000);
            } else {
                $errorMessage.style.backgroundColor = '#fa5757';
                $errorMessage.style.outline = '3px solid #fa5757';
                $errorMessage.textContent = `Whoops, make sure it's an email`;
                $emailEmailInput.style.outline = '3px solid #fa5757';
                setTimeout(() => {
                    $emailEmailInput.style.outline = 'none';
                    $errorMessage.textContent = ''
                    $errorMessage.style.backgroundColor = 'transparent';
                    $errorMessage.style.outline = 'none';

                }, 3000);
            }
        }
    })