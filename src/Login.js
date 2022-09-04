import React from 'react'
import './Login.css'
import { loginURL, getTokenFromUrl } from './spotify.js';
/*
    1. CLick login button
    2. Redirect to spotify
    3. spotif will auth then return back to our page with a access token 
    4. get the token
 */
function Login(props) {
    return (
    <div className="login">
        <img
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""/>
        <a href={loginURL}>LOGIN WITH SPOTIFY</a>
    </div>
    );
}


export default Login