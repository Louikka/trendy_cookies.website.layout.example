document.querySelector('#app > .intro .action > button').addEventListener('click', () => {

    document.querySelector('#app > .products').scrollIntoView({behavior : 'smooth'});

});


document.querySelectorAll('.header .menu-item > a').forEach((e) => {

    e.addEventListener('click', () => {

        document.querySelector(`#app > .${e.getAttribute('data-link')}`).scrollIntoView({behavior : "smooth"});

    });

});




for (let i = 0; i < productsData.length; i++) {

    const parent = document.querySelector('#app > .products .products-items');

    let item = setProductItem(productsData[i]);

    parent.append(item);

};



const PRODUCT = document.getElementById('input_product');
const NAME = document.getElementById('input_name');
const PHONE = document.getElementById('input_phone');

document.querySelectorAll('#app > .products .products-items .item_detail-extra > button').forEach((e) => {

    e.addEventListener('click', () => {

        document.querySelector('#app > .order').scrollIntoView({behavior : "smooth"});

        PRODUCT.value = e.getAttribute('data-item_title');

    });

});

document.querySelector('#app > .order .inputs > button').addEventListener('click', () => {

    let has_error = false;

    [PRODUCT, NAME, PHONE].forEach((item) => {

        if (!item.value) {

            item.style.borderColor = "red";
            has_error = true;

        } else {

            item.style.borderColor = "white";

        };

    });

    if (!has_error) {

        [PRODUCT, NAME, PHONE].forEach(item => item.value = "");

        alert( "Thank you for your order!" );

    };

});