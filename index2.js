let hex = document.getElementById('hex')
let colorch = document.getElementById('colorch')
let click = document.getElementById('click')
let hexcode = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']



function randomizer(){
    return Math.floor(Math.random()*hexcode.length)
}

click.addEventListener('click', ()=>{
    let hexsimbol = '#'
    for(let i = 0 ; i< 6;i++) {
        hexsimbol += hexcode[randomizer()]
    }

    colorch.textContent = hexsimbol
    document.body.style.backgroundColor = hexsimbol 
})
