import { login } from './utils';
import './index.css';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleEmail(event) {
    const emailValue = event.target.value
    setEmail(emailValue);
  }

  function handlePassword(event) {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
  }

  function handleLogin() {
    setIsLoading(true);
    setError('');

    login({email: email, password: password})
      .then(() => {
        setIsLoading(false)
        alert("Sucesso!")

      })
      .catch((err) =>
        {setError(err.message)
        })
      .finally(() => {
        setIsLoading(false);
      })
  }


  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        <div className='errorMessage'>{error}</div>
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={email} onChange={handleEmail} />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={password} onChange={handlePassword}/>
        </div>

        <div className='button'>
          <button id="login" disabled={!email || password.length < 6 || isLoading} onClick={() => handleLogin()}>Login</button>
        </div>
      </div>
    </div>
  );
}
