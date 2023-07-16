let person = {
    name: 'Artur',
    age: 18
}

let btn = document.querySelector('button')

btn.onclick = () => {
    person.name = 'John'
    alert(person.name)
}

function greet(meme, secondMeme) {
    console.log('Hello ' + meme + ' ' + secondMeme)
}

greet('Pepe', 'The Frog')
greet('DOGE')