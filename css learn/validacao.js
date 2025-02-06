const form = document.getElementById('formulario')
const usuario = document.getElementById('usuario-input')
const senha = document.getElementById('senha-input')
const email = document.getElementById('email-input')
const repetesenha = document.getElementById('repete-senha')
const erro_mensagem = document.getElementById('erro-mensagem')

// Adicionando um evento para capturar o envio do formulário
form.addEventListener('submit', (event) => {
    let errors = []

    // Verifica se os campos foram preenchidos corretamente
    errors = getSignupFormErrors(usuario.value, email.value, senha.value, repetesenha.value)

    // Se houver erros, o formulário não será enviado
    if (errors.length > 0) {
        event.preventDefault(); // Impede o envio do formulário
        erro_mensagem.innerText = errors.join(", ");
    } else {
        // Se não houver erros, redireciona para Home.html
        window.location.href = "Home.html";
    }

})

function getSignupFormErrors(usuario, email, senha, repetesenha) {
    let errors = []

    if (usuario.trim() === '') {
        errors.push('Nome de usuário necessário')
        usuario = document.getElementById('usuario-input')
        usuario.parentElement.classList.add('incorreto')
    }

    if (email.trim() === '') {
        errors.push('Email necessário')
        email = document.getElementById('email-input')
        email.parentElement.classList.add('incorreto')
    }

    if (senha.trim() === '') {
        errors.push('Senha necessária')
        senha = document.getElementById('senha-input')
        senha.parentElement.classList.add('incorreto')
    }

    if (senha !== repetesenha) {
        errors.push('As senhas precisam ser iguais')
        senha = document.getElementById('senha-input')
        repetesenha = document.getElementById('repete-senha')
        senha.parentElement.classList.add('incorreto')
        repetesenha.parentElement.classList.add('incorreto')
    }

    return errors;
}

// Removendo erro visual quando o usuário começa a digitar novamente
const allInputs = [usuario, senha, email, repetesenha]

allInputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorreto')) {
            input.parentElement.classList.remove('incorreto')
            erro_mensagem.innerText = ''
        }
    })
})
