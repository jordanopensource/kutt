import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Flex } from "reflexbox/styled-components";

import { Button } from "./Button";
import { fadeIn } from "../helpers/animations";
import { Col } from "./Layout";

const Wrapper = styled(Flex).attrs({
  width: 1200,
  maxWidth: "100%",
  alignItems: "center",
  margin: "0 0 0",
  flexDirection: ["column", "column", "row"]
})`
  animation: ${fadeIn} 0.8s ease-out;
  box-sizing: border-box; 

  @media (min-width: 832px) {
    margin-top: 0;
  }

  @media (max-width: 831px) { 
    p {
      padding-left: 10%;
      padding-right: 10%;
    }
  }
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 48px;
  text-align: left;

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
`;

const Image = styled.img`
  flex: 0 0 100%;
  width: 100%;
  max-width: 100%;
  height: auto;

  @media only screen and (max-width: 768px) {
    flex-basis: 100%;
    width: 80%;
    margin-left: 10%;
    margin-top: 5%;
    margin-bottom: 10%;
  }
`;

const NeedToLogin = () => (
  <Wrapper>
    <Col
      alignItems={["left", "left", "flex-start"]}
      paddingTop="0px"
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
      backgroundColor="#ee4d7a"
    >
      <Image src="/images/bots.svg" />
    </Col>
  </Wrapper>
);

export default NeedToLogin; 
