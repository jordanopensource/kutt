import React from "react";
import Router from "next/router";

import { DISALLOW_ANONYMOUS_LINKS } from "../consts";
import NeedToLogin from "../components/NeedToLogin";
import LinksTable from "../components/LinksTable";
import AppWrapper from "../components/AppWrapper";
import Shortener from "../components/Shortener";
import Footer from "../components/Footer";
import { useStoreState } from "../store";

const Homepage = () => {
  const isAuthenticated = useStoreState(s => s.auth.isAuthenticated);

  if (
    !isAuthenticated &&
    DISALLOW_ANONYMOUS_LINKS &&
    typeof window !== "undefined"
  ) {
    Router.push("/login");
    return null;
  }

  return (
    <AppWrapper>
      <NeedToLogin />  
      {isAuthenticated && <Shortener />} 
      {isAuthenticated && <LinksTable />} 
      <Footer />
    </AppWrapper>
  );
};

export default Homepage;
