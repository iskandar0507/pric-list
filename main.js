let addBtn = document.querySelector('.addBtn');
let name = document.getElementById('name');
let price = document.getElementById('price');
let quantity = document.getElementById('quantity');
let Tbody = document.querySelector('tbody');
let i = 1;

addBtn.addEventListener('click', list);
summa();

function list() {
    if (name.value == '' || price.value == '' || quantity.value == '') {
        alert('formani to\'liq to\'ldiring ');
    } else {
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        td5.classList.add('sum');
        let td6 = document.createElement('td');
        td6.classList.add('delete')
        let tr = document.createElement('tr');

        td1.innerHTML = i;
        td2.innerHTML = name.value;
        td3.innerHTML = price.value;
        td4.innerHTML = quantity.value;
        td5.innerHTML = price.value * quantity.value;
        td6.innerHTML = 'delete';
        tr.append(td1, td2, td3, td4, td5, td6);
        Tbody.append(tr);
        summa();
        deleteTable();
        ++i;

        name.value = '';
        price.value = '';
        quantity.value = '';
        name.focus();
    }

}
function summa() {
    let count = 0;
    let sum = document.querySelectorAll('.sum');
    let strong = document.querySelector('strong');
    sum.forEach(data => {
        count += +data.innerHTML;
    });
    strong.innerHTML = count;
    
}

function deleteTable() {
    let dels = document.querySelectorAll('.delete');
    dels.forEach(del => {
        del.addEventListener('click', () => {
            del.parentElement.remove();
            summa();
        });
    });
}

