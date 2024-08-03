import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "./Button";
import InputBox from "./InputBox";

function LoginForm() {
  const [isUserRegistered, setIsUserRegistered] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [username, setUserName] = useState('');
  const [question, setQuestionAnswer] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    setIsUserRegistered(prevState => !prevState);
  };

  async function handleFormSubmit(e) {
    e.preventDefault();
    setMessage('');

    if (!isUserRegistered && password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const endpoint = isUserRegistered ? '/api/login' : '/api/register';
    const payload = { email, password , username , question};

    try {
      const response = await axios.post(endpoint, payload);
      if (response.status === 200) {
        setMessage(isUserRegistered ? "Login successful" : "Registration successful");
        localStorage.setItem('token', response.data.token); // Save token to localStorage
        isUserRegistered ?  navigate('/') : ( handleClick ) (navigate('/login')); // Navigate to dashboard
      } else {
        setMessage(response.data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error: ' + (error.response?.data?.message || error.message));
    }
  }

  return (
    <form className="form container" onSubmit={handleFormSubmit}>
      {!isUserRegistered && (
        <InputBox type="name" id="username" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
      )}
      <InputBox type="text" id="username" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <InputBox type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {!isUserRegistered && (<>
        <InputBox type="password" id="conf-password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <select className="ipt " aria-label="Small select example"  value={question} onChange={(e) => setQuestionAnswer(e.target.value)}>
          <option selected>AnnaUniv (CEG/ACTECH) Student ?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        </>)}
      
      <Button type="submit" id="login-btn" text={isUserRegistered ? "Login" : "Register"} />
      {isUserRegistered ? (
        <p className="forget">
          Forgot Password / New User? <a href="#" onClick={handleClick}>Click Here</a>
        </p>
      ):(<p className="forget">
        Already a User? <a href="#" onClick={handleClick}>Click Here</a>
      </p>)}
      {message && <p>{message}</p>}
    </form>
  );
}

export default LoginForm;
