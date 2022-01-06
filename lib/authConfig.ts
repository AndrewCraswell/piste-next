import { Configuration, PublicClientApplication } from "@azure/msal-browser"
import { LogLevel } from "@azure/msal-browser"

export const b2cPolicies = {
  names: {
    signUpSignIn: "B2C_1_piste_signupsignin",
    forgotPassword: "B2C_1_piste_reset",
  },
  authorities: {
    signUpSignIn: {
      authority:
        "https://pisteapp.b2clogin.com/pisteapp.onmicrosoft.com/B2C_1_piste_signupsignin",
    },
    forgotPassword: {
      authority:
        "https://pisteapp.b2clogin.com/pisteapp.onmicrosoft.com/B2C_1_piste_reset",
    },
  },
  authorityDomain: "pisteapp.b2clogin.com",
}

export const msalConfig: Configuration = {
  auth: {
    clientId: "a2263523-40bc-4fce-b7c6-173df761752a",
    authority: b2cPolicies.authorities.signUpSignIn.authority,
    knownAuthorities: [b2cPolicies.authorityDomain],
    redirectUri: "/",
    postLogoutRedirectUri: "/",
  },
  cache: {
    cacheLocation: "localStorage",
  },
  system: {
    loggerOptions: {
      loggerCallback: (logLevel, message) => {
        if (process.env.NEXT_PUBLIC_ENABLE_MSAL_LOGGER === "true") {
          console.log("[MSAL]", message)
        }
      },
      logLevel: LogLevel.Verbose,
      piiLoggingEnabled: false,
    },
  },
}

export const msal = new PublicClientApplication(msalConfig)
