import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from './conection.js'
import { showMessage } from './showMessage.js'
const sigInForm = document.querySelector('#login-form')

sigInForm.addEventListener('submit',  async e => {
    e.preventDefault()

    const email = sigInForm['login-email'].value
    const password = sigInForm['login-password'].value

   

    try{
        const credential = await signInWithEmailAndPassword (auth, email,password)
        console.log(credential)
//ocultar modal
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
        modal.hide()

        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.parentNode.removeChild(backdrop);
        }


        showMessage("Bienvenido " + credential.user.email );
        
    }catch (error){
        console.log(error)
       if(error.code === 'auth/invalid-email'){
        showMessage("Correo no existente", 'error')
       }
       else if (error.code === 'auth/invalid-credential'){
        showMessage("contraseña incorrecta", 'error')
       }else{
        showMessage(error.message, 'error')
       }

    }

})