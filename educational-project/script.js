const x = [{
	'id': '1',
	'title': 'Картина Осень',
	'src': 'img/1.jpg',
	'price': '235'
}, {
	'id': '2',
	'title': 'Картина Лето',
	'src': 'img/2.jpg',
	'price': '356'
}, {
	'id': '3',
	'title': 'Картина Зима',
	'src': 'img/3.jpg',
	'price': '574'
}, {
	'id': '4',
	'title': 'Картина Весна',
	'src': 'img/4.jpg',
	'price': '456'
}, ];
const products = JSON.parse(JSON.stringify(x));

// ====== Добавление карточек товара на страницу используя данные массива
for (const elem of products) {
	let card = document.createElement('div');
	card.classList.add('cardProduct');
	let img = document.createElement('img');
	img.src = elem.src;
	let title = document.createElement('h2');
	title.textContent = elem.title;
	let price = document.createElement('p');
	price.textContent = `${elem.price} р.`;
	let button = document.createElement('button');
	button.classList.add('cardButton');
	button.textContent = `Купить`;

	card.append(img, title, price, button);
	category.append(card);
}

// ====== Добавление товара в корзину и формирование массива заказов
let order = [];
let buttons = document.querySelectorAll('.cardButton');
buttons.forEach((elem, i) => {
	elem.addEventListener('click', function() {
		let orderItem = document.createElement('li');
		orderItem.textContent = `${products[i].price} р. ${products[i].title}`;
		order.push(products[i].title);
		selectProduct.append(orderItem);
	});
});

// ====== отправление заказа и очистка корзины
subm.addEventListener('click', function(e) {
	e.preventDefault();
	console.log(order);
	order = [];
	selectProduct.innerHTML = '';
});