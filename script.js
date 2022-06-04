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

//start elemet in script
//creat element container
let container = document.createElement('div')
container.classList.add('container')
document.querySelector('body').appendChild(container)
console.log(container)

//create div quiz
let questionel = document.createElement('div')
//set id for div quiz
questionel.setAttribute('id', 'questionConElm')
//set classlist hide for 
questionel.classList.add('hide')
container.appendChild(questionel)


//design  for questions
//create div quiz
let quiz = document.createElement('div')
//set id for div quiz
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


//add h3  for numquestion++++
let childQuizH3 = document.createElement('h3');
childQuizH3.innerHTML = "Which figure will logically fill the empty box in the grid?";
numQuestionel.appendChild(childQuizH3)

//quizbox
//quizbox  for 1 question design++++
let quizboxs = document.createElement('div');
quizboxs.setAttribute('id', 'quizbox')
numQuestionel.appendChild(quizboxs)

//div for images  question& answer++++
let imageQuestion = document.createElement('div');
imageQuestion.classList.add('imageQuestions')
quizboxs.appendChild(imageQuestion)

//class for image in questions +++++
let questions = document.createElement('div');
questions.classList.add('questions')
imageQuestion.appendChild(questions)

//add image  show question+++++
let picQuestion = document.createElement('img');
picQuestion.setAttribute('src', 'image/Images/1/test1.png')
picQuestion.setAttribute("width", "304");
picQuestion.setAttribute("height", "228");
picQuestion.setAttribute("alt", "thequestion");
questions.appendChild(picQuestion)


//answer
//div for answer +++++
let answers = document.createElement('div')
answers.setAttribute('id', 'answers')
imageQuestion.appendChild(answers)
//create div for picanswer
let p1 = document.createElement('p')
p1.setAttribute('id', 'p1')
answers.appendChild(p1)
//add img for answer1
let img1 = document.createElement('img')
img1.setAttribute('src', 'image/Images/1/1-1.png')

img1.setAttribute("alt", "the answer 1");
p1.appendChild(img1)

//create div for picanswer2
let p2 = document.createElement('p')
p2.setAttribute('id', 'p2')
answers.appendChild(p2)
//add img for answer2
let img2 = document.createElement('img')
img2.setAttribute('src', 'image/Images/1/1-2.png')

img2.setAttribute("alt", "the answer 2");
p2.appendChild(img2)


//pic answer3
let p3 = document.createElement('p')
p3.setAttribute('id', 'p3')
answers.appendChild(p3)
//add img for answer3
let img3 = document.createElement('img')
img3.setAttribute('src', 'image/Images/1/1-3.png')

img3.setAttribute("alt", "the answer 3");
p3.appendChild(img3)

//pic answer4
let p4 = document.createElement('p')
p4.setAttribute('id', 'p4')
answers.appendChild(p4)
//add img for answer1
let img4 = document.createElement('img')
img4.setAttribute('src', 'image/Images/1/1-4.png')

img1.setAttribute("alt", "the answer 4");
p4.appendChild(img4)

//pic answer5
let p5 = document.createElement('p')
p5.setAttribute('id', 'p5')
answers.appendChild(p5)
//add img for answer1
let img5 = document.createElement('img')
img5.setAttribute('src', 'image/Images/1/1-5.png')
img5.setAttribute("alt", "the answer 5");
p5.appendChild(img5)

//pic answer6
let p6 = document.createElement('p')
p6.setAttribute('id', 'p6')
answers.appendChild(p6)
//add img for answer1
let img6 = document.createElement('img')
img6.setAttribute('src', 'image/Images/1/1-6.png')

img6.setAttribute("alt", "the answer 6");
p6.appendChild(img6)






//next&previous
//create button  for next and perivous
let nextBack = document.createElement('div')
nextBack.setAttribute('id', 'nextBack')
numQuestionel.appendChild(nextBack)

//form in button per and next
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



// create form for add information
let questionform = document.createElement('div')
questionform.setAttribute('id', 'questionform')
container.appendChild(questionform)

// div for title
let head = document.createElement('div')
head.classList.add('head')
questionform.appendChild(head)

//title iqtest add to head
let titleiq = document.createElement('h1')
//type title
titleiq.innerHTML = "IQ TEST";
head.appendChild(titleiq)

//form for information
let infoForm = document.createElement('form')
infoForm.setAttribute('id', 'newform')
questionform.appendChild(infoForm)

//inputs create name
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




//inputs create age
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
