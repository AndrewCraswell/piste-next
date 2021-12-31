import styled from "@emotion/styled"
import {
  Callout,
  DirectionalHint,
  Nav,
  Persona,
  PersonaSize,
  Text,
} from "@fluentui/react"
import { HeaderButton } from "./components"
import { useRouter } from "next/router"
import { useDisclosure } from "$hooks"

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

export const HeaderAvatar = styled(HeaderButton)`
  align-items: center;
  display: flex;
  justify-content: center;
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

  li[role="listitem"] a {
    padding: 0 20px 0;
  }
`

export const AppShell: React.FunctionComponent = ({ children }) => {
  const router = useRouter()
  const {
    isOpen: isUserMenuOpen,
    onToggle: toggleUserMenu,
    onClose: onUserMenuDismissed,
  } = useDisclosure(false)

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

          <HeaderAvatar id="headerAvatar" onClick={() => toggleUserMenu()}>
            <Persona
              imageUrl="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-1/cp0/p40x40/42202440_10155749668661451_975321746469027840_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=dbb9e7&_nc_ohc=9DvLQgIW6YsAX8na_oU&_nc_ht=scontent-sea1-1.xx&oh=00_AT9sfpou2rF6gl1-xX83z9oUVej3RLOlzyirS3FgVe8lbw&oe=61F5D411"
              size={PersonaSize.size32}
              hidePersonaDetails={true}
              imageAlt="Andrew Craswell"
            />
          </HeaderAvatar>

          <Callout
            target="#headerAvatar"
            isBeakVisible={false}
            directionalHint={DirectionalHint.bottomRightEdge}
            style={{ width: 320, padding: "20px 24px" }}
            hidden={!isUserMenuOpen}
            onDismiss={onUserMenuDismissed}
            minPagePadding={0}
          >
            <Text block variant="xLarge">
              Callout title here
            </Text>
            <Text block variant="small">
              Message body is optional. If help documentation is available,
              consider adding a link to learn more at the bottom.
            </Text>
          </Callout>
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
