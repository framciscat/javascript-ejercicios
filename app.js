window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const usuario = document.getElementById('usuario')
    const email = document.getElementById('email')
    const pass = document.getElementById('pass')
    const passConfirm = document.getElementById('passConfirm')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validacion()
    })

    const validacion = () => {
        const usuarioValor = usuario.value.trim()
        const emailValor = email.value.trim()
        const passValor = pass.value.trim()
        const passConfirmValor = passConfirm.value.trim();


        // VALIDANDO USUARIO
        if(!usuarioValor){
            validaFallo(usuario, 'Campo vacío')
        }else{
            validaCorrecto(usuario)
        }

        //validando campo email
        if(!emailValor){
            validaFallo(email, 'Campo vacío')            
        }else if(!validaEmail(emailValor)) {
            validaFallo(email, 'El e-mail no es válido')
        }else {
            validaCorrecto(email)
        }

    }

    
    const validaFallo = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }

    const validaCorrecto = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control correcto'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
})