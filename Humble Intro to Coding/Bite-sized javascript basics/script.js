// script.js
// 1. Select
let sign = document.getElementById('sign');

// 2. Modify
console.log('BEFORE:', sign.textContent);
sign.textContent = 'Welcome, travelers!';
console.log('AFTER:', sign.textContent);

// modify
sign.innerHTML = sign.innerHTML + "<p>hello</p>"

// 3. change style
sign.style.color = 'blue';