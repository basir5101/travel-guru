import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
    }
    const [user, setUser] = useState({
        newUser: true,
    })
    // input field update
    const handleInputField = (e) =>{
        const newUser = {...user};
        newUser[e.target.name] = e.target.value;
        setUser(newUser);
    }
    // sign In with email and password
    const signIn = (e) => {
       if(user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const userInfo = {...loggedInUser};
                userInfo.isLogged = true;
                setLoggedInUser(userInfo);
                history.replace(from);
            })
            .catch(error =>{
                console.log(error.message)
            })
       }

        e.preventDefault() ;
    }
    //sign up with email and password
    const signUp = (e) => {
        if(user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                const userInfo = {...loggedInUser};
                userInfo.isLogged = true;
                setLoggedInUser(userInfo);
                history.replace(from);
            })
            .catch(error =>{
                console.log(error.message);
            })
        }
        e.preventDefault();
    }
    
    const toggleCondition = (e) => {
        if(user.newUser){
            const userInfo = {...user};
            userInfo.newUser = false;
            setUser(userInfo);
        } else {
            const userInfo = {...user};
            userInfo.newUser = true;
            setUser(userInfo);
        }
        e.preventDefault();
    }
    // sign in with google
    var provider = new firebase.auth.GoogleAuthProvider();
    const googleSignIn = () =>{
        firebase.auth().signInWithPopup(provider)
        .then(res =>{
            const userInfo = {...loggedInUser};
            userInfo.isLogged = true;
            setLoggedInUser(userInfo);
            history.replace(from);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    return (
        <div>
            <form className = 'travel-form'>
               {
                   user.newUser ?  
                   <h4 className = 'text-center'>Create New Account</h4> :
                   <h4 className = 'text-center'>Log In</h4> 
               }
                {
                    user.newUser && <div>
                        <input type="text" name="firstName" placeholder= 'first name'/>
                        <input type="text" name="lastName" placeholder= 'last name'/>
                    </div>
                }
                <input type="text" name="email" placeholder= 'username or email' onBlur = {handleInputField} />
                <input type="password" name="password" placeholder= 'password' onBlur = {handleInputField} />
                {
                   user.newUser && <input type="password" name="confirmPassword" placeholder= 'confirm password'/>
                }
                <br/>
                <br/>
                <div className = 'text-center'>
               {
                   user.newUser ? 
                   <Button onClick = {signUp} variant = 'warning' >Sign Up</Button> :
                   <Button onClick = {signIn} variant = 'warning' >Sign In</Button>
               }
                <div>
                    {
                        user.newUser ? <button onClick = {toggleCondition}>Already Have An Acount</button> : <button onClick = {toggleCondition}>Crate new Account</button>
                    }
                </div>
                    <Button onClick = {googleSignIn} variant = 'warning' >Sign In With Google</Button>
                </div>
                
            </form>
        </div>
    );
};

export default Login;