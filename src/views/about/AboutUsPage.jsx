import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';


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

import { capiMago, capi_cool, capi_smooke, capivarias } from '../../utils/images';  


const AboutUsPage = () => {

    useEffect(() => {
        dispatch(fetchAsyncGenres());
       
      }, []);

    const dispatch = useDispatch();
    const games = useSelector(selectAllGames);
    const gamesStatus = useSelector(selectAllGamesStatus);
    const genres = useSelector(selectAllGenres);
    const genresStatus = useSelector(selectAllGenresStatus);



    return (
        <AboutUsPageWrapper>
            <div className='sc-aboutus section'>
                <div className='container1'> 
                    <Title titleName={{
                        firstText: "our",
                        secondText: "team"
                    }}/>
                  <section className='imageContainer'>           
                      <div className='card' style = {{
                          background: `linear-gradient(rgba(7, 5, 27, 0.9), rgba(0, 0, 0, 0.95)),  url(${capivarias}) center/100% 115% no-repeat`
                        }} >
                          <div className="card-top">
                            <img src={capi_cool}/>
                          </div>
                          <div className='card-bottom text-white'>
                          <h4 className='card-title'>Thais Florentin</h4>
                          </div>
                          <ul className='card-list-group text-white'>
                          <li className='list-group-item'>
                            <span className='item-left'>E-mail: </span>
                            <span className='item-right'>thais.florentin26@gmail.com</span>
                          </li>
                          <li className='list-group-item'>
                            <span className='item-left'>Github: </span>
                            <span className='item-right'>https://github.com/LennyBla</span>
                          </li>
                          <li className='list-group-item'>
                            <span className='item-left'>Linkedin: </span>
                            <span className='item-right'>https://www.linkedin.com/in/thais-florentin-silvero-da-cruz/</span>
                          </li>
                          </ul>
                      </div>
                      <div className='card-1' style = {{
                          background: `linear-gradient(rgba(7, 5, 27, 0.9), rgba(0, 0, 0, 0.95)),  url(${capivarias}) center/100% 115% no-repeat`
                        }} >
                          <div className="card-top">
                            <img src={capi_smooke}/>
                          </div>
                          <div className='card-bottom text-white'>
                          <h4 className='card-title'>Suzy Wellen</h4>
                          </div>
                          <ul className='card-list-group text-white'>
                          <li className='list-group-item'>
                            <span className='item-left'>E-mail: </span>
                            <span className='item-right'>suzy.wellen07@gmail.com</span>
                          </li>
                          <li className='list-group-item'>
                            <span className='item-left'>Github: </span>
                            <span className='item-right'>https://github.com/SuzyWellen07</span>
                          </li>
                          <li className='list-group-item'>
                            <span className='item-left'>Linkedin: </span>
                            <span className='item-right'>https://www.linkedin.com/in/suzy-wellen-oliveira/</span>
                          </li>
                          </ul>
                      </div>
                      <div className='card-2' style = {{
                          background: `linear-gradient(rgba(7, 5, 27, 0.9), rgba(0, 0, 0, 0.95)),  url(${capivarias}) center/100% 115% no-repeat`
                        }} >
                          <div className="card-top">
                            <img src={capiMago}/>
                          </div>
                          <div className='card-bottom text-white'>
                          <h4 className='card-title'>Lara Victoria</h4>
                          </div>
                          <ul className='card-list-group text-white'>
                          <li className='list-group-item'>
                            <span className='item-left'>E-mail: </span>
                            <span className='item-right'>Laravicspereira@gmail.com</span>
                          </li>
                          <li className='list-group-item'>
                            <span className='item-left'>Github: </span>
                            <span className='item-right'>https://github.com/LaraVic9</span>
                          </li>
                          <li className='list-group-item'>
                            <span className='item-left'>Linkedin: </span>
                            <span className='item-right'>https://www.linkedin.com/in/lara-victoria-de-souza-pereira/</span>
                          </li>
                          </ul>
                      </div>
                      
                  </section>
                </div>

              

            </div>
        </AboutUsPageWrapper>
    )
}

export default AboutUsPage;

const AboutUsPageWrapper = styled.div`
background-color: var(--clr-violet-dark-active);
.sc-aboutus{
    min-height: 100vh;
    padding-top: 65px;
    flex: 1;
}

.container1 {
  
  flex-direction: row;
  
}


.image_mago {
  width: 200px;
}

.imageContainer {
  padding-top: 60px;
  
}

.card {
  min-height: 60px;
  width: 360px;
  margin-bottom: 80px;
  padding: 16px 32px 24px 32px;
  text-align: center;
  margin-bottom: -350px;
  margin-left: 50px; 

}
.card-title{
  font-size: 24px;
}

.card-top{
  height: 150px;
  width: 150px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -75px;
  border: 2px solid var(--clr-white);
  transition: var(--transition-default);

  &:hover{
    transform: scale(1.1);
  }
}

.card-bottom{
  margin-top: 48px;
}

.list-group-item{
  margin-top: 8px;
  .item-left{
    font-weight: 600;
  }
}

.card-1 {
  min-height: 60px;
  width: 360px;
  margin-bottom: -350px;
  padding: 16px 32px 24px 32px;
  text-align: center;
  margin-left: 450px;
  
}

.card-2 {
  min-height: 60px;
  width: 360px;
  margin-bottom: 90px;
  margin-top: -10;
  padding: 16px 32px 24px 32px;
  text-align: center;
  margin-left: 850px;
}
`