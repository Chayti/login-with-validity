const emailValidityStatus = document.getElementById('email-validity-status');
const passValidityStatus = document.getElementById('pass-validity-status');

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validatePass(email) {
    // Regex for password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(email);
}

const validate = () => {

    emailValidityStatus.textContent = ' ';
    passValidityStatus.textContent = ' ';

    const email = document.getElementById('email');
    const pass = document.getElementById('pass');

    if (validateEmail(email.value) && validatePass(pass.value)) {
        window.location = 'https://www.google.com/';
    }
    else if (validateEmail(email.value) && !validatePass(pass.value)) {
        emailValidityStatus.innerHTML = `
        <div style="background-color: rgba(0, 128, 0, 0.178);">
            <p class="text-center text-success">Your email is correct</p>
        </div>
        `
        passValidityStatus.innerHTML = `
        <div style="background-color: rgba(255, 0, 0, 0.26)">
            <p class="text-center text-danger">Enter a password containing atleast 8 letters(both lowercase & uppercase), 1 number & a special case </p>
        </div>
        `
    }
    else if (!validateEmail(email.value) && validatePass(pass.value)) {
        emailValidityStatus.innerHTML = `
        <div style="background-color: rgba(255, 0, 0, 0.26)">
            <p class="text-center text-danger">Your email is incorrect</p>
        </div>
        `
        passValidityStatus.innerHTML = `
        <div style="background-color: rgba(0, 128, 0, 0.178);">
            <p class="text-center text-success">Your password is correct</p>
        </div>
        `
    }
    else if (!validateEmail(email.value) && !validatePass(pass.value)) {
        emailValidityStatus.innerHTML = `
        <div style="background-color: rgba(255, 0, 0, 0.26)">
            <p class="text-center text-danger">Your email is incorrect</p>
        </div>
        `
        passValidityStatus.innerHTML = `
        <div style="background-color: rgba(255, 0, 0, 0.26)">
            <p class="text-center text-danger">Enter a password containing atleast 8 letters(both lowercase & uppercase), 1 number & a special case </p>
        </div>
        `
    }
}
