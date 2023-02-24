const left=document.querySelector('.left');
const right=document.querySelector('.right');
const container = document.querySelector('.container')

// left.addEventListener('mousenter',()=>container.classList.add('hover-left'));
left.addEventListener('mouseenter', () =>left.classList.add('hover-left'))
// right.addEventListener('mouseleave', () =>right.classList.add())

left.addEventListener('mouseleave', () =>left.classList.remove('hover-left'))

right.addEventListener('mouseenter',()=>right.classList.add('hover-right'))
right.addEventListener('mouseleave',()=>right.classList.remove('hover-right'))