const selectedList = document.querySelector('.selected-list');
const totalPriceElement = document.getElementById('total-price');
const checkboxes = document.querySelectorAll('.chocolate-checkbox');


let selectedChocolates = [];
let totalPrice = 0;
let count = 0;


const updateTotalPrice = () => {
    selectedChocolates = [];
    totalPrice = 0;
    count = 0;


    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const name = checkbox.getAttribute('data-name');
            const price = parseFloat(checkbox.getAttribute('data-price'));

            if (count < 8) {
                count += 1;
                totalPrice += price;
                selectedChocolates.push(`${count}` + "->" + name);
            } else {
                checkbox.checked = false;
                alert("Your Cart is Full");
                return;
            }


        }
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);
    displaySelectedChocolates();
};


const displaySelectedChocolates = () => {
    selectedList.innerHTML = '';
    selectedChocolates.forEach(chocolate => {
        const listItem = document.createElement('li');
        listItem.textContent = chocolate;
        selectedList.appendChild(listItem);
    });
};


checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateTotalPrice);
});