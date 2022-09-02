let favColor = document.querySelector('#color')
let favPlace = document.querySelector('#place')
let favRitual = document.querySelector('#ritual')


const colorBtn = () =>{
    alert('Green is my favorite color!')
}

const placeBtn = () =>{
    alert('My favorite place to visit is the Oregon Coast!')
}

const ritualBtn = () =>{
    alert('Halloween night is my favorite ritual! I love decorating the yard to look as spooky as possible!')
}


favColor.addEventListener('click', colorBtn)
favPlace.addEventListener('click', placeBtn)
favRitual.addEventListener('click', ritualBtn)