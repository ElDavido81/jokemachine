function slumpa(from, to) {
    return Math.floor( Math.random() * (to + 1 - from) ) + from
}

// Uppgift 1 kommer här:

const dadJokes = [
"How many storm troopers does it take to change a lightbulb? None, because they are all on the dark side.",
"If your house is cold, just stand in the corner. It’s always 90 degrees there.",
"Hi, I’m Cliff. Drop over sometime.",
"Why did the old man fall down the well? He couldn’t see that well.",
"What's a skeleton's favorite type of road? A dead end.",
"What did the alien say to the landscaper? Take me to your weeder.",
"What do you call a broken clock? A waste of time.",
"Why did the teddy bear turn down a slice of cake. He was stuffed.",
"What's an astronaut's favorite board game? Moon-opoly",
"How do you make Budweiser? Send him to school.",
]
let lista = dadJokes
let n

console.log ('############################')
console.log ('Welcome to the joke factory!')
console.log ('Let me tell you a dad-joke:')
console.log ('')
for ( let i=0; i<2; i++ ) {
    let n = slumpa(0,9)
    let r = n + 1
        
    console.log ('Joke #' + r)
console.log('> ' + lista[n])
}

console.log ('')
console.log ('Thank you, come again')
console.log ('')


// Uppgift 2 kommer här:


let joke1 = {
    id: '0',
    question: 'How many storm troopers does it take to change a lightbulb?',
    answer: 'None, because they are all on the dark side.',
}
let joke2 = {
    id: '1',
    question: 'If your house is cold, just stand in the corner...',
    answer: 'It’s always 90 degrees there.',
}
let joke3 = {
    id: '2',
    question: 'Hi, I’m Cliff.',
    answer: 'Drop over sometime.',
}
let joke4 = {
    id: '3',
    question: 'Why did the old man fall down the well?',
    answer: "He couldn’t see that well.",
}
let joke5 = {
    id: '4',
    question: "What's a skeleton's favorite type of road?",
    answer: 'A dead end.',
}
let joke6 = {
    id: '5',
    question: 'What did the alien say to the landscaper?',
    answer: 'Take me to your weeder.',
}
let joke7 = {
    id: '6',
    question: 'What do you call a broken clock?',
    answer: 'A waste of time.',
}
let joke8 = {
    id: '7',
    question: 'Why did the teddy bear turn down a slice of cake?',
    answer: 'He was stuffed.',
}
let joke9 = {
    id: '8',
    question: "What's an astronaut's favorite board game?",
    answer: 'Moon-opoly.',
}
let joke10 = {
    id: '9',
    question: 'How do you make Budweiser?',
    answer: 'Send him to school.',
}

let lista2 = [joke1, joke2, joke3, joke4, joke5, joke6, joke7, joke8, joke9, joke10]

let j = slumpa(0,9)
let k = j + 1


console.log ('############################')
console.log ('Welcome to the joke factory!')
console.log ('Let me tell you a dad-joke:')
console.log ('')

console.log ( 'Joke #' + k )
console.log ( 'Question: ' + lista2[j].question )
console.log ( 'Answer: ' + lista2[j].answer )

console.log ('')
console.log ('Thank you, come again')

    
 
    
    
