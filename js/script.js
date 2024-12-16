const product = [
	{ name: 'T-shirt', price: 2000, category: 'Одежда' },
	{ name: 'Ring', price: 30000, category: 'Аксессуары' },
	{ name: 'Phone', price: 110000, category: 'Электроника' },
	{ name: 'Socks', price: 200, category: 'Одежда' },
	{ name: 'Bracelet', price: 12000, category: 'Аксессуары' },
	{ name: 'Headphones', price: 10000, category: 'Электроника' },
];

const sortAsc = document.getElementById('sortAsc');
const sortDesc = document.getElementById('sortDesc');
const resetFilters = document.getElementById('resetFilters');

const productList = document.getElementById('productList');

const radioButton = document.querySelectorAll('input[type="radio"]');

productList.innnerHTML = "";


product.forEach(product => {
	const li = document.createElement('li');
	li.innerHTML = `
		<string>${product.name}</string>
		<p>Price: ${product.price}.rub</p>
		<p>Category: ${product.category}</p>
	`;
	productList.appendChild(li);
})

// const clothe = product.filter(product => product.category === 'Одежда');
// console.log(clothe);


