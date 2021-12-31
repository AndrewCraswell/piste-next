import { useAuthenticatedUser } from "$hooks"
import styled from "@emotion/styled"
import { Nav } from "@fluentui/react"
import { HeaderButton } from "./components"
import { useRouter } from "next/router"

const AppRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const AppHeader = styled.header`
  background-color: ${({ theme }) => theme.palette.accent};
  color: #fff;
  height: 48px;
`
AppHeader.defaultProps = {
  role: "banner",
}

const HeaderInner = styled.div`
  height: 48px;
  line-height: 48px;
  display: flex;
  border-spacing: 0;
  white-space: nowrap;
`

const BrandingAnchor = styled.a`
  color: inherit;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  padding: 0 4px;
  margin: 0 4px;

  &:visited {
    color: inherit;
  }
`

const CenterRegion = styled.div`
  flex: 1 0 auto;
  justify-content: center;
  display: inherit;
`

export const HeaderAvatar = styled.button`
  background-color: inherit;
  color: inherit;
  line-height: inherit;
  border: none;
  min-width: 48px;
  padding: 0;

  &:hover {
    background-color: ${({ theme }) => theme.palette.themeDarker};
    transition: background-color 0.467s cubic-bezier(0.1, 0.9, 0.2, 1) 34ms;
    cursor: pointer;
  }

  &:focus {
    outline: #fff 1px solid;
    outline-offset: -1px;
  }
`

const PageContainer = styled.div`
  padding: 32px;
  overflow-y: auto;
  width: 100%;
`

const PageContent = styled.main`
  max-width: 1024px;
  width: 100%;
`

const AppMain = styled.div`
  display: flex;
  flex-grow: 1;
`

const AppNavContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.neutralLighterAlt};
  display: flex;

  .ms-FocusZone {
    display: flex;
  }
`

const AppNav = styled(Nav)`
  width: 200px;
`

export const AppShell: React.FunctionComponent = ({ children }) => {
  const user = useAuthenticatedUser()
  const router = useRouter()

  return (
    <AppRoot>
      <AppHeader>
        <HeaderInner>
          <HeaderButton icon="Waffle" variant="large" />
          <BrandingAnchor href="/">
            {process.env.NEXT_PUBLIC_SITE_NAME}
          </BrandingAnchor>

          <CenterRegion></CenterRegion>

          <HeaderButton icon="Message" />
          <HeaderButton icon="Settings" />

          <HeaderAvatar>O</HeaderAvatar>
        </HeaderInner>
      </AppHeader>

      <AppMain>
        <AppNavContainer>
          <AppNav
            onLinkClick={(event, item) => {
              if (item) {
                event?.preventDefault()
                router.push(item.url)
              }
            }}
            groups={[
              {
                name: "",
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
        </AppNavContainer>

        <PageContainer>
          <PageContent>{children}</PageContent>
        </PageContainer>
      </AppMain>
    </AppRoot>
  )
}

// TODO:
// Profile button
//  Popup window, signout options
// Nav
