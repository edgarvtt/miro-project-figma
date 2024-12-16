/*primeiro tem que selecionar os elementos em forma de array*/
const tabMenuBuilt = document.querySelectorAll('.js-built-menu li a');
const tabContentBuilt = document.querySelectorAll('.js-built-text section');


function ativarBuilt(index){

    tabMenuBuilt.forEach((i) => {

        i.classList.remove('active-built');

    })

    tabMenuBuilt[index].classList.add('active-built');

}

function ativarTextBuilt(index){

    tabContentBuilt.forEach((i) => {

        i.classList.remove('ativar-texto-built');

    })

    tabContentBuilt[index].classList.add('ativar-texto-built');

}


tabMenuBuilt.forEach((item,i) => {

    item.addEventListener('click',function(){
        ativarBuilt(i);
        ativarTextBuilt(i);
    });

})
