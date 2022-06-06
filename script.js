/*
  TODO:. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * The questions (have the class `question-item`)
    * The alert (has the id `alert`)
*/



// TODO: . Create a submit event listener for the form that does the following.
//    1. Prevent the default behaviour
//    2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
//    3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
//    4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
//    5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
//    6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
//    7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)

// the start of elemet 
//create  the element container
let container = document.createElement('div')
container.classList.add('container')
document.querySelector('body').appendChild(container)
console.log(container)

//create the div quiz
let questionel = document.createElement('div')
//setting the  id for div quiz
questionel.setAttribute('id', 'questionConElm')
//setting  the classlist hide for not  showing the element
questionel.classList.add('hide')
container.appendChild(questionel)


//designing  for Question
//creating div  quiz
let quiz = document.createElement('div')
//set the id for div quiz
quiz.setAttribute('id', 'quiz')
quiz.classList.add('quiz')
questionel.appendChild(quiz)


//create div numquestion
let numQuestionel = document.createElement('div')
//set classlist for div quiz
numQuestionel.classList.add('numquestion')
//add a child quiz
quiz.appendChild(numQuestionel)

//add (h1>span)+h3+div.quizsub
let childnumquiz = document.createElement('h1')
childnumquiz.innerHTML = "question of 30";
numQuestionel.appendChild(childnumquiz)

//span in h1 
let childh1 = document.createElement('span')
//set id for span
childh1.setAttribute('id', 'QuestionNumOf')
childh1.innerHTML = 1;


// h3  for numquestion++++
let childQuizH3 = document.createElement('h3');
childQuizH3.innerHTML = "Which figure will logically fill the empty box in the grid?";
numQuestionel.appendChild(childQuizH3)

//quizbox
// div quizbox  for creating a question page
let quizboxs = document.createElement('div');
quizboxs.setAttribute('id', 'quizbox')
numQuestionel.appendChild(quizboxs)

//div for  questions& answers
let imageQuestion = document.createElement('div');
imageQuestion.classList.add('imageQuestions')
quizboxs.appendChild(imageQuestion)

//class for the image of  questions +++++
let questions = document.createElement('div');
questions.classList.add('questions')
imageQuestion.appendChild(questions)


//class for image in questions +++++
let questions = document.createElement('div');
questions.classList.add('questions')
imageQuestion.appendChild(questions)
//div for answer
let answers = document.createElement('div')
answers.setAttribute('id', 'answers')
imageQuestion.appendChild(answers)



for (let i = 4; i==4; i++) {
    let question_img = document.createElement("img");
    question_img.setAttribute("src", "image/Images/" + [i] + "/test" + [i] + ".png");
    questions.appendChild(question_img);
    //   this if statemen help us go throg all the picture below folder 12 that have 6 picture
    if (i <= 12) {
      for (let j = 1; j <= 6; j++) {
        let answer_img = document.createElement("img");
        answer_img.setAttribute(
          "src",
          "image/Images/" + [i] + "/" + [i] + "-" + [j] + ".png"
        );
        answers.appendChild(answer_img);
      }
    }
    //  after the 12 this loop happend that help us get all the question that have 8 answer
    else {
      for (let j = 1; j <= 8; j++) {
        let answer_img = document.createElement("img");
        answer_img.setAttribute(
          "src",
          "image/Images/" + [i] + "/" + [i] + "-" + [j] + ".png"
        );
        answers.appendChild(answer_img);
      }
    }
  }









//next&previous
//create button  for next and perivous
let nextBack = document.createElement('div')
nextBack.setAttribute('id', 'nextBack')
numQuestionel.appendChild(nextBack)

//form for button per and next
let btnBackNext = document.createElement('form')
btnBackNext.setAttribute('id', 'btnBackNext')
nextBack.appendChild(btnBackNext)
//create backinput
let back = document.createElement('input')
back.type = 'submit',
    back.id = 'previous',
    back.value = '<< previous',
    back.className = 'previous'

btnBackNext.appendChild(back)


//create nextinput
let next = document.createElement('input')
next.type = 'submit',
    next.id = 'next',
    next.value = 'NEXT >>',
    next.className = 'next'

//next('id', 'next')
//next('type', 'sub')
//next('value', 'NEXT >')
btnBackNext.appendChild(next)



//create form for add information
let questionform = document.createElement('div')
questionform.setAttribute('id', 'questionform')
container.appendChild(questionform)

// div for title
let head = document.createElement('div')
head.classList.add('head')
questionform.appendChild(head)

//title iqtest for  header
let titleiq = document.createElement('h1')
//type title
titleiq.innerHTML = "IQ TEST";
head.appendChild(titleiq)

//form for information
let infoForm = document.createElement('form')
infoForm.setAttribute('id', 'newform')
questionform.appendChild(infoForm)
    
//create the  input  of name
//title info-name 
let titleInfoName = document.createElement('h3')
//type title
titleInfoName.innerHTML = "NAME:";
infoForm.appendChild(titleInfoName)
//input name type-text
let names = document.createElement('input')
names.type = 'text',
    names.id = 'name',
    names.className = 'btn',
    names.placeholder = 'enter your name'

//names('id', 'name')
//names('type', 'text')
//names('placeholder', 'enter your name')
infoForm.appendChild(names)
//names child infoform




//create the  input  of age
//title info-age
let titleInfoAge = document.createElement('h3')
//type title
titleInfoAge.innerHTML = "age:";
infoForm.appendChild(titleInfoAge)
//input age  type-text
let ages = document.createElement('input')
ages.type = 'text',
    ages.id = 'age',
    ages.className = 'age',
    ages.placeholder = 'enter your age '

infoForm.appendChild(ages)



let startbtnel = document.createElement('input')
startbtnel.type = 'button',
    startbtnel.id = 'substr',
    startbtnel.value = 'START',
    startbtnel.className = 'btnstr'

infoForm.appendChild(startbtnel)




//------------------------function for start home--------------

//button start add to varible startbtn
const startbtn = document.getElementById('substr');

//question form add to varible formhide
const formhide = document.getElementById('questionform');

////div question element add to varible questionelement
const questionelement = document.getElementById('questionConElm')

//when a click start button  run function  startQuestion
startbtn.addEventListener('click', startQuestion)

//run function
function startQuestion() {
    console.log('started');
    // class hide remove for div questionConElm
    questionelement.classList.remove('hide');
    // class hide +background
    formhide.classList.add('hide');

}
//function if input  type text==! 
