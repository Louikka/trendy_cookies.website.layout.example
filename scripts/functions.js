function setProductItem(data) {

    let item = document.createElement('div');
    item.classList.add('item');

        let item_image = document.createElement('div');
        item_image.classList.add('item_image');

            let img = document.createElement('img');
            img.src = `./images/${data['image']}`;
            img.alt = 'product_item_image';

        item_image.append(img);


        let item_detail = document.createElement('div');
        item_detail.classList.add('item_detail');

            let item_detail_title = document.createElement('div');
            item_detail_title.classList.add('item_detail-title');
            item_detail_title.innerHTML = data['title'];

            let item_detail_text = document.createElement('div');
            item_detail_text.classList.add('item_detail-text');
            item_detail_text.innerHTML = data['text'];

            let item_detail_extra = document.createElement('div');
            item_detail_extra.classList.add('item_detail-extra');

                let wrapper = document.createElement('div');
                
                    let price = document.createElement('div');
                    price.classList.add('price');
                    price.innerHTML = data['price'];

                    let weight = document.createElement('div');
                    weight.classList.add('weight');
                    weight.innerHTML = data['weight'];

                wrapper.append(price, weight);

                let button = document.createElement('button');
                button.classList.add('violet');
                button.setAttribute('data-item_title', data['title']);
                button.innerHTML = "Order";

            item_detail_extra.append(wrapper, button);

        item_detail.append(item_detail_title, item_detail_text, item_detail_extra);

    item.append(item_image, item_detail);

    return item;

};