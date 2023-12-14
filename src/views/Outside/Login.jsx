// src/components/SignIn.jsx

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../components/config/firebase';
import styled from 'styled-components';
import { STATUS } from "../../utils/status";
  import { useEffect } from "react";
  import { fetchAsyncGenres } from "../../redux/utils/genreUtils";
  import {
    Preloader,

    Title,
  } from "../../components/common/index";
  import { Link } from "react-router-dom";


import { capivaldo } from '../../utils/images';  

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Usuario criado com sucesso');
      // Usuário logado com sucesso
    } catch (error) {
      console.error('Erro ao fazer login', error);
    }
  };

  return (
    <LoginUsPageWrapper style={{
      background : `linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), linear-gradient(248.75deg, rgba(0, 159, 157, 0.41) 0%, rgba(15, 10, 60, 0.41) 38.46%), url(${capivaldo}) center/100% 115% no-repeat`
      }} className='background'>

      <div className='sc-aboutus'>

      <div className='container' style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), linear-gradient(248.75deg, rgba(0, 159, 157, 0.41) 0%, rgba(15, 10, 60, 0.41) 38.46%)` }}> 



      <section className='section-login'>
      <Title titleName={{
              firstText: "Sign",
              secondText: "In"
          }}/>
    
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className='input'
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='input'
      />
       <Link to='/' onClick={handleSignIn} className='banner-btn d-flex align-items-center'>
        Login
      </Link>
      <Link to="/Signup" className="text">               
                        I don't have an account
                    </Link>
    </section>
    </div>
    </div>

     
    </LoginUsPageWrapper>
  );
};

export default Login;

const LoginUsPageWrapper = styled.div`
background-color: var(--clr-violet-dark-active);
.container {
  border: 1px solid white;
  border-radius: 20px;
  margin-bottom: 100px;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-left: 30px;
  width: 350px;
  margin-top: 65px;
}
.section-login {
  justify-content: center;
  align-items: center;
}
.sc-aboutus{
  display: flex;
    min-height: 100vh;
    
}
.sc-popular {
    background-color: var(--clr-violet-dark-active);
    .section-btn {
      margin-top: 60px;
    }
  }
  .sc-join {
    min-height: 640px;
    .join-content {
      max-width: 600px;
    }
    .join-title {
      text-shadow: 0px 4px 4px 0px #00000040;
      font-size: 44px;
      letter-spacing: 0.09em;
      span {
        color: var(--clr-green-normal);
        font-family: var(--font-family-right);
      }
    }
  }
  .sc-genres {
    background-color: var(--clr-violet-dark-active);
  }
  .sc-stores {
    min-height: 841px;
  }
.button {
  background-color: #fff;
  width: 240px;
  height: 40px;
  border-radius: 40px;
  margin: 5px;
}
.banner-btn{
  min-width: 140px;
  width: 280px;
  height: 45px;
  padding-left: 38%;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  border: 2px solid var(--clr-green-normal);
  margin-top: 33px;
  color: white;
  border-radius: 5px;
  .btn-icon{
    margin-right: 16px;
  }
  &:hover{
    background-color: var(--clr-green-normal);
    .btn-text{
      color: var(--clr-white);
      
    }
  }
}
.input {
  width: 280px;
  height: 40px;
  margin-bottom: 20px;
  border-radius: 3px;
  padding: 0 10px 0 10px;
}
.text {
  color: white;
  padding-top: 30px;
}
.capis {
  width: 600px;
  height: 650px;
}
`