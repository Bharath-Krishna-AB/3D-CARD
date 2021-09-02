//accesed for 3d effect on mouse move
var container = document.querySelector('.card-container')
var card =document.querySelector('.card')

//accesed for 3d effect inside the card
var img =document.querySelector('.shoe-img')
var title =document.querySelector('.title')
var description =document.querySelector('.description')
var sizes =document.querySelector('.sizes')
var purchase =document.querySelector('.purchase')




container.addEventListener('mousemove', (e) =>{
    //for getting that 3d effect on mouse move
    var Xaxis = (window.innerWidth /2 - e.pageX) /20
    var Yaxis = (window.innerHeight /2 -e .pageY) /20
    card.style.transform = `rotateY(${Xaxis}deg) rotateX(${Yaxis}deg)`

    // getting 3d effect inside the card
    img.style.transform = 'rotateZ(-40deg) translateZ(200px)'
    title.style.transform = 'translateZ(150px)'
    description.style.transform = 'translateZ(100px)'
    sizes.style.transform = 'translateZ(75px)'
    purchase.style.transform = 'translateZ(50px)'
})

container.addEventListener('mouseleave', (e) =>{

    //for getting 3d effect to normal when leaving container
    card.style.transform = 'rotateY(0deg) rotateX(0deg)'

    //for getting 3d effect inside the card normal
    img.style.transform = 'rotateZ(0deg) translateZ(0px)'
    title.style.transform = 'translateZ(0px)'
    description.style.transform = 'translateZ(0px)'
    sizes.style.transform = 'translateZ(0px)'
    purchase.style.transform = 'translateZ(0px)'

})

