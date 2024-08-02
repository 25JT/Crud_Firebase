import { signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { auth } from './conection.js'
const logout = document.querySelector('#logout')

logout.addEventListener('click', async () => {
  await signOut(auth)
  console.log("salio")
})