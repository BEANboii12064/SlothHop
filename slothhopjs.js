// Variable configurations
let num1 = 0;
let num2 = 0;
let correctAnswer = 0;

// Gather UI Elements
const playBtn = document.getElementById('playBtn');
const parentGate = document.getElementById('parentGate');
const mathQuestion = document.getElementById('mathQuestion');
const gateForm = document.getElementById('gateForm');
const parentAnswer = document.getElementById('parentAnswer');
const errorMessage = document.getElementById('errorMessage');

// Generate random multiplication safety verification
function generateSafetyChallenge() {
    num1 = Math.floor(Math.random() * 8) + 5; // 5 to 12
    num2 = Math.floor(Math.random() * 7) + 3; // 3 to 9
    correctAnswer = num1 * num2;
    mathQuestion.textContent = `${num1} × ${num2} = ?`;
}

// User actions triggers the verification overlay
if (playBtn) {
    playBtn.addEventListener('click', () => {
        generateSafetyChallenge();
        parentGate.classList.remove('hidden');
    });
}

// Submit processing without saving tracking server packages
if (gateForm) {
    gateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputVal = parseInt(parentAnswer.value, 10);
        
        if (inputVal === correctAnswer) {
            errorMessage.classList.add('hidden');
            parentGate.classList.add('hidden');
            // Navigate safely to the local console room file
            window.location.href = 'slothhop.html';
        } else {
            errorMessage.classList.remove('hidden');
            parentAnswer.value = '';
            generateSafetyChallenge(); // Change challenge on mistake
        }
    });
}
