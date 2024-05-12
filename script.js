// script.js

const cartButton = document.getElementById('cartButton');
const cartDropdown = document.getElementById('cartDropdown');

// Toggle cart visibility
cartButton.addEventListener('click', () => {
    cartDropdown.classList.toggle('hidden');
});