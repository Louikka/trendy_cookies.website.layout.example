document.querySelectorAll('.header .menu a').forEach((e) => {
    e.addEventListener('click', () => {

        document.querySelector(`#app > .${e.getAttribute('data-link')}`).scrollIntoView({behavior : 'smooth'});

    });
});

document.querySelector('#app > .intro .action > button').addEventListener('click', () => {

    document.querySelector('#app > .products').scrollIntoView({behavior : 'smooth'});

});



function setProductItem(data: typeof PRODUCTS_DATA[any]) {

    let s = `
        <div class="item">
            <div class="item_image"> <img src="./assets/${data.image}" alt="product_item_image"> </div>
            <div class="item_detail">
                <div class="title">${data.title}</div>
                <div class="text">${data.text}</div>
                <div class="extra">
                    <div>
                        <div class="price">${data.price}</div>
                        <div class="weight">${data.weight}</div>
                    </div>
                    <button class="violet" data-item_title="${data.title}">Order</button>
                </div>
            </div>
        </div>
    `;

    return s;

};

for (let i = 0; i < PRODUCTS_DATA.length; i++) {

    let item = setProductItem(PRODUCTS_DATA[i]);

    document.querySelector('#app > .products .products_items').insertAdjacentHTML('beforeend', item);

};



const INPUT_PRODUCT = <HTMLInputElement> document.getElementById('input_product');
const INPUT_NAME = <HTMLInputElement> document.getElementById('input_name');
const INPUT_PHONE = <HTMLInputElement> document.getElementById('input_phone');

document.querySelectorAll('#app > .products .products_items .extra > button').forEach((e) => {
    e.addEventListener('click', () => {

        document.querySelector('#app > .order').scrollIntoView({behavior : 'smooth'});

        INPUT_PRODUCT.value = e.getAttribute('data-item_title');

    });
});

document.querySelector('#app > .order .form .inputs > button').addEventListener('click', () => {

    let has_error = false;

    [INPUT_PRODUCT, INPUT_NAME, INPUT_PHONE].forEach((item) => {

        if (!item.value) {

            item.style.borderColor = 'red';
            has_error = true;

        } else {

            item.style.borderColor = 'white';

        };

    });

    if (!has_error) {

        [INPUT_PRODUCT, INPUT_NAME, INPUT_PHONE].forEach(item => item.value = '');

        alert('Thank you for your order!');

    };

});