
// Correct Answers
const correctAnswers = ['B', 'B', 'B', 'B'];

// Get The Form Element
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Get The Result Element
    const result = document.querySelector('.result');

    // Get The User Submitted Answers
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value ];

    // User's Initial score
    let score = 0;

    // Calculate Score
    userAnswers.forEach((answer, index) => {
        if ( answer === correctAnswers[index] ) {
            score += 25;
        }
    });
   
    // Scroll Up 
    scrollTo(0,0);

    // Display The Score Animated Way
    let animatedScore = 0;

    const timer = setInterval( () => {
        
        result.querySelector('span').textContent = `${animatedScore}%`;

        if ( animatedScore === score ) {
            clearInterval(timer);
        } else {
            animatedScore++;    
        }
    }, 10);

    // Remove The 'd-none' Class    
    result.classList.remove('d-none');    
});