import react from 'react'
import {useAuth} from './contexts/AuthContext'
import {useRef, useEffect, useState} from 'react'
import {AuthProvider} from './contexts/AuthContext'
import AuthConfig from '../firebase'
import {  useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


 export const LoginPage = (props) => {
     const history = useHistory('/')
     const emailRef = useRef()
     const passwordRef = useRef()
     const passwordConfirmRef = useRef()
     // const signUp = useAuth()
     // const handleSubmit = (e) => {
     //     e.preventDefault()
     //     signUp(emailRef.current.value, passwordRef.current.value)
     // }

     // const [email, setEmail] = useState(null)


     const signUp = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
    props.setEmail(emailRef.current.value);
    history.push('/')
  };

    const signIn = (e) => {
        e.preventDefault()
        firebase
        .auth()
        .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
        .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
      props.setEmail(emailRef.current.value)
      history.push('/')

      axios
    .get("https://glacial-mesa-83865.herokuapp.com/testAPI")
    .then((response) => {
        props.setUserList(response.data)
                    }

                )
            }

     useEffect(() => {
         console.log(AuthConfig)
     }, [] )
    return(<>
        {props.email ? <p>{props.email}</p> : ''}
        <p>Sign up</p>
        <form onSubmit={signUp}>
        <label for ='email'>Email</label>
        <input type = 'email' id = 'e-mail'  ref ={emailRef}required/>

        <label for ='password'>Password</label>
        <input type = 'password' id = 'password' ref ={passwordRef} required/>


        <button type = 'submit'> Sign up</button>
        </form>

        <p>Already have an account? log in</p>
        <form onSubmit={signIn}>
        <label for ='email'>Email</label>
        <input type = 'email' id = 'e-mail'  ref ={emailRef}required/>

        <label for ='password'>Password</label>
        <input type = 'password' id = 'password' ref ={passwordRef} required/>


        <button type = 'submit'> Sign in</button>
        </form>
        <Link className = 'button' to='/'>Back </Link>

        </>
    )
}
export default LoginPage
