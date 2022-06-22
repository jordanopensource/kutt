import React, { FC, useEffect } from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background-color: #1a1f21;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 1.75rem;

  @media (min-width: 992px) {
    height: 16rem;
    padding-top: 7rem;
    width: 100%;
    margin-right: 0;
    margin-left: 0;
    padding-bottom: 0;
  }
`; 

const Footer: FC = () => {
  const FooterContainer = styled.div`
    font-color: #ffffff;
    align-items: center;
    height: 100%;

    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
      padding-right: 6rem;
      padding-left: 6rem;
      margin-right: 0;
      margin-left: 0;
    }
`;

const WebsiteInfo = styled.div`
  display: flex; 
  padding: 2rem; 
  justify-content: center; 
  align-items: center;  

  @media (min-width: 992px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

const OtherInfo = styled.div`
  padding-left: 2rem;
  padding-right: 2rem; 
  padding-bottom: 2rem; 

  @media (min-width: 992px) {
    display: flex;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
  }
`;

const Copyright = styled.div`
  padding-top: 1.25rem; 
  text-align: center;
  
  @media (min-width: 992px) {
    text-align: right;
  }
`;

const SocialMedia = styled.div`
  display: flex; 
  justify-content: center; 
  align-items: center; 

  img {
    display: inline; 
    height: 1rem; 
  }

  @media (min-width: 992px) {
    justify-content: flex-end;
  }
`;

const ImageContainer = styled.div`
  display: flex; 

  @media (min-width: 992px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem; 
  }

  img {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    height: 2rem;
  }
`;

const Para = styled.div`
  font-size: 1rem;
  line-height: 1rem; 
  color: #ffffff; 
  font-weight:400;

  @media (min-width: 992px) {
    font-size: 0.875rem;
    line-height: 1.25rem; 
  }
`;

  return (
    <FooterSection>
      <FooterContainer>
        <WebsiteInfo>

        </WebsiteInfo>
        <OtherInfo>
          <SocialMedia>
            <ImageContainer>
              <a href="https://github.com/jordanopensource"
                target="_blank">
                <img 
                  src="images/github.svg"
                  alt="Github Account"
                  width="auto"
                  />
              </a>
              <a href="https://twitter.com/jo_osa"
                target="_blank">
                <img 
                  src="images/twitter.svg"
                  alt="Twitter Account"
                  width="auto"
                  />
              </a>
              <a href="https://www.facebook.com/jordanopensource/"
                target="_blank">
                  <img 
                    src="images/facebook.svg"
                    alt="Facebook Page"
                    width="auto"
                    />
              </a>
            </ImageContainer>
          </SocialMedia>
          <Copyright>
            <Para>
              <img 
                src="images/cc.svg" 
                alt="CC"
                height="16"
                width="auto"
                />
               {" 2022, JOSA - Jordan Open Source Association "}
            </Para>
          </Copyright>
        </OtherInfo>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;        
