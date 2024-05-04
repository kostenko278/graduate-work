const words = ['мышь', 'клавиатура', 'монитор', 'колонки', 'наушники', 'микрофон'];
let randomWord = words[Math.floor(Math.random() * words.length)];
let guessedWord = '_'.repeat(randomWord.length);

const wordToGuessElement = document.getElementById('wordToGuess');
wordToGuessElement.textContent = guessedWord;

document.getElementById("restartButton").addEventListener("click", function() {
    window.location.reload(); // Перезагружает страницу
});

function checkLetter() {
    const letterInput = document.getElementById('letterInput').value.toLowerCase();
    if (letterInput.length !== 1) {
        alert('Пожалуйста, введите только одну букву.');
    } else {
        let newGuessedWord = '';
        for (let i = 0; i < randomWord.length; i++) {
            if (randomWord[i] === letterInput) {
                newGuessedWord += letterInput;
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
            }
        }
    }
}
