var container = document.querySelector('.card-container')
var card =document.querySelector('.card')



container.addEventListener('mousemove', (e) =>{
    //for getting that 3d effect on mouse move

    var Xaxis = (window.innerWidth /2 - e.pageX) /20
    var Yaxis = (window.innerHeight /2 -e .pageY) /20
    card.style.transform = `rotateY(${Xaxis}deg) rotateX(${Yaxis}deg)`

})

container.addEventListener('mouseleave', (e) =>{

    //for getting it to normal when leaving container

    card.style.transform = 'rotateY(0deg) rotateX(0deg)'

})

