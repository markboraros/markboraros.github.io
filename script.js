const container = document.querySelector('.container');
const LoginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginbutton = document.querySelector('.loginbutton');

registerLink.addEventListener('click', ()=> {
    container.classList.add('active');
});

LoginLink.addEventListener('click', ()=> {
    container.classList.remove('active');
});

btnpopup.addEventListener('click', ()=> {
    container.classList.remove('active-popup');
});

/*hamburger menu*/



/*hamburger menu end*/
let c = 45;

function draw(){
  document.documentElement.style.setProperty('--direction', c++ + 'deg');
  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
