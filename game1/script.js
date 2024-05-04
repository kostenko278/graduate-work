const words = ['мышь', 'клавиатура', 'монитор', 'колонки', 'наушники', 'микрофон'];
let randomWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = '_'.repeat(randomWord.length);

const wordToGuessElement = document.getElementById('wordToGuess');
const letterInput = document.getElementById('letterInput');
wordToGuessElement.textContent = guessedWord;

document.getElementById("restartButton").addEventListener("click", function() {
    window.location.reload(); // Перезагружает страницу
});

letterInput.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        checkLetter();
    }
});

function checkLetter() {
    const letterInputValue = letterInput.value.toLowerCase();

    if (letterInputValue.length !== 1) {
        alert('Пожалуйста, введите только одну букву.');
    } else {
        let newGuessedWord = '';
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === letterInputValue) {
                newGuessedWord += letterInputValue;
            } else {
                newGuessedWord += guessedWord[i];
            }
        }
        if (newGuessedWord === guessedWord) {
            alert('Неправильно! Попробуйте ещё раз.');
        } else {
            guessedWord = newGuessedWord;
            wordToGuessElement.textContent = guessedWord;
            if (guessedWord === randomWord) {
                document.getElementById('message').textContent = 'Поздравляем, вы угадали слово!';
                wordToGuessElement.classList.add('guessed');
            }
        }
        letterInput.value = '';
    }
}
