const passwordElement = document.querySelector("#password");
const weakElement = document.querySelector('#weak-msg');
const StrongElement = document.querySelector('#strong-msg');

passwordElement.addEventListener('keyup',function() {
    console.log(passwordElement.value);
    const password = passwordElement.value;

    console.log(password.length)
    if (password.length < 8 ){
        weakElement.style.display = 'block';
        StrongElement.style.display = 'none';
    }else {
        weakElement.style.display = 'none';
        StrongElement.style.display = 'block';
    }

});

