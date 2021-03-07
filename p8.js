var securityQuestions = [
    {
    question: 'What was your first pet’s name?',
    expectedAnswer: 'FlufferNutter'
    },
    {
    question: 'What was the model year of your first car?',
    expectedAnswer: '1985'
    },
    {
    question: 'What city were you born in?',
    expectedAnswer: 'NYC'
    }
   ]
function chksecurityQuestions(securityQuestions, question, answer) {
    var b = false;
    for (var i = 0; i < securityQuestions.length; i++) {
        if (securityQuestions[i].question == question && securityQuestions[i].expectedAnswer == answer) {
            b = true;
            
        }
    }
    return b;
}
question ='What city were you born in?';
answer = 'NYC';
var status = chksecurityQuestions(securityQuestions, question, answer);
console.log(status);