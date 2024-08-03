import React from "react";
import LoginForm from "./LoginForm";


const LoginHeader = () => (
    <div className="logHeader">
        <span id="loginfrm">
            <h1 id="welcome">Welcome to CED!</h1>
            <h5 id="conttxt">Enter Details to Continue</h5>
        </span>
    </div>
);

function GlassBox(){
    return (
    <div className="container">
        <div className="boxlogin">
            <LoginHeader />
            <LoginForm /> 
            
        </div>
    </div>);
}

export default GlassBox;