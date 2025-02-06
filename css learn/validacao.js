const formLogin = document.getElementById('form'); 
const usuarioLogin = document.getElementById('usuario-input'); 
const senhaLogin = document.getElementById('senha-input'); 
const erroMensagemLogin = document.getElementById('erro-mensagem-login'); 


formLogin.addEventListener('submit', (event) => {
    let errors = []


    errors = getLoginFormErrors(usuarioLogin.value, senhaLogin.value)

    if (errors.length > 0) {
        event.preventDefault(); 
        erroMensagemLogin.innerText = errors.join(", ");  
    } else {

        window.location.href = "Home.html";
    }
})

function getLoginFormErrors(usuario, senha) {
    let errors = []


    if (usuario.trim() === '') {
        errors.push('Nome de usuário necessário')
        usuarioLogin.parentElement.classList.add('incorreto')  


    if (senha.trim() === '') {
        errors.push('Senha necessária')
        senhaLogin.parentElement.classList.add('incorreto') 
    }

    return errors;  
}


const allInputsLogin = [usuarioLogin, senhaLogin]

allInputsLogin.forEach(input => {
    input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('incorreto')) {
            input.parentElement.classList.remove('incorreto') 
            erroMensagemLogin.innerText = '' 
        }
    })
})
