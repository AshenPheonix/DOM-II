// Your code goes here

import rc from './randomColor.js';

document.querySelector('header').addEventListener('mouseover',(e)=>{
    e.currentTarget.style['background-color']='orange'
})

document.querySelectorAll('nav a').forEach(item=>{
    item.addEventListener('mouseover',(e)=>{
        e.currentTarget.style.backgroundColor='black',
        e.currentTarget.style.color='white'
        e.currentTarget.style.fontSize='2rem'
    })
    item.addEventListener('mouseleave',e=>{
        e.currentTarget.style.backgroundColor='orange',
        e.currentTarget.style.color='black'
        e.currentTarget.style.fontSize='1.6rem'
    })
    item.addEventListener('click',e=>{
        e.preventDefault()
        alert("Naughty Boy, you aren't having fun yet!")
    })
})

document.querySelector('header').addEventListener('mouseleave',(e)=>{
    e.stopPropagation()
    e.currentTarget.style['background-color']='white'
    document.querySelectorAll('nav a').forEach(ele=>ele.style.backgroundColor='white')
})

window.addEventListener('keydown',(e)=>{
    switch(e.key){
        case 'ArrowDown':
            document.querySelector('header').style.backgroundColor='red'
            break;
        case 'ArrowUp':
            document.querySelector('header').style.backgroundColor='orange'
            break;
        case 'ArrowLeft':
            document.querySelector('header').style.backgroundColor='pink'
            break;
        case 'ArrowRight':
            document.querySelector('header').style.backgroundColor='white'
            break;
    }
})

window.addEventListener('wheel',(e)=>{
    document.querySelector('body').style.backgroundColor=rc()
})

document.querySelectorAll('img').forEach(item=>{
    item.addEventListener('dragend',e=>{
        alert('Are you having FUN!')
    })
})

window.addEventListener('load',e=>{
    alert('You are GOING TO HAVE FUN!!!')
})