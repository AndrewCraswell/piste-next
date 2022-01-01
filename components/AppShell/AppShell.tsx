import styled from "@emotion/styled"
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
  grid-template-areas:
    "nav body"
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
  return (
    <AppRoot>
      <Header />
      <AppMain>
        <Nav
          links={[
            {
              links: [
                { name: "Dashboard", url: "/", icon: "ViewDashboard" },
                { name: "Calendar", url: "/calendar", icon: "Calendar" },
                { name: "Clubs", url: "/clubs", icon: "Teamwork" },
                { name: "Billing", url: "/billing", icon: "PaymentCard" },
              ],
            },
            {
              name: "Club",
              links: [
                { name: "Classes", url: "/classes", icon: "Education" },
                { name: "Coaching", url: "/coaching", icon: "UserEvent" },
                { name: "Challenge", url: "/challenge", icon: "Diamond" },
                { name: "Armory", url: "/armory", icon: "DeveloperTools" },
                { name: "Store", url: "/store", icon: "OfficeStoreLogo" },
              ],
            },
            {
              name: "Events",
              links: [
                { name: "Clinics", url: "/clinics", icon: "Certificate" },
                {
                  name: "Tournaments",
                  url: "/tournaments",
                  icon: "Trophy2",
                },
              ],
            },
          ]}
        />
        <Page>{children}</Page>
        {/* TODO: Add a footer inside the AppPage */}
      </AppMain>
    </AppRoot>
  )
}
