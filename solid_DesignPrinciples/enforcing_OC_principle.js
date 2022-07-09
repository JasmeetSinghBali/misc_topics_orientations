class BooleanQuestion{
    constructor(description){
        this.description = description
    }

    printQuestionChoices(){
        console.log('1. True')
        console.log('2. False')
    }
}

class MultipleChoiceQuestion{
    constructor(description,options){
        this.description = description
        this.options = options
    }

    printQuestionChoices(){
        this.options.forEach((option,index)=>{
            console.log(`${index+1}. ${option}`)
        })
    }
}

class TextQuestion{
    constructor(description){
        this.description = description
    }

    printQuestionChoices(){
        console.log('Answer: _____________')
    }
}

class RangeQuestion{
    constructor(description){
        this.description = description
    }

    printQuestionChoices(){
        console.log('Minimum: __________')
        console.log('Maximum: __________')
    }
}

function printQuiz(questions){
    questions.forEach(question=>{
        console.log(question.description)
        question.printQuestionChoices()
        console.log()
    })
}

const questions = [
    new BooleanQuestion('This is enforcing the Open-Close principle effectively'),
    new MultipleChoiceQuestion('what is your poison?',['Rust','Go','Typescript','Deno','Nodejs','bun']),
    new TextQuestion('describe your favourite programming language in 1 word'),
    new RangeQuestion('Rate your programming lang out of 10?')
]

printQuiz(questions)