import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaGamepad } from 'react-icons/fa';

import {
    selectAllGenres,
    selectAllGenresStatus,
  } from "../../redux/store/genreSlice";
  import {
    selectAllGames,
    selectAllGamesStatus,
  } from "../../redux/store/gameSlice";
  import { STATUS } from "../../utils/status";
  import { useEffect } from "react";
  import { fetchAsyncGenres } from "../../redux/utils/genreUtils";
  import {
    Preloader,
   
    Title,
  } from "../../components/common/index";

  import { banner_welcome } from '../../utils/images'; 
const Welcome = () => {

  

    return (
        <AboutUsPageWrapper style={{
          background : ` url(${banner_welcome}) center/cover no-repeat`}}>
            <div className='sc-aboutus'>
                <div className='container1'> 
                    
                   <p className="lead-title">
                     Explore the gaming world with us! 
                   </p>
                   <p className="lead-text">
                  
                   Discover the latest releases, in-depth reviews, and join an active gaming community. Enjoy exclusive offers, stay updated with real-time news, and embark on a journey of endless entertainment. Welcome to our gaming universe, where the excitement never ends!
                  </p>
                    
                <section>
                 
                    <a href='/Login'>
                    <button type="button" className='banner-btn d-flex align-items-center'>     
                      <span className='btn-text text-green '>Login</span>
                    </button>
                    </a>
                    <a href='/Signup'>
                    <button type="button" className='banner-btn d-flex align-items-center'>     
                      <span className='btn-text text-green '>Sign Up</span>
                    </button>
                    </a>
                </section>
                </div>
                
            </div>
           

        </AboutUsPageWrapper>
    )
}

export default Welcome;

const AboutUsPageWrapper = styled.div`
background-color: var(--clr-violet-dark-active);

.sc-aboutus{
  display: flex;
    min-height: 100vh;
    padding-top: 65px;
}

.container1 {
  padding-left: 30px;
  width: 500px;
}

.sc-popular {
   
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
  width: 240px;
  height: 45px;
  padding-left: 38%;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  border: 2px solid var(--clr-green-normal);
  margin-top: 33px;
  margin-left: 30px;
  padding-left: 100px;

  .btn-icon{
    margin-right: 16px;
  }

  .btn-text {
    
  }

  &:hover{
    background-color: var(--clr-green-normal);
    .btn-text{
      color: var(--clr-white);
      
    }
  }
}

.lead-text {
  color: white;
}

.lead-title {
  color: white;
  font-size: 50px;
  font-weight: bold;
}

`