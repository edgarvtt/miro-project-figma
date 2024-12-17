/*criando arrays manipulaveis*/

const tabMenuTeams = document.querySelectorAll('.js-tab-teams li');
const tabContent = document.querySelectorAll('.js-content-teams section');

/*tornando ativa no site ao carregar*/
tabContent[0].classList.add('active-content-teams');
tabMenuTeams[0].classList.add('active-tab-teams');

function ativarTabTeams(index){

    tabMenuTeams.forEach((i) => {

        i.classList.remove('active-tab-teams');    
    
    })

    tabMenuTeams[index].classList.add('active-tab-teams');
}

function ativarContentTeams(index){

    tabContent.forEach(i => {
        i.classList.remove('active-content-teams');
    });

    tabContent[index].classList.add('active-content-teams');

}


/* adicionar ao clique */

tabMenuTeams.forEach((item,i) => {

    item.addEventListener('click',function(){

        ativarTabTeams(i);
        ativarContentTeams(i);

    })

})