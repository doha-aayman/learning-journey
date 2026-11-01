const allButtons = document.getElementsByTagName("button");
const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const h1 = document.querySelector('h1');
const logo = document.querySelector('.nav__logo');
const link = document.querySelector('.nav__link--btn');

// /////////////////////////////////////////////////
// // selecting , creating and deleting elements

// //selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);


// document.getElementById("section--1");
// console.log(allSections);

// //getElementBy
// console.log(allButtons);

// console.log(document.getElementsByClassName("btn"));

// // Creating and inserting elements
// const message = document.createElement("div");
// message.classList.add("cookie-message");

// // message.textContent = 'We use cookied for improved functionality and analytics.';
// // message.innerHTML +=
// //   '<button class="btn btn--close-cookie">Got it!</button>';

// // message.textContent = 'We use cookies for improved functionality and analytics. ';
// // message.insertAdjacentHTML('beforeend', '<button class="btn btn--close-cookie">Got it!</button>');

// message.innerHTML = `We use cookies for improved functionality and analytics.
//  <button class="btn btn--close-cookie">Got it!</button>`;

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // Delete elements
// document
//   .querySelector(".btn--close-cookie")
//   .addEventListener("click", function () {
//     //  message.remove();
//     message.parentElement.removeChild(message);
//   });

// ///////////////////////////////////////
// // Styles, Attributes and Classes

// //Stylee
// message.style.backgroundColor='#324397';
// message.style.width = '120%';

// console.log(message.style.backgroundColor);
// console.log(message.style.color);

// console.log(getComputedStyle(message).color);
// // console.log(getComputedStyle(message));

// message.style.height = Number.parseFloat(getComputedStyle(message).height) +30 +'px';

// // document.documentElement.style.setProperty('--color-primary', 'orangered')

// // Attributes

// console.log(logo.alt);
// console.log(logo.className);

// logo.alt ='Beautiful minimalist logo';

// //Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company' , 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes
// console.log(logo.dataset.versionNumber);

// //classes
// // logo.classList.add();
// // logo.classList.remove();
// // logo.classList.toggle();
// // logo.classList.contains();

// //don't use
// console.log(logo.className);
// console.log(logo.className ='jonas');


//


// btnScrollTo.addEventListener("click", function (e) {
//   console.log(section1.getBoundingClientRect());
//   console.log(window.pageYOffset, pageXOffset);

//   console.log(
//    'height / width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth,
//   );
// });


// const alertH1 = function(e){
//   alert('addEventListener : Great! it work');
// h1.removeEventListener('mouseenter' , alertH1);
// }

//events 
// h1.addEventListener('mouseenter' , function(e){
//   alert('addEventListener : Great! it work');
// // })

// h1.addEventListener('mouseenter' , alertH1)

// h1.onmouseenter = (function(e){
//   alert('onmouseen : Great! it work');});


// const randomInt = (min , max) => Math.floor(Math.random()*(max-min+1)+min);
// const randomColor =() => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;


// //bubbling and capturing
// document.querySelector('.nav__link').addEventListener('click' , function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('Link' , e.target , e.currentTarget);
//   console.log(e.currentTarget === this);

//   // e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click' , function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('container' , e.target , e.currentTarget);
//   console.log(e.currentTarget === this);
// });

// document.querySelector('.nav').addEventListener('click' , function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('nav' , e.target , e.currentTarget);
//   console.log(e.currentTarget === this);
// },true);

////////////////////////////////////////////////////////////////
//going downwards: child

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = 'white'; 
h1.lastElementChild.style.color = 'orangered'; 

//going upwards: parents
console.log((h1.parentNode));
console.log((h1.parentElement));

h1.closest('.header').style.background = 'var(--color-secondary-opacity)';
h1.closest('h1').style.background = 'var(--color-secondary-opacity)';

// going sideways: sibings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
































