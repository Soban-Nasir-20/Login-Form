const wrapper = document.querySelector('.wrapper');
const login = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

login-link.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});