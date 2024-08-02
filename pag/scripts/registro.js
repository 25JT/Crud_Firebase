import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { auth } from "./conection.js";
import { showMessage } from './showMessage.js'

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email, password);

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);

        // Cerrar el modal de registro
        const signupModal = document.querySelector('#signupModal');
        const modalInstance = bootstrap.Modal.getInstance(signupModal);
        modalInstance.hide();
        showMessage("Bienvenido " + userCredential.user.email );
       

        // Eliminar manualmente la superposición (backdrop) si es necesario
        const backdrop = document.querySelector('.modal-backdrop');
        if (backdrop) {
            backdrop.parentNode.removeChild(backdrop);
        }

    } catch (error) {
        if (error.code === 'auth/invalid-email')
           showMessage("correo incorrecto", "error"  );
        
        else if (error.code === 'auth/weak-password') {
            showMessage("La contraseña debe contener minimo 8 caracteres", "error"  );
        }
        else if (error.code === 'auth/email-already-in-use'){
            
            showMessage("El correo ya existe ", "error"  );
        }
        else if (error.code){
            showMessage("Error en la contraseña o el correo", "error"  );
        }

        
    }

    
});
