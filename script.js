const button = document.querySelector(".btn-submit");
const txtName = document.querySelector("#name");
const btnSend = document.querySelector(".btn-send");

const arrayBonnesReponses = [
    ['q1', 'B'],
    ['q2', 'B'],
    ['q3',  'B'],
    ['q4',  'B']
]   

// console.log(arrayBonnesReponses[0])

const regex = /^([a-zA-Z ]){3,30}$/;

function validateName(name) {
    if (name === '')
        alert("le champs nom est vide")

     else if(!regex.test(name))
        console.log(`${name} est un nom invalide ()au moins 3 caractères alphanumériques`)
        
    else{
        button.disabled = true;
        const divQuestions = document.querySelector(".div-name");
        let element = document.createElement("input");
        element.setAttribute("value",name);
        element.setAttribute("type","text");
        divQuestions.prepend(element);
       
    }

}



button.addEventListener("click",() =>{
    //console.log(txtName.value)
    validateName(txtName.value)
})

function getReponsesUser(){
    const radio =[...document.querySelectorAll('input[type=radio]:checked')]
    if(radio.length < 4)
    {
        alert("vous n'avez pas repondu à toutes les questions ")
        return false;
    }
    const newArray = radio.map(item => [item.name,item.value])
    console.log(newArray)

    return newArray;
}

function calculScore(reponseUser){
    let score = 0
    for (let i = 0; i < reponseUser.length;i++)
    {
        if(JSON.stringify(reponseUser[i]) == JSON.stringify(arrayBonnesReponses[i]))
            score = score +25
    }
        
   
    //console.log(score)
    return score
}

btnSend.addEventListener("click",() =>{

    let reponses = getReponsesUser()
    let score = calculScore(reponses)
    const divResult = document.querySelector(".result");
    let element = document.createElement("p");
    element.innerHTML = `you got <strong> ${score} % </strong>  of score`;
    divResult.prepend(element);
    window.scrollTo({top:0,behaviour:'smooth'})
})

