import styled from "@emotion/styled"
import { AppHeader, AppNav, AppPage } from "./components"

const AppRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const AppMain = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.palette.neutralLighterAlt};
  overflow-y: hidden;
`

export const AppShell: React.FunctionComponent = ({ children }) => {
  return (
    <AppRoot>
      <AppHeader />
      <AppMain>
        <AppNav
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
        <AppPage>{children}</AppPage>
        {/* TODO: Add a footer inside the AppPage */}
      </AppMain>
    </AppRoot>
  )
}
