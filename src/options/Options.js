import React from 'react';
import logo from '../logo.svg';
import './Options.css';

function generatePassword(length) {
  let password = '';
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*';
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n));
  }
  return password;
}

function Options() {
  const [password, setPassword] = React.useState('');
  const handleClick = () => {
    const pw = generatePassword(12);
    setPassword(pw);
  };
  React.useEffect(() => {
    const pw = generatePassword(12);
    setPassword(pw);
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='App-title'>Strong Password</div>

        <img src={logo} className='App-logo' alt='logo' />

        <div className='App-password'>{password}</div>

        <button className='App-button' onClick={handleClick}>Generate Password</button>
      </header>
    </div>
  );
}

export default Options;
