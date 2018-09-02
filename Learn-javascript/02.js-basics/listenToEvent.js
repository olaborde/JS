


const button = document.querySelector('button')

button.addEventListener( "click", function(){
    console.log('You tickled me!')

    const body = document.body

    body.classList.add('button-is-clicked')
    button.classList.add('is-clicked')
})