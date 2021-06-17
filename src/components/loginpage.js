import react from 'react'
import {useAuth} from './contexts/AuthContext'
import {useRef, useEffect, useState} from 'react'
import {AuthProvider} from './contexts/AuthContext'
import AuthConfig from '../firebase'
import {  useHistory } from 'react-router-dom'
 export const LoginPage = () => {
     const history = useHistory('/')
     const emailRef = useRef()
     const passwordRef = useRef()
     const passwordConfirmRef = useRef()
     // const signUp = useAuth()
     // const handleSubmit = (e) => {
     //     e.preventDefault()
     //     signUp(emailRef.current.value, passwordRef.current.value)
     // }

     const [email, setEmail] = useState(null)


     const signUp = (e) => {
    e.preventDefault();
    AuthConfig
      .auth()
      .createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
    setEmail(emailRef.current.value);
    history.push('/')
  };

    const signIn = (e) => {
        e.preventDefault()
        AuthConfig
        .auth()
        .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
      setEmail(emailRef.current.value)
      history.push('/')
    }
     useEffect(() => {
         console.log(AuthConfig)
     }, [] )
    return(<>
        <p>Sign up</p>
        <form onSubmit={signUp}>
        <label for ='email'>Email</label>
        <input type = 'email' id = 'e-mail'  ref ={emailRef}required/>

        <label for ='password'>Password</label>
        <input type = 'password' id = 'password' ref ={passwordRef} required/>

        <label for ='password-confirm'>Confirm Password</label>
        <input type = 'password' id = 'password-confirm' ref ={passwordConfirmRef} required/>
        <button type = 'submit'> Sign up</button>
        </form>

        <p>Already have an account? log in</p>
        <form onSubmit={signIn}>
        <label for ='email'>Email</label>
        <input type = 'email' id = 'e-mail'  ref ={emailRef}required/>

        <label for ='password'>Password</label>
        <input type = 'password' id = 'password' ref ={passwordRef} required/>


        <button type = 'submit'> Sign up</button>
        </form>


        </>
    )
}
export default LoginPage
