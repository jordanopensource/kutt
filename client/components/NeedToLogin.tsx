import React from "react";
import styled from "styled-components";

const Jumbotron = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem; 
  background-color: #be3e62;
  width: 100%; 

  @media (min-width: 900px) {
    padding-top: 6rem;
    padding-bottom: 6rem; 
    height: 30rem;
    vertical-align: center;
  }
`;

const JumbotronContainer = styled.div`
  width: 100%; 
`;

const MainDiv = styled.div`
  display: flex; 
  padding-left: 1.5rem;
  padding-right: 1.5rem; 
  flex-direction: row; 
  flex-wrap: wrap; 
  justify-content: space-between; 
  align-items: center; 
  
  @media (min-width: 768px) {
    padding-left: 3rem;
    padding-right: 3rem; 
    flex-wrap: nowrap; 
  }
`;

const JOSAsShortener = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0; 
  width: 100%; 
  color: #ffffff;

  h2 {
    font-size: 2.25rem;
    line-height: 2.5rem; 
  }

  h3 {
    font-size: 1.5rem;
    line-height: 2rem; 
    font-weight: bold;
  }

  p {
    font-size: 1.35rem;
    line-height: 1.75rem; 
  }

  @media (min-width: 768px) {
    width: 50%; 
    padding-right: 2rem; 
  }

  @media (min-width: 1024px) { 
    width: 35%; 
   }

  @media (min-width: 900px) {
    margin-left: 15rem;
  }
`;

const BotsImage = styled.div`
  display: inline; 
  object-fit: contain; 
  width: 100%; 
  height: 100%; 

  img {
    width: 320px;
    height: auto;
  }

  @media (min-width: 1024px){
    img {
      width: 350px;
    }
  }

  @media (min-width: 900px) {
    margin-left: 19rem;
  }

  @media (max-width: 767px) {
    margin-top: 3rem;
    justify-content: center;
  }
`;

const NeedToLogin = () => (
  <Jumbotron>
    <JumbotronContainer>
      <MainDiv>
        <JOSAsShortener>
          <h2>
            JOSA's Own Link Shortener
          </h2>
          <p>
            Life is too short to not have your 
            links shortened. Start now to 
            magically convert long URLs into 
            6-character long ones under the JOSA brand. 
          </p>
          <h3>
            Good things come in small links. 
          </h3>
        </JOSAsShortener>
        <BotsImage>
          <img src="images/bots.svg" alt="JOSA Bots" />
        </BotsImage>
      </MainDiv>
    </JumbotronContainer>
  </Jumbotron>
);

export default NeedToLogin; 