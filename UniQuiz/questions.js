const geral = [
    {
        q: 'Em que mes eu nasci?',
        options: ['janeiro', 'abril', 'setembro', 'dezembro'],
        answer: 'abril'
    },
    {
        q: 'Arte 5?',
        options: ['5', 'Russia', 'USA', 'Italia'],
        answer: '5'
    },
    {
        q: 'Em que ano eu nasci?',
        options: ['2000', '2001', '2002', '2003'],
        answer: '2002'
    },
    {
        q: 'Em que estado eu nasci?',
        options: ['CE', 'MG', 'AM', 'BA'],
        answer: 'MG'
    },
    {
        q: 'Qual país eu nasci?',
        options: ['Brasil', 'Russia', 'USA', 'Italia'],
        answer: 'Brasil'
    },
    {
        q: 'Quanto é 1+1?',
        options: ['janeiro', '2', 'setembro', 'dezembro'],
        answer: '2'
    },
    {
        q: 'Quanto é 2+2?',
        options: ['15', '16', '18', '4'],
        answer: '4'
    },
    {
        q: 'Quanto é 3+3?',
        options: ['2000', '2001', '6', '2003'],
        answer: '6'
    },
    {
        q: 'Quanto é 4+4?',
        options: ['CE', '8', 'AM', 'BA'],
        answer: '8'
    },
    {
        q: 'Quanto é 5+5?',
        options: ['10', 'Russia', 'USA', 'Italia'],
        answer: '10'
    },
    {
        q: 'Arte 1?',
        options: ['janeiro', '1', 'setembro', 'dezembro'],
        answer: '1'
    },
    {
        q: 'Arte 2?',
        options: ['15', '16', '18', '2'],
        answer: '2'
    },
    {
        q: 'Arte 3?',
        options: ['2000', '2001', '3', '2003'],
        answer: '3'
    },
    {
        q: 'Arte 4?',
        options: ['CE', '4', 'AM', 'BA'],
        answer: '4'
    },
    {
        q: 'Arte 5?',
        options: ['5', 'Russia', 'USA', 'Italia'],
        answer: '5'
    },
]






const ronald = [
    {
        q: 'Em que mes eu nasci?',
        options: ['janeiro', 'abril', 'setembro', 'dezembro'],
        answer: 'abril'
    },
    {
        q: 'Em que dia eu nasci?',
        options: ['15', '16', '18', '19'],
        answer: '19'
    },
    {
        q: 'Em que ano eu nasci?',
        options: ['2000', '2001', '2002', '2003'],
        answer: '2002'
    },
    {
        q: 'Em que estado eu nasci?',
        options: ['CE', 'MG', 'AM', 'BA'],
        answer: 'MG'
    },
    {
        q: 'Qual país eu nasci?',
        options: ['Brasil', 'Russia', 'USA', 'Italia'],
        answer: 'Brasil'
    },

    {
        q: 'Ronald E Viado?',
        options: ['Sim', 'Sim', 'MUITO', 'DEMAIS'],
        answer: 'DEMAIS'
    },
    
]

const matematica = [
    {
        q: 'Quanto é 1+1?',
        options: ['janeiro', '2', 'setembro', 'dezembro'],
        answer: '2'
    },
    {
        q: 'Quanto é 2+2?',
        options: ['15', '16', '18', '4'],
        answer: '4'
    },
    {
        q: 'Quanto é 3+3?',
        options: ['2000', '2001', '6', '2003'],
        answer: '6'
    },
    {
        q: 'Quanto é 4+4?',
        options: ['CE', '8', 'AM', 'BA'],
        answer: '8'
    },
    {
        q: 'Quanto é 5+5?',
        options: ['10', 'Russia', 'USA', 'Italia'],
        answer: '10'
    },
    {
        q: 'Arte 4?',
        options: ['CE', '4', 'AM', 'BA'],
        answer: '4'
    },
    {
        q: 'Arte 5?',
        options: ['5', 'Russia', 'USA', 'Italia'],
        answer: '5'
    },
]

const arte = [
    {
        q: 'Arte 1?',
        options: ['janeiro', '1', 'setembro', 'dezembro'],
        answer: '1'
    },
    {
        q: 'Arte 2?',
        options: ['15', '16', '18', '2'],
        answer: '2'
    },
    {
        q: 'Arte 3?',
        options: ['2000', '2001', '3', '2003'],
        answer: '3'
    },
    {
        q: 'Arte 4?',
        options: ['CE', '4', 'AM', 'BA'],
        answer: '4'
    },
    {
        q: 'Arte 5?',
        options: ['5', 'Russia', 'USA', 'Italia'],
        answer: '5'
    },
]


// ------------------------------------------------------------------------------------------------



function getSelectedValue(){
    var selectedValue = document.getElementById("list").value;
    console.log(selectedValue);

    if(selectedValue === "matematica"){
        quiz = matematica;
        console.log("ok mat");
    }else if(selectedValue === "ronald"){
        quiz = ronald;
        console.log("ok ron");
    }else if(selectedValue === "arte"){
        quiz = arte;
        console.log("ok arte");
    }else if(selectedValue === "geral"){
        quiz = geral;
        console.log("ok geral");
        questionCounter ++;
        
    }

    setAvailableQuestions();
    getNewQuestion();
}

const questionNumber = document.getElementById("question-numbers");
const questionText = document.getElementById("question-text");
const questionContainer = document.getElementById("question-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];

function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestions.push(quiz[i])
    }
}

function getNewQuestion() {
    document.getElementById("question-numbers").innerText = "Questão " + (questionCounter) + " de " + 5;

    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex;
    document.getElementById("question-text").innerText = currentQuestion.q;

    const index1 = availableQuestions.indexOf(questionIndex);

    availableQuestions.splice(index1, 1);

    const optionLen = currentQuestion.options.length;
    for (let i = 0; i < optionLen; i++) {
        availableOptions.push(i);
    }

    for (let i = 0; i <= 3; i++) {
        document.getElementById(`${i + 1}`).innerText = currentQuestion.options[i];
    }

    questionCounter++;

    if(questionCounter > 6){
        quizOver();
    }
}



var acerto = 0;
var erro = 0;
var bola = 1

function getResult(x) {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`${i}`).style.pointerEvents = "none";
    }

    var newId = parseInt(x);
    var resposta = currentQuestion.options[newId - 1];

    if (resposta === currentQuestion.answer) {
        document.getElementById(`${newId}`).style.background = "green"
        document.getElementById(`bola${bola}`).style.background = "green"
        bola++
        acerto++

    } else {
        document.getElementById(`${newId}`).style.background = "red"
        document.getElementById(`bola${bola}`).style.background = "red"
        bola++
        erro++
    }
}

function quizOver() {
    //barra de xp
    var xpat = localStorage.getItem("XPatual");
    var xp = acerto * 20;
    var newexp = xpat+xp
    localStorage.setItem("XPP", xp);
    localStorage.setItem("XPPA", newexp);
    
    if(xp >= 100){
        document.getElementById("xpbar2").style.width = `${(newexp - 100)}%`;
    } else{
        document.getElementById("xpbar2").style.width = `${(xp)}%`;
    }
    

    // mostrar stats
    document.getElementById("display").style.display = "none"
    document.getElementById("result-box").style.display = "block"

    //end game stats
    document.getElementById("acertosQjs").innerText = acerto;
    document.getElementById("errosQjs").innerText = erro;
    var porcentagem = acerto * 20;
    document.getElementById("porcentagemQjs").innerText = porcentagem + "%";
    document.getElementById("xpQjs").innerText = xp;
    document.getElementById("xpMbar").innerText = "";

    //profile
    if (localStorage.getItem("Quantidade de Acertos")) {
        var antigaQ = parseInt(localStorage.getItem("Quantidade de Acertos"));
        localStorage.setItem('Quantidade de Acertos', (antigaQ + acerto)); 
    }
    else {
        localStorage.setItem("Quantidade de Acertos", acerto);
    }

    if (localStorage.getItem("XPatual")) {
        var antigaXP = parseInt(localStorage.getItem("XPatual"));
        localStorage.setItem("XPatual", (antigaXP + xp));  
        document.getElementById("XPatual").innerText = parseInt(localStorage.getItem("XPatual"));  
    }
    else {    
        localStorage.setItem("XPatual", xp);
        document.getElementById("XPatual").innerText = parseInt(localStorage.getItem("XPatual"));
    }


    if (localStorage.getItem("Quantidade de Quiz")  ) {
        var antigaQuiz = parseInt(localStorage.getItem("Quantidade de Quiz"));
        localStorage.setItem('Quantidade de Quiz', (antigaQuiz + 1));
    }
    else {
        localStorage.setItem("Quantidade de Quiz", "1");
    }


    if (localStorage.getItem("Nivel")  ) {
        var nivel = parseInt(localStorage.getItem("Nivel"));
        localStorage.setItem("Nivel", (nivel + 1));
    }
    else {
        localStorage.setItem("Nivel", 0);
    }

    var nivel = 0;
    localStorage.setItem("Nivel", nivel+1);

    document.getElementById("Qa").innerText = parseInt(localStorage.getItem("Quantidade de Acertos"));
    document.getElementById("Qc").innerText = parseInt(localStorage.getItem("Quantidade de Quiz"));
    document.getElementById("XPatual").innerText = parseInt(localStorage.getItem("XPatual"));
    document.getElementById("nivel").innerText = parseInt(localStorage.getItem("Nivel"));



    document.getElementById("divgrande2").style.display = "none";

}

function next() {
    if (questionCounter === quiz.length) {
        console.log("quiz over");
        quizOver();
    }
    else {
        getNewQuestion();
    }

    for (let i = 1; i < 5; i++) {
        document.getElementById(`${i}`).style.background = "#cccccc";
        document.getElementById(`${i}`).style.pointerEvents = "all";
    }
}

window.onload = function () {
    
    if (!localStorage.getItem("Quantidade de Quiz")){
        document.getElementById("Qc").innerText = "0";
        document.getElementById("Qa").innerText = '0';
        document.getElementById("XPatual").innerText = '0';
        document.getElementById("nivel").innerText = '- 0';
    }
    else{
        document.getElementById("Qc").innerText = parseInt(localStorage.getItem("Quantidade de Quiz"));
        document.getElementById("Qa").innerText = parseInt(localStorage.getItem("Quantidade de Acertos"));
        document.getElementById("xpbar2").style.width = `${parseInt(localStorage.getItem("XPBA"))-100}%`;
        document.getElementById("XPatual").innerText = parseInt(localStorage.getItem("XPatual"));
        document.getElementById("nivel").innerText = parseInt(localStorage.getItem("Nivel"));

        if(parseInt(localStorage.getItem("XPP")) >= 100){
            document.getElementById("xpbar2").style.width = `${((localStorage.getItem("XPPA")))}%`;
        } else{
            document.getElementById("xpbar2").style.width = `${((localStorage.getItem("XPP")))}%`;
        }
    }
//*************MODAIS*************//
    function iniciaModal(modalID) {
        const modal = document.getElementById(modalID);
        if(modal) {
    
            modal.classList.add('mostrar');
            modal.addEventListener('click', (e) => {
                if(e.target.id == modalID || e.target.className == 'fechar') {
                    modal.classList.remove('mostrar');
                }
            });
        }
    }
    
    const donationconst = document.getElementById("donation");
    donationconst.addEventListener('click', function() {
        iniciaModal('modal-donation');
    });

    //**********MODAL CONTATO************//

    function iniciaModal(modalID) {
        const modal = document.getElementById(modalID);
        if(modal) {
    
            modal.classList.add('mostrar');
            modal.addEventListener('click', (e) => {
                if(e.target.id == modalID || e.target.className == 'fechar') {
                    modal.classList.remove('mostrar');
                }
            });
        }
    }
    
    const contatoconst = document.getElementById("contato");
    contatoconst.addEventListener('click', function() {
        iniciaModal('modal-contato');
    });

    //***********MODAL SOBRE************//

    function iniciaModal(modalID) {
        const modal = document.getElementById(modalID);
        if(modal) {
    
            modal.classList.add('mostrar');
            modal.addEventListener('click', (e) => {
                if(e.target.id == modalID || e.target.className == 'fechar') {
                    modal.classList.remove('mostrar');
                }
            });
        }
    }
    
    const sobreconst = document.getElementById("sobre");
    sobreconst.addEventListener('click', function() {
        iniciaModal('modal-sobre');
    });


}


function modal(){
    document.getElementById("divgrande").style.display = " none";
    document.getElementById("divgrande2").style.display = "block";
    var selectedValue = document.getElementById("list").value;
    document.getElementById("cat").innerText = selectedValue;
}





