import styled from "@emotion/styled"
import { Outlet } from "react-router-dom"

import { useBreadcrumbs } from "$hooks/useBreadcrumbs"
import { AppHeader, AppNav, AppPage } from "./components"
import { AppBreadcrumbs } from "./components/AppBreadcrumbs"
import { useSitemapGroups } from "$hooks/sitemap"
import { useAccountAppRoles } from "$hooks/authorization/useAccountAppRoles"
import { useAccountClubRoles } from "$hooks/authorization/useAccountClubRoles"
import { PropsWithChildren } from "react"

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

export function AppShell({ children }: PropsWithChildren<{}>) {
  const appRoles = useAccountAppRoles()
  const clubRoles = useAccountClubRoles()

  // TODO: Lift the nav links outside of the AppShell
  const crumbs = useBreadcrumbs()
  const sitemap = useSitemapGroups({
    flatten: true,
    tagName: "nav",
    injectLinkShims: true,
    rbacRoles: {
      appRoles,
      clubRoles,
    },
  })

  return (
    <AppRoot>
      <Header />
      <AppMain>
        <Nav links={sitemap} />
        <AppBreadcrumbs crumbs={crumbs} />
        <Page>
          <Outlet />
        </Page>
        {/* TODO: Add a footer inside the AppPage */}
      </AppMain>
    </AppRoot>
  )
}
