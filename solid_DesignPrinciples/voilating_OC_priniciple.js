function printQuiz(questions){
    questions.forEach(question=>{
        console.log(question.description)
        switch(question.type){
            case 'boolean':
                console.log('1. True')
                console.log('2. False')
                break
            case 'multipleChoice':
                question.options.forEach((option, index)=>{
                        console.log(`${index+1}. ${option}`)
                })
                break
            case 'text':
                console.log('Answer: _____________')
                break
            /**🚫Newly modified/added code in future voilating the OC principle*/
            case 'range':
                console.log('Minimum: _________')
                console.log('Maximum: _________')
                break
        }
        console.log('')
    })
}
const questions = [
    {
        type: 'boolean',
        description: 'this is voilation of open-close principle'
    },
    {
        type: 'multipleChoice',
        description: 'what is your poison?',
        options: ['Rust','Go','Typescript','Deno','Nodejs','bun']
    },
    {
        type: 'text',
        description: 'describe your favourite programming language in 1 word'
    },
    /**🚫Newly modified/added code in future voilating the OC principle*/
    {
        type: 'range',
        description: 'Rate your programming lang out of 10?'
    }
]

printQuiz(questions)