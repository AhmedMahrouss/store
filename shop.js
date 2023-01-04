let li = document.querySelectorAll('ul li');
let home = document.getElementsByClassName('.home')
let nav = document.querySelector('.humburger');
let sliderNav = document.querySelector('.sliderNav')
let closeNav = document.querySelector('#logo .closeNav')

nav.onclick = ()=>{
sliderNav.style.right = '0'
closeNav.style.display ='block'
}
closeNav.onclick =()=>{
    sliderNav.style.right= '-60%'
    closeNav.style.display='none'
}