import React from "react";
import styled from "styled-components";
import { Flex } from "reflexbox/styled-components";

import { fadeIn } from "../helpers/animations";
import { Col } from "./Layout";

const Wrapper = styled(Flex).attrs({
  maxWidth: "100%",
  alignItems: "center",
  margin: "0 0 0",
  flexDirection: ["column", "column", "row"]
})`
  animation: ${fadeIn} 0.8s ease-out;
  box-sizing: border-box; 

  @media (min-width: 832px) {
    margin-top: 0;

    p {
      margin-left: 30%;
    }
  }
 
  p {
    padding-left: 10%;
    padding-right: 10%;
  }

  @media (min-width: 832px) and (max-width: 1076px) {
    background-color: #22292c;
  }
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 48px;
  text-align: left;
  padding-left: 10%;
  padding-right: 10%;

  @media (min-width: 832px) {
    margin-left: 30%;
  }

  @media only screen and (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 32px;
    padding: 0;
  }

  @media only screen and (max-width: 448px) {
    font-size: 30px;
    margin-bottom: 24px;
  }

  @media (max-width: 831px) {
    padding-left: 10%;
    padding-right: 10%;
  }

  @media (max-width: 639px) {
    margin-top: -10px;
  }
`;

const Image = styled.img`
  flex: 0 0 60%;
  width: 60%;
  max-width: 60%;
  height: auto;

  @media only screen and (max-width: 831px) {
    flex-basis: 100%;
    width: 100%;
    margin-left: 20%;
    margin-top: 10%;
    margin-bottom: 10%;
  }

  @media (min-width: 832px) {
    padding-top: 10%;
    padding-bottom: 10%;
    margin-left: 10%;
    padding-right: 10%;
    width: 100%;
  }
`;

const NeedToLogin = () => (
  <Wrapper>
    <Col
      alignItems={["left", "left", "flex-start"]}
      paddingTop="0px"
      backgroundColor="#22292c"
    >
      <Title>
        JOSA's Own Link Shortener
      </Title>
      <p>
        Life is too short to not have your links 
        shortened. Start now to magically convert 
        long URLs into 6-character long ones under 
        the JOSA brand.
      </p>
      <p>
        <b>Good things come in small links.</b>
      </p>
    </Col>
    <Col
    backgroundColor="#22292c"
    >
      <Image src="/images/bots.svg" />
    </Col>
  </Wrapper>
);

export default NeedToLogin; 
