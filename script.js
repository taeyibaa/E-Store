async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-gray-50 relative mb-0 shadow-lg rounded-md h-auto overflow-hidden transition-transform transform hover:scale-105';

        productCard.innerHTML = `
            <div class="bg-gray-50 relative mb-0 shadow-lg rounded-md h-auto overflow-hidden transition-transform transform hover:scale-105">
    <div class="relative">
        <img id="product-image" src="${product.image}" alt="${product.title}" class="w-full h-80 object-cover">
        <button id="cart-button" class="absolute top-2 right-2 bg-gray-50 rounded-full p-2 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.2 5H18m0 0l1.1-5H7m0 0h11" />
            </svg>
        </button>
    </div>
    <div class="p-4">
        <a id="product-title" href="#" class="text-lg hover:underline hover:text-blue-gray-700">${product.title}</a>
        <p id="product-description" class="text-gray-600 truncate text-sm mt-2 mb-4">${product.description}</p>
        <div class="flex items-center gap-x-4 mt-2">
            <p id="product-price" class="text-red-500 font-bold">$${product.price.toFixed(2)}</p>
            <div class="flex items-center gap-x-2">
                <div class="flex items-center text-yellow-500">
                    <span id="product-rating" class="ml-2 text-yellow-500">${product.rating.rate}</span>
                </div>
                <span class="text-gray-500">|</span>
                <span id="product-sold" class="text-gray-600">(Sold: ${product.rating.count})</span>
            </div>
        </div>
    </div>
</div>

            
            
        `;

        productGrid.appendChild(productCard);
    });
}

fetchProducts();


//modal
document.addEventListener('DOMContentLoaded', () => {
    const openSignupModalButton = document.getElementById('open-signup-modal');
    const closeSignupModalButton = document.getElementById('close-signup-modal');
    const openSigninModalButton = document.getElementById('open-signin-modal');
    const closeSigninModalButton = document.getElementById('close-signin-modal');
    const signupModalContent = document.getElementById('signup-modal-content');
    const signinModalContent = document.getElementById('signin-modal-content');
    const modalOverlay = document.getElementById('modal-overlay');

    function showModal(modal) {
        modalOverlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    }

    function hideModals() {
        modalOverlay.classList.add('hidden');
        signupModalContent.classList.add('hidden');
        signinModalContent.classList.add('hidden');
    }

    openSignupModalButton.addEventListener('click', (e) => {
        e.preventDefault();
        showModal(signupModalContent);
    });

    closeSignupModalButton.addEventListener('click', (e) => {
        e.preventDefault();
        hideModals();
    });

    openSigninModalButton.addEventListener('click', (e) => {
        e.preventDefault();
        hideModals();
        showModal(signinModalContent);
    });

    closeSigninModalButton.addEventListener('click', (e) => {
        e.preventDefault();
        hideModals();
    });

    modalOverlay.addEventListener('click', () => {
        hideModals();
    });
});

