import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessageUsername, setErrorMessageUsername] = useState('');
  const [errorMessagePassword, setErrorMessagePassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.get(`https://petals.ath.cx/test/login.jsp?username=${username}&password=${password}`);
      if (response.data.ok) {
        console.log('Login successful');
        // Redirect or perform further actions upon successful login
      } else {
        if (response.data.error.username) {
          setErrorMessageUsername(response.data.error.username);
          setErrorMessagePassword('');
          setErrorMessage('');
        } else if (response.data.error.password) {
          setErrorMessagePassword(response.data.error.password);
          setErrorMessageUsername('');
          setErrorMessage('');
        } else if (response.data.error.error) {
          setErrorMessage(response.data.error.error);
          setErrorMessageUsername('');
          setErrorMessagePassword('');
        } else {
          setErrorMessage('An error occurred');
          setErrorMessageUsername('');
          setErrorMessagePassword('');
        }
      }
    } catch (error) {
      setErrorMessage('An error occurred');
      setErrorMessageUsername('');
      setErrorMessagePassword('');
    }
  };

  return (
    <div className='container'>
      <div className='image-section'>
        <img className='ing2' src='/assets/Tiredness-amico.png' alt='log' width='500' height='500' />
        
      </div>
      <img className='img1' src='/assets/logo5.png' alt='logo'  />
      <div className='form-section'>
        <div className='content'>
          <div className='login-container'>
            {errorMessage && <p className='err1'>{errorMessage}</p>}
                        <div className="input-wrapper">
                          <h1 className='cen'>Login</h1>
              <p>User Name</p>
              <input className='name' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            </div>
            {errorMessageUsername && <p className='err'>{errorMessageUsername}</p>}
            <div className="input-wrapper">
              <p>Password</p>
              <input className='pword' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            {errorMessagePassword && <p className='err'>{errorMessagePassword}</p>}
            <button className='btn' onClick={handleLogin}>Login</button>
            <h5 className='sign'>Don't have an account? <a href="signup.html">SIGN UP</a></h5>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
