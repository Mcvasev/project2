let add = document.querySelector('.knopkaAdd');
let doArea = document.querySelector('.doArea');

add.addEventListener('click', () => {
    let newDo = document.createElement('li');
    newDo.innerHTML = `<li class="table"><input class="doArea" type="text"><button type="button" class="buttonDelete">x</button>`;
    document.querySelector('.menu').append(newDo);
    delElementsDoList();
});

function delElementsDoList() {
    let buttonDel = document.querySelectorAll('.buttonDelete');
    console.log(buttonDel);
    buttonDel.forEach((el) => {
        el.addEventListener('click', (event) => {
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
        let doArray = document.querySelectorAll('.doArea');
        arr = Array.from(doArray);
        console.log(arr);
        arr.sort((a,b) => {
            if (a.value > b.value) {
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
        let doArea2 = document.querySelectorAll('.doArea');
        arr2 = Array.from(doArea2);
        arr2.sort((a,b) => {
            if (a.value > b.value) {
                return -1;
            } else if (a.value < b.value) {
                return 1;
            } return 0;
        });
        let menu2 = document.querySelector('.menu');
        arr2.forEach((el) => {
            menu2.appendChild(el.parentElement);
        });
        flag = true;
    }
});