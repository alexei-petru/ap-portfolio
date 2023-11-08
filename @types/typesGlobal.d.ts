import "@emotion/react";
import { AppTheme } from "../src/constants-types/typesLocal";
import { MantineTheme } from "@mantine/core";

declare module "@emotion/react" {
  export interface Theme extends AppTheme, MantineTheme {}
}
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TEST_EMAIL: string;
      EMAIL_LOGIN_RECEIVE: string;
      ETHERAL_LOGIN_APP_SEND: string;
      ETHERAL_PSW_APP_SEND: string;
      ZOHO_EMAIL_SEND: string;
      ZOHO_PSW_SEND: string;
      HCAPTCHA_SITE_KEY: string;
      APOD_KEY: string;
    }
  }
}
