const studyQuizAnswers = [1, 1];
const languageQuizAnswers = {
    spanish: [0],
    mandarin: [0],
    french: [0]
};

function checkAnswer(questionIndex, answerIndex, language = null) {
    let correct;
    let questionElements;
    
    if (language) {
        correct = languageQuizAnswers[language][questionIndex] === answerIndex;
        questionElements = document.querySelectorAll(`.quiz[data-language="${language}"] .quiz-question`)[questionIndex];
    } else {
        correct = studyQuizAnswers[questionIndex] === answerIndex;
        questionElements = document.querySelectorAll('#quiz .quiz-question')[questionIndex];
    }

    const buttons = questionElements.querySelectorAll('button');
    buttons.forEach(button => button.disabled = true);
    
    const resultText = correct ? "Correct!" : "Wrong answer. Try again.";
    questionElements.querySelector('p.result').innerText = resultText;
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.quiz-question').forEach(question => {
        const resultParagraph = document.createElement('p');
        resultParagraph.classList.add('result');
        question.appendChild(resultParagraph);
    });
});


document.querySelectorAll('.hover-img').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.src = img.src.replace('', 'e.jpg');
    });
    img.addEventListener('mouseout', () => {
        img.src = img.src.replace
    });
});
function checkAnswers() {
    const answers = {
        q1: 'b',
        q2: 'b'
    };

    let score = 0;
    let totalQuestions = 2;

    for (let i = 1; i <= totalQuestions; i++) {
        let selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption && selectedOption.value === answers[`q${i}`]) {
            score++;
        }
    }

    let resultText = `You got ${score} out of ${totalQuestions} correct.`;

    if (score === totalQuestions) {
        resultText += " Great job!";
    } else {
        resultText += " Please review the tips and try again.";
    }

    document.getElementById('quiz-result').innerText = resultText;
}
document.addEventListener('DOMContentLoaded', function() {
    const tips = document.querySelectorAll('.tip');

    tips.forEach(tip => {
        tip.addEventListener('click', function() {
            alert(this.querySelector('h2').textContent + " clicked!");
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const resources = document.querySelectorAll('.resource');

    resources.forEach(resource => {
        resource.addEventListener('click', function() {
            const tipContent = {
                immerse: "Immerse yourself in the language by surrounding yourself with it. Watch movies, listen to music, and engage in conversations. Immersion is a powerful way to learn the nuances and colloquialisms of a language.",
                practice: "Practicing daily is essential for language learning. Dedicate a specific time each day to practice speaking, listening, reading, and writing. Consistency is key to retaining new information.",
                apps: "Using language learning apps can be incredibly beneficial. Apps like Duolingo, Babbel, and Rosetta Stone provide structured lessons and interactive exercises that make learning fun and effective.",
                groups: "Joining language groups or online forums allows you to practice with native speakers and other learners. This interaction helps improve your conversational skills and gain confidence in using the language.",
                goals: "Setting realistic goals helps keep you motivated. Break down your learning into achievable milestones and celebrate your progress. This approach makes the learning journey enjoyable and manageable."
            };
            alert(tipContent[this.id]);
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Show the confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Show the confirmation message
    document.getElementById('confirmationMessage').style.display = 'block';

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
