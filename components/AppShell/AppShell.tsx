import { useSitemapGroups } from "$hooks"
import { useBreadcrumbs } from "$hooks/useBreadcrumbs"
import styled from "@emotion/styled"
import { Breadcrumb } from "@fluentui/react"
import router from "next/router"
import { AppHeader, AppNav, AppPage } from "./components"

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

const AppBreadcrumb = styled(Breadcrumb)`
  margin: 0;
  grid-area: page-header;
  //background-color: ${({ theme }) => theme.palette.neutralLighter};
  line-height: 44px;
  padding: 0 24px;

  li > a,
  button {
    ${({ theme }) => theme.fonts.medium as unknown as string};
  }

  .ms-TooltipHost {
    pointer-events: none;
  }
`

export const AppShell: React.FunctionComponent = ({ children }) => {
  const breadcrumbs = useBreadcrumbs()
  const sitemap = useSitemapGroups({
    flatten: true,
    tagName: "nav",
  })

  return (
    <AppRoot>
      <Header />
      <AppMain>
        <Nav links={sitemap} />

        <AppBreadcrumb
          items={breadcrumbs}
          maxDisplayedItems={3}
          ariaLabel="Breadcrumb with items rendered as links"
          overflowAriaLabel="More links"
          onClick={(event) => {
            if (event.target instanceof HTMLAnchorElement) {
              event.preventDefault()
              router.push(event.target.href)
            }
          }}
        />
        <Page>{children}</Page>
        {/* TODO: Add a footer inside the AppPage */}
      </AppMain>
    </AppRoot>
  )
}
