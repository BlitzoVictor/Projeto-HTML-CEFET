const form = document.getElementById('formulario'); 
const usuario = document.getElementById('usuario-input');
const senha = document.getElementById('senha-input');
const email = document.getElementById('email-input');
const repetesenha = document.getElementById('repete-senha');
const erroMensagem = document.getElementById('erro-mensagem');

// Adiciona evento de submit ao formulário
form.addEventListener('submit', (event) => {
    let errors = getSignupFormErrors(usuario, email, senha, repetesenha);

    if (errors.length > 0) {
        event.preventDefault(); 
        erroMensagem.innerText = errors.join(", ");
    } else {
        window.location.href = "Home.html";
    }
});

function getSignupFormErrors(usuario, email, senha, repetesenha) {
    let errors = [];

    // Remove classes de erro antes de validar
    [usuario, email, senha, repetesenha].forEach(input => input.parentElement.classList.remove('incorreto'));

    if (usuario.value.trim() === '') {
        errors.push('Nome de usuário necessário');
        usuario.parentElement.classList.add('incorreto');
    }

    if (email.value.trim() === '') {
        errors.push('Email necessário');
        email.parentElement.classList.add('incorreto');
    }

    if (senha.value.trim() === '') {
        errors.push('Senha necessária');
        senha.parentElement.classList.add('incorreto');
    }

    if (senha.value !== repetesenha.value) {
        errors.push('As senhas precisam ser iguais');
        senha.parentElement.classList.add('incorreto');
        repetesenha.parentElement.classList.add('incorreto');
    }

    return errors;
}

// Remove erro visual quando o usuário começa a digitar novamente
[usuario, senha, email, repetesenha].forEach(input => {
    input.addEventListener('input', () => {
        input.parentElement.classList.remove('incorreto');
        erroMensagem.innerText = '';
    });
});
