'use strict';

const boxContainer = document.querySelector('.boxContainer');
const saluteTextContainer = document.querySelector('.saluteTextContainer');
const saluteImageContainer = document.querySelector('.saluteImageContainer');
const myName = document.querySelector('.name');
const jobTitleContainer = document.querySelectorAll('.jobTitleContainer');
const jobTitle = document.querySelectorAll('.jobTitle');
const projectsTitle = document.querySelector('.projectsTitle');
const laptop = document.querySelectorAll('.laptop');

for (let index = 0; index < 365; index++) {
    const list = [
        0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167, 205, 206, 246,
        247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210, 211, 251, 252, 292, 293, 8, 9,
        14, 15, 49, 50, 51, 90, 91, 92, 131, 132, 133, 134, 172, 173, 213, 214, 254, 255, 295, 296,
        175, 176, 217, 177, 218, 259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217,
        218, 259, 260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141, 144,
        181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306, 24, 25, 65, 66, 67,
        106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230, 270, 271, 311, 312, 67, 108, 149,
        150, 191, 232, 192, 233, 274, 234, 275, 316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33,
        34, 74, 75, 115, 116, 156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77,
        78, 79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282, 283, 284, 285,
        323, 324, 325, 326,
    ];

    const element = document.createElement('div');
    element.classList = list.includes(index) ? 'box active' : 'box';
    boxContainer.appendChild(element);
}

// Scroll Animations
window.addEventListener('scroll', () => {
    let offsetY = window.scrollY;
    saluteTextContainer.style.transform = `translateY(${offsetY * 0.1}px)`;
    saluteImageContainer.style.transform = `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`;
    myName.style.transform = `translateX(${(offsetY - 900) * 0.4}px)`;
    projectsTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`;
    jobTitleContainer[0].style.backgroundPositionY = `${offsetY * 0.5}px`;
    jobTitleContainer[1].style.backgroundPositionY = `${-offsetY * 0.5}px`;
    jobTitle[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`;
    jobTitle[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`;

    for (let i = 0; i < $('.projects-box').children().length; i++) {
        if ($('#project_' + (i + 1)).offset().top - 500 < offsetY) {
            $('#proj_' + (i + 1)).addClass('animate__animated animate__fadeInLeft');
            $('#proj_' + (i + 1) + '_desc').addClass('animate__animated animate__fadeInRight');
        }
    }
});
