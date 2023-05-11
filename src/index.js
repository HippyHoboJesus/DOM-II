import './less/index.less'

// Your code goes here!
const home = document.querySelector("a");
function disappear() {
    home.textContent = ""
}
home.addEventListener('mouseover', disappear)

const logoImg = document.querySelector("img")
function blue(evt) {
    if(evt.key === "b") {
        logoImg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7JDFYH7lYrK2OK7E0FvU0XYZrdTG-ga6BQ&usqp=CAU')
    }
}
document.addEventListener('keydown', blue)

window.onload = function() {
    console.log('fun bus ready to load!!!')
    console.log(logoHead)
}

function nono() {
    alert('no copying')
}
document.addEventListener('copy', nono)

const introHead = document.querySelector(".intro h2")
function seeDbl() {
    introHead.textContent = "Welcome To Fun Bus! Welcome To Fun Bus!"
}
introHead.addEventListener('dblclick', seeDbl)

const logoHead = document.querySelector(".logo-heading")
function rolling() {
    logoHead.textContent = 'Fun Bus on the roll!!'
}
document.addEventListener('scroll', rolling)

function doneroll() {
    logoHead.textContent = 'Fun Bus is at a stop!!'
}
document.addEventListener('scrollend', doneroll)

const letG = document.querySelector('.text-content h2')
function smaller() {
 letG.textContent = "Let's Go Smaller!"
}
window.addEventListener('resize', smaller)

const p = document.querySelector('p')
p.className = '.dest'
const dest = document.querySelectorAll('.dest')
for (let des of dest) {
    des.addEventListener('mouseenter', () => {
        des.style.fontWeight = 'bold'
    })
    des.addEventListener('mouseleave', () => {
        des.style.fontWeight = 'initial'
    })
}


