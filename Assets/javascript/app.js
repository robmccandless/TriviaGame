< div >

    <
    /div>
    //make true/false buttons or multiple choice
    //create timer 
    //limit time to 10 seconds for each question
    //Or 120 seconds for intire game
    //create alert for number of questions correct
    //limit button to only one selection
    //create countdown timer

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        question: "a dog has wings",
        answer: {
            'true',
            'flase'
        }
    }

    function showResults(questions, quizContainer, resultsContainer) {
        // code will go here
    }

    // show the questions
    showQuestions(questions, quizContainer);

    // when user clicks submit, show results
    submitButton.onclick = function() {
        showResults(questions, quizContainer, resultsContainer);
    }
}