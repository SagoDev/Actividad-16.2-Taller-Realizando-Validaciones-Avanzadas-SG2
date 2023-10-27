function myValidations() {
    let password1 = document.getElementById('password1');
    let password2 = document.getElementById('password2');
    let terminos = document.getElementById('terminos');
    let validity = true;


    if (password1.value != password2.value || !password1.checkValidity()) {
        password2.setCustomValidity(false);
        validity = false;
    } else {
        password2.setCustomValidity("");
    }


    if (!terminos.checked) {
        validity = false;
        document.getElementById("btn-modal-terminos").classList.add('text-danger');
        document.getElementById("feedback-modal-terminos").style.display = "inline";
    } else {
        document.getElementById("btn-modal-terminos").classList.remove('text-danger');
        document.getElementById("feedback-modal-terminos").style.display = "none";
    }

    return validity;
}

document.getElementById("myForm").addEventListener("submit", event => {
    if (!myValidations() || !this.checkValidity()){
        event.preventDefault();
        event.stopPropagation();
    }
    document.body.classList.add('was-validated');
    ['change', 'input'].forEach(ev => { 
        document.body.addEventListener(ev, myValidations)
    });
});





