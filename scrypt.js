let add = document.querySelector('.knopkaAdd');
let del = document.querySelector('.deleteButton');

add.addEventListener('click', (event) => {
    let newDo = document.createElement('li');
    newDo.innerHTML = `<form class="formText"><input class="do" type="text"><button type="button" class="buttonDelete">x</button>`;
    document.querySelector('menu').append(newDo);
    delElementsDoList();
});

function delElementsDoList() {
    let buttonDel = document.querySelectorAll('.buttonDelete');
    buttonDel.forEach((el) => {
        el.addEventListener('click', (event) => {
            event.preventDefault();
            event.target.parentElement.remove();
        });
    });
};

let arr = [];
let buttonSort = document.querySelector('.grayB');

let flag = true;
buttonSort.addEventListener('click', (event) => {
    buttonSort.classList.remove('grayB');
    buttonSort.classList.add('grayBsort');
    if(flag === true){
        let doArray = document.querySelectorAll('.do');
        arr = Array.from(menuArray);
        arr.sort((a,b) => {
            if(a.value > b.value) {
                return 1;
            } else if (a.value < b.value) {
                return -1;
            } return 0;
        });
        let menu = document.querySelector('.menu');
        arr.forEach((el) => {
            menu.appendChild(el.parentElement);
        });
        flag = false;
    } else if (flag === false) {
        buttonSort.classList.remove('grayBsort');
        buttonSort.classList.add('grayB');
        let arr2 = [];
        let do2 = document.querySelectorAll('.do');
        arr2.sort((a,b) => {
            if(a.value > b.value) {
                return -1;
            } else if (a.value < b.value) {
                return 1;
            } return 0;
        });
        let menu2 = document.querySelector('.menu');
        menu2.forEach((el) => {
            menu2.appendChild(el.parentElement);
        });
        flag = true;
    }
});