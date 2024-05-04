const quizData = [
    {
        question: "Для каких целей предназначен блокнот в Windows?",
        a: "Графический редактор",
        b: "Текстовый редактор",
        c: "Просмотр фильмов",
        correct: "b",
    },
    {
        question: "Для чего используют двойной щелчок мыши?",
        a: "Для запуска программ, открытия файлов, перехода по ссылкам",
        b: "Для включения компьютера",
        c: "Для того, чтобы поставить видео на паузу",
        correct: "a",
    },
    {
        question: "Что такое файл?",
        a: "Единица измерения информации",
        b: "Мультифора",
        c: "Программа или данные на диске",
        correct: "c",
    },
    {
        question: "Что такое браузер?",
        a: "Антивирусная программа",
        b: "Средство просмотра веб-страниц",
        c: "Графический редактор",
        correct: "b",
    },
    {
        question: "Какое действие не рекомендуется выполнять при включённом компьютере?",
        a: "Подключать монитор",
        b: "Пересылать файлы",
        c: "Скачивать музыку",
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
            quiz.innerHTML = `<h2>Вы ответили верно на ${score}/${quizData.length} вопросов</h2>
            <button onclick="location.reload()">Начать заново</button>
            `;
        }
    }
});
