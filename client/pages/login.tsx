import { useFormState } from "react-use-form-state";
import React, { useEffect, useState } from "react";
import { Flex } from "reflexbox/styled-components";
import emailValidator from "email-validator";
import styled from "styled-components";
import Router from "next/router";
import Link from "next/link";
import axios from "axios";

import { useStoreState, useStoreActions } from "../store";
import { APIv2, DISALLOW_REGISTRATION } from "../consts";
import { ColCenterV } from "../components/Layout";
import AppWrapper from "../components/AppWrapper";
import NeedToLogin from "../components/NeedToLogin";
import { TextInput } from "../components/Input";
import { fadeIn } from "../helpers/animations";
import { Button } from "../components/Button";
import Text, { H2 } from "../components/Text";
import ALink from "../components/ALink";
import Icon from "../components/Icon";
import Footer from "../components/Footer";
import AppWrapperBlack from "../components/AppWrapperBlack";

const LoginForm = styled(Flex).attrs({
  as: "form",
  flexDirection: "column"
})`
  animation: ${fadeIn} 0.8s ease-out;
`;

const Email = styled.span`
  font-weight: normal;
  color: #512da8;
  border-bottom: 1px dotted #999;
`;

const LoginWrapper = styled.div `
  background-color: none;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const LoginPage = () => {
  const { isAuthenticated } = useStoreState(s => s.auth);
  const login = useStoreActions(s => s.auth.login);
  const [error, setError] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [loading, setLoading] = useState({ login: false, signup: false });
  const [formState, { email, password, label }] = useFormState<{
    email: string;
    password: string;
  }>(null, { withIds: true });

  useEffect(() => {
    if (isAuthenticated) Router.push("/");
  }, [isAuthenticated]);

  function onSubmit(type: "login" | "signup") {
    return async e => {
      e.preventDefault();
      const { email, password } = formState.values;

      if (loading.login || loading.signup) return null;

      if (!email) {
        return setError("Email address must not be empty.");
      }

      if (!emailValidator.validate(email)) {
        return setError("Email address is not valid.");
      }

      if (password.trim().length < 8) {
        return setError("Password must be at least 8 chars long.");
      }

      setError("");

      if (type === "login") {
        setLoading(s => ({ ...s, login: true }));
        try {
          await login(formState.values);
          Router.push("/");
        } catch (error) {
          setError(error.response.data.error);
        }
      }

      if (type === "signup" && !DISALLOW_REGISTRATION) {
        setLoading(s => ({ ...s, signup: true }));
        try {
          await axios.post(APIv2.AuthSignup, { email, password });
          setVerifying(true);
        } catch (error) {
          setError(error.response.data.error);
        }
      }

      setLoading({ login: false, signup: false });
    };
  }

  if (isAuthenticated) {
    return null;
  }

  return (
    <AppWrapperBlack>
      <LoginWrapper>
      <ColCenterV maxWidth="100%" px={3} flex="0 0 auto" mt={4}>
        {verifying ? (
          <H2 textAlign="center" light>
            A verification email has been sent to{" "}
            <Email>{formState.values.email}</Email>.
          </H2>
        ) : (
          <LoginForm id="login-form" onSubmit={onSubmit("login")}>
            <Text {...label("email")} marginX="1rem" as="label" mb={2} bold color="#ffffff" fontSize="1.15rem">
              Email address:
            </Text>
            <TextInput
              {...email("email")}
              placeholder="Email address..."
              height={[56, 64, 72]}
              fontSize={[15, 16]}
              px={[4, 40]}
              marginX="1rem"
              mb={[24, 4]}
              width={[300, 400]}
              maxWidth="100%"
              autoFocus
            />
            <Text {...label("password")} marginX="1rem" as="label" mb={2} bold color="#ffffff" fontSize="1.15rem">
              Password:
            </Text>
            <TextInput
              {...password("password")}
              placeholder="Password..."
              px={[4, 40]}
              height={[56, 64, 72]}
              fontSize={[15, 16]}
              width={[300, 400]}
              maxWidth="100%"
              mb={[24, 4]}
              marginX="1rem"
            />
            <Flex justifyContent="center">
              <Button
                alignSelf="center"
                flex="1 1 auto"
                height={[44, 56]}
                onClick={onSubmit("login")}
                maxWidth={[150, 150]}
                fontSize="1.15rem"
              >
                <Icon
                  name={loading.login ? "spinner" : "login"}
                  stroke="white"
                  mr={2}
                />
                Log in
              </Button>
            
            </Flex>
            <Link href="/reset-password">
              <ALink
                href="/reset-password"
                title="Forget password"
                fontSize="1rem"
                alignSelf="center"
                my={16}
                color="#0b96ab !important"
              >
                Forgot your password?
              </ALink>
            </Link>
            <Text alignSelf="center" color="red" mb={2} mt={1} normal>
              {error}
            </Text>
          </LoginForm>
        )}
      </ColCenterV>
      </LoginWrapper>
      <Footer />
    </AppWrapperBlack>
  );
};

export default LoginPage;
