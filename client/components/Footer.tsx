import React, { FC, useEffect } from "react";
import getConfig from "next/config";

import showRecaptcha from "../helpers/recaptcha";
import { useStoreState } from "../store";
import { ColCenter } from "./Layout";
import ReCaptcha from "./ReCaptcha";
import ALink from "./ALink";
import Text from "./Text";

const { publicRuntimeConfig } = getConfig();

const Footer: FC = () => {
  const { isAuthenticated } = useStoreState(s => s.auth);

  useEffect(() => {
    showRecaptcha();
  }, []);

  return (
    <ColCenter
      as="footer"
      width={1}
      backgroundColor="#1a1f21"
      p={isAuthenticated ? 2 : 24}
    >
      {isAuthenticated && <ReCaptcha />}
      <Text fontSize={[16, 17]} py={2} color="#ffffff">
        A website of JOSA{" "}
      </Text>
    </ColCenter>
  );
};

export default Footer;
