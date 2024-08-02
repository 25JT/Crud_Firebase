import { GoogleAuthProvider , signInWithPopup } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from './conection.js'
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector('#googleLogin')

googleButton.addEventListener('click', async () =>{

    const provider = new GoogleAuthProvider()

    try{
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
        modal.hide()
        showMessage ("Bienvenido " + credentials.user.displayName, 'success')


        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.parentNode.removeChild(backdrop);
        }


    }catch (error){
        console.log(error)
    }
    

})