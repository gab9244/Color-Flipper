let simpleColors = ['yellow','red','green','blue']
let colorch = document.getElementById('colorch')
let click = document.getElementById('click')
 
 


function random(){
    let takeramdon = Math.floor(Math.random() * simpleColors.length)
    let rnd = simpleColors[takeramdon]
    return rnd
}

 
 click.addEventListener('click' , () => {
  document.body.style.backgroundColor = random()
    colorch.innerText = Body.style.backgroundColor
 })
