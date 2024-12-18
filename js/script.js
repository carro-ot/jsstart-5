const products = [
	{ name: 'T-shirt', price: 2000, category: 'Одежда' },
	{ name: 'Ring', price: 30000, category: 'Аксессуары' },
	{ name: 'Phone', price: 110000, category: 'Электроника' },
	{ name: 'Socks', price: 200, category: 'Одежда' },
	{ name: 'Bracelet', price: 12000, category: 'Аксессуары' },
	{ name: 'Headphones', price: 10000, category: 'Электроника' },
];

const productList = document.getElementById('productList');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const resetButton = document.getElementById('resetFilters');
const radioButtons = document.querySelectorAll('input[type="radio"]');


function renderProducts(filteredProducts) {

	productList.innerHTML = '';


 
	 filteredProducts.forEach(product => {
		const li = document.createElement('li');
		li.innerHTML = `
			<h3>${product.name}</h3>
			<p>Цена:${product.price}</p>
			<p>Категория:${product.category}</p>
		`;
		productList.appendChild(li);
	});
}

function filterProducts() {
	const selectedCategory = document.querySelector('input[type="radio"]:checked');
	const category = selectedCategory ? selectedCategory.value : null;
	const maxPrice = parseInt(priceRange.value, 10);
	

const filteredProducts = products.filter(product => {
	return (
		(!category || product.category === category) &&
		product.price <= maxPrice
	);
});
	
	renderProducts(filteredProducts);
}

	radioButtons.forEach(button => {
		button.addEventListener('change', () => {
			filterProducts();
		});
	});


priceRange.addEventListener('input', () => {
	priceValue.textContent = priceRange.value;
	filterProducts();
});

filterProducts();

