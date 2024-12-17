const tabMenuTeams = document.querySelectorAll('.js-tab-teams li');
const tabContent = document.querySelectorAll('.js-content-teams section');

function ativarTab(index){

    tabMenuTeams.forEach((i) => {

        i.classList.remove('active-tab-teams');    
    
    })

    tabMenuTeams[index].classList.add('active-tab-teams');



}
