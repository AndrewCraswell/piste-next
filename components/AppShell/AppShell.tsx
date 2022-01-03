import { useSitemapGroups } from "$hooks"
import { useBreadcrumbs } from "$hooks/useBreadcrumbs"
import styled from "@emotion/styled"
import { AppHeader, AppNav, AppPage } from "./components"
import { AppBreadcrumbs } from "./components/AppBreadcrumbs"

const AppRoot = styled.div`
  display: grid;
  grid-template-rows: min-content auto;
  grid-template-areas:
    "header"
    "main";
  height: 100%;
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

  return (
    <AppRoot>
      <Header />
      <AppMain>
        <Nav links={sitemap} />
        <AppBreadcrumbs crumbs={crumbs} />
        <Page>{children}</Page>
        {/* TODO: Add a footer inside the AppPage */}
      </AppMain>
    </AppRoot>
  )
}
