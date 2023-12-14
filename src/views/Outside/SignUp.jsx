// src/components/SignUp.jsx

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../components/config/firebase';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { STATUS } from "../../utils/status";
import { useEffect } from "react";
import { fetchAsyncGenres } from "../../redux/utils/genreUtils";
import {
  Preloader,

  Title,
} from "../../components/common/index";

import { capivara_two } from '../../utils/images';  
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Usuário criado com sucesso
      console.log('Usuario criado com sucesso');
    } catch (error) {
      console.error('Erro ao criar usuário', error);
    }
  };

  return (
    <SignUpPageWrapper style={{
      background : `linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), linear-gradient(248.75deg, rgba(0, 159, 157, 0.41) 0%, rgba(15, 10, 60, 0.41) 38.46%), url(${capivara_two}) center/100% 115% no-repeat`
      }} className='background'>
        <div className='sc-aboutus'>
        <div className='container' style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)), linear-gradient(248.75deg, rgba(0, 159, 157, 0.41) 0%, rgba(15, 10, 60, 0.41) 38.46%)` }}> 

          <section className='section-signup'>
          <Title titleName={{
                        firstText: "Sign",
                        secondText: "Up"
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
      <p>
      <Link to='/' onClick={handleSignUp} className='banner-btn d-flex align-items-center'>
        Criar conta
      </Link>
      <Link to="/Login" className="text">               
                        I already have an account
                    </Link>
      </p>
          </section>
    
      
      </div>
        </div>
    </SignUpPageWrapper>
  );
};

export default SignUp;

const SignUpPageWrapper = styled.div`
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
}
.section-signup {
  justify-content: center;
  align-items: center;
}
.sc-aboutus{
  display: flex;
    min-height: 100vh;
    padding-top: 65px;
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
  padding-left: 30%;
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
`