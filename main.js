'use strict';

// Select DOM elements
const boxContainer = document.querySelector('.boxContainer');
const saluteTextContainer = document.querySelector('.saluteTextContainer');
const saluteImageContainer = document.querySelector('.saluteImageContainer');
const myName = document.querySelector('.name');
const jobTitleContainers = document.querySelectorAll('.jobTitleContainer');
const jobTitles = document.querySelectorAll('.jobTitle');
const projectsTitle = document.querySelector('.projectsTitle');
const laptops = document.querySelectorAll('.laptop');
const navbar = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');

// Create GitHub contribution boxes
function createGithubBoxes() {
    const list = [
        0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167, 205, 206, 246, 247, 287, 288, 5, 6,
        46, 47, 87, 88, 128, 129, 169, 170, 210, 211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131,
        132, 133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218, 259, 55, 56, 96, 97, 137, 138,
        178, 179, 219, 220, 260, 261, 217, 218, 259, 260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103,
        140, 141, 144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306, 24, 25, 65, 66, 67, 106,
        107, 108, 147, 148, 149, 150, 188, 189, 229, 230, 270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233,
        274, 234, 275, 316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116, 156, 157, 197, 198,
        238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78, 79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203,
        241, 242, 282, 283, 284, 285, 323, 324, 325, 326,
    ];

    for (let index = 0; index < 365; index++) {
        const element = document.createElement('div');
        element.classList = list.includes(index) ? 'box active' : 'box';
        boxContainer.appendChild(element);
    }
}

// Initialize GitHub contribution boxes
if (boxContainer) {
    createGithubBoxes();
}

// Smooth scrolling for navigation links
navLinkItems.forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth',
            });
        }

        // Update active nav link
        navLinkItems.forEach((item) => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Mobile menu toggle
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Scroll animations
window.addEventListener('scroll', () => {
    let offsetY = window.scrollY;

    // Add scrolled class to navbar
    if (offsetY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active navigation based on scroll position
    const sections = document.querySelectorAll('div[id]');
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (offsetY >= sectionTop && offsetY < sectionTop + sectionHeight) {
            const currentId = section.getAttribute('id');
            navLinkItems.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Parallax and animation effects
    if (saluteTextContainer) {
        saluteTextContainer.style.transform = `translateY(${offsetY * 0.1}px)`;
    }

    if (saluteImageContainer) {
        saluteImageContainer.style.transform = `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`;
    }

    if (myName && offsetY > 300) {
        myName.style.transform = `translateX(${(offsetY - 900) * 0.4}px)`;
    }

    if (projectsTitle) {
        projectsTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`;
    }

    if (jobTitleContainers.length >= 3) {
        jobTitleContainers[0].style.backgroundPositionY = `${offsetY * 0.5}px`;
        jobTitleContainers[1].style.backgroundPositionY = `${-offsetY * 0.5}px`;
        jobTitleContainers[2].style.backgroundPositionY = `${-offsetY * 0.5}px`;

        if (jobTitles.length >= 2) {
            jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`;
            jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`;
        }
    }

    // Project animations
    const projectsBox = document.querySelector('.projects-box');
    if (projectsBox) {
        const projects = projectsBox.children;

        for (let i = 0; i < projects.length; i++) {
            const project = document.getElementById(`project_${i + 1}`);
            if (!project) continue;

            const projectTop = project.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (projectTop < windowHeight - 400) {
                const laptop = document.getElementById(`proj_${i + 1}`);
                const desc = document.getElementById(`proj_${i + 1}_desc`);

                if (laptop) {
                    laptop.classList.add('animate__animated', 'animate__fadeInLeft');
                }

                if (desc) {
                    desc.classList.add('animate__animated', 'animate__fadeInRight');
                }
            }
        }
    }
});

// Add animation to contact section elements when they come into view
window.addEventListener('load', () => {
    const observerOptions = {
        threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated');

                if (entry.target.classList.contains('contact-title')) {
                    entry.target.classList.add('animate__fadeInDown');
                } else if (entry.target.classList.contains('contact-item')) {
                    entry.target.classList.add('animate__fadeInUp');
                    entry.target.style.animationDelay = `${
                        Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.2
                    }s`;
                } else if (entry.target.classList.contains('social-link')) {
                    entry.target.classList.add('animate__bounceIn');
                    entry.target.style.animationDelay = `${
                        Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.1
                    }s`;
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe contact section elements
    const contactTitle = document.querySelector('.contact-title');
    const contactItems = document.querySelectorAll('.contact-item');
    const socialLinks = document.querySelectorAll('.social-link');

    if (contactTitle) observer.observe(contactTitle);
    contactItems.forEach((item) => observer.observe(item));
    socialLinks.forEach((link) => observer.observe(link));
});

// Preload images for better performance
function preloadImages() {
    const images = [
        './images/person.png',
        './images/laptop.png',
        './images/LaptopApp.png',
        './images/Website_2.png',
        './images/Website_3.png',
        './images/bg1.png',
        './images/bg2.png',
        './images/github.png',
    ];

    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize preloading
preloadImages();
