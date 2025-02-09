const formLogin = document.getElementById('form'); 
const usuarioLogin = document.getElementById('usuario-input'); 
const senhaLogin = document.getElementById('senha-input'); 
const erroMensagemLogin = document.getElementById('erro-mensagem-login'); 

formLogin.addEventListener('submit', (event) => {
    let errors = getLoginFormErrors();

    if (errors.length > 0) {
        event.preventDefault(); // Impede o envio do formulário
        erroMensagemLogin.innerText = errors.join(", ");  
    } else {
        erroMensagemLogin.innerText = ""; // Limpa os erros antes de redirecionar
        window.location.href = "Home.html";
    }
});

function getLoginFormErrors() {
    let errors = [];

    if (usuarioLogin.value.trim() === '') {
        errors.push('Nome de usuário necessário');
        usuarioLogin.parentElement.classList.add('incorreto');  
    } else {
        usuarioLogin.parentElement.classList.remove('incorreto');  
    }

    if (senhaLogin.value.trim() === '') {
        errors.push('Senha necessária');
        senhaLogin.parentElement.classList.add('incorreto');  
    } else {
        senhaLogin.parentElement.classList.remove('incorreto');  
    }

    return errors;  
}

// Removendo erro visual quando o usuário começa a digitar novamente
const allInputsLogin = [usuarioLogin, senhaLogin];

allInputsLogin.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorreto')) {
            input.parentElement.classList.remove('incorreto');  
            erroMensagemLogin.innerText = '';  
        }
    });
});

