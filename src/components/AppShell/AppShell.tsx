import { OnboardingGate } from "$components/OnboardingGate"
import { useSitemapGroups } from "$hooks"
import { useBreadcrumbs } from "$hooks/useBreadcrumbs"
import styled from "@emotion/styled"
import { Outlet } from "react-router-dom"
import { AppHeader, AppNav, AppPage } from "./components"
import { AppBreadcrumbs } from "./components/AppBreadcrumbs"
import { useFlags } from "launchdarkly-react-client-sdk"

const AppRoot = styled.div`
  display: grid;
  grid-template-rows: min-content auto;
  grid-template-areas:
    "header"
    "main";
  height: 100vh;
  overflow-y: hidden;
`

const Header = styled(AppHeader)`
  grid-area: header;
`

const AppMain = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: min-content auto;
  grid-template-rows: min-content 1fr;
  grid-template-areas:
    "nav page-header"
    "nav body";
  background-color: ${({ theme }) => theme.palette.neutralLighterAlt};
  overflow-y: auto;
`

const Nav = styled(AppNav)`
  grid-area: nav;
`

const Page = styled(AppPage)`
  grid-area: body;
`

export const AppShell: React.FunctionComponent = ({ children }) => {
  // TODO: Lift the nav links outside of the AppShell
  const crumbs = useBreadcrumbs()
  const sitemap = useSitemapGroups({
    flatten: true,
    tagName: "nav",
    injectLinkShims: true,
  })

  const { onboarding: isOnboardingEnabled } = useFlags()

  return (
    <AppRoot>
      <Header />
      <AppMain>
        <Nav links={sitemap} />
        <AppBreadcrumbs crumbs={crumbs} />
        <Page>
          {isOnboardingEnabled ? (
            <OnboardingGate>
              <Outlet />
            </OnboardingGate>
          ) : (
            <Outlet />
          )}
        </Page>
        {/* TODO: Add a footer inside the AppPage */}
      </AppMain>
    </AppRoot>
  )
}
