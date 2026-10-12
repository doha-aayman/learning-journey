/////////////////////////////////////////////////
// selecting , creating and deleting elements

//selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");

const allSections = document.querySelectorAll(".section");
console.log(allSections);

//getElementBy
document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));


// Creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");

// message.textContent = 'We use cookied for improved functionality and analytics.';
// message.innerHTML +=
//   '<button class="btn btn--close-cookie">Got it!</button>';

// message.textContent = 'We use cookies for improved functionality and analytics. ';
// message.insertAdjacentHTML('beforeend', '<button class="btn btn--close-cookie">Got it!</button>');

message.innerHTML = `We use cookies for improved functionality and analytics.
 <button class="btn btn--close-cookie">Got it!</button>`;

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);


// Delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    //  message.remove();
    message.parentElement.removeChild(message);
  });

  
///////////////////////////////////////
// Styles, Attributes and Classes
  
//Stylee
message.style.backgroundColor='#324397';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(message.style.color);

console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message));

message.style.height = Number.parseFloat(getComputedStyle(message).height) +30 +'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered')


// Attributes

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt ='Beautiful minimalist logo';

//Non-standard 
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company' , 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

//classes
// logo.classList.add();
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();

//don't use
console.log(logo.className);
console.log(logo.className ='jonas');




