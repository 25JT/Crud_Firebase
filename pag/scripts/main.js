import { onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js"
import { getDocs, collection} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"
import { loginCheck } from './loginCheck.js'
import { auth, db } from "./conection.js"
import './registro.js'
import './logout.js'
import './login.js'
import './googlelogin.js'
import  {setupPosts } from'./postlist.js'




onAuthStateChanged(auth, async (user)  =>{
    
    if(user){
      const queryS =  await getDocs(collection(db, 'users')) 
      setupPosts(queryS.docs)
      
    }else{
        setupPosts([])
         
     }

     loginCheck(user)

})
