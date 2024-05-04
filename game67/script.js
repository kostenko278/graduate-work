const quizData = [
    {
        question: "Этот человек управляет деньгами компании, контролирует расходы и доходы.",
        a: "Уборщица",
        b: "Финансовый директор",
        c: "Контролер",
        correct: "b",
    },
    {
        question: "Этот человек составляет отчеты о доходах и расходах компании, помогает рассчитать налоги.",
        a: "Бухгалтер",
        b: "Секретарь",
        c: "Дворник",
        correct: "a",
    },
    {
        question: "У этого человека есть специальное устройство, с помощью которого можно снимать деньги со счета.",
        a: "Администратор магазина",
        b: "Продавец",
        c: "Банковский служащий (кассир)",
        correct: "c",
    },
    {
        question: "Этот человек анализирует финансовое состояние человека, чтобы предоставить ему кредит.",
        a: "Бухгалтер",
        b: "Специалист по кредитованию",
        c: "Риэлтор",
        correct: "b",
    },
    {
        question: "Это профессионал, занимающийся вопросами, связанными с налогами в компании.",
        a: "Специалист по налогам",
        b: "Налогатор",
        c: "Кинолог",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Вы угадали ${score}/${quizData.length} профессий</h2>
            <button onclick="location.reload()">Начать заново</button>
            `;
        }
    }
});
