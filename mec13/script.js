const data = [
    { name: 'Bread Basket', description: 'Assortment of fresh baked fruit breads and muffins 5.90', price: '5.90', image: 'https://media.istockphoto.com/id/517275318/photo/wicker-basket-with-assorted-baking-products-isolated-on-white.jpg?s=612x612&w=0&k=20&c=ddr5LUqjFluLfFV_gX1sB1Hiz4X6-SJwC3HrgKSF2bw=' },
    { name: 'Belgian Waffle', description: 'Vanilla flavored batter with malted flour 7.50', price: '7.50', image: 'https://media.istockphoto.com/id/185266029/photo/waffles-with-fruit-and-maple-syrup-on-a-marble-counter.jpg?s=612x612&w=0&k=20&c=YkBBzuSLisdHiECgS_NHN6gOyOMN6exADFk-RIlfKtI=' },
    { name: 'Bread Basket', description: 'Assortment of fresh baked fruit breads and muffins 5.90', price: '5.90', image: 'https://www.allrecipes.com/thmb/_tlTl7zfu2mCZzzuf9r8WOW-31U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/256007-best-scrambled-eggs-ddmfs-3X4-0031-ff526aac78f24031a5f947a546918a39.jpg' },
    { name: 'Bread Basket', description: 'Assortment of fresh baked fruit breads and muffins 5.90', price: '5.90', image: 'https://media.istockphoto.com/id/517275318/photo/wicker-basket-with-assorted-baking-products-isolated-on-white.jpg?s=612x612&w=0&k=20&c=ddr5LUqjFluLfFV_gX1sB1Hiz4X6-SJwC3HrgKSF2bw=' },
    { name: 'Belgian Waffle', description: 'Vanilla flavored batter with malted flour 7.50', price: '7.50', image: 'https://media.istockphoto.com/id/185266029/photo/waffles-with-fruit-and-maple-syrup-on-a-marble-counter.jpg?s=612x612&w=0&k=20&c=YkBBzuSLisdHiECgS_NHN6gOyOMN6exADFk-RIlfKtI=' },
    { name: 'Scrambled eggs', description: 'Scrambled eggs, roasted red pepper and garlic, with green onions 7.30', price: '7.30', image: 'https://www.allrecipes.com/thmb/_tlTl7zfu2mCZzzuf9r8WOW-31U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/256007-best-scrambled-eggs-ddmfs-3X4-0031-ff526aac78f24031a5f947a546918a39.jpg' }
];

function createCard(item) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = item.image;
    card.appendChild(img);

    const name = document.createElement('h3');
    name.textContent = item.name;
    card.appendChild(name);

    const description = document.createElement('p');
    description.textContent = item.description;
    card.appendChild(description);

    const price = document.createElement('p');
    price.textContent = `$${item.price}`;
    card.appendChild(price);

    const button = document.createElement('button');
    button.textContent = 'Buy';
    card.appendChild(button);

    return card;
}

function loadCards() {
    const container = document.getElementById('card-container');
    data.forEach(item => {
        const card = createCard(item);
        container.appendChild(card);
    });
}

window.onload = loadCards;
