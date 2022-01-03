import { useAuthenticatedUser, useDisclosure } from "$hooks"
import { IStyleableProps } from "$types"
import { useMsal } from "@azure/msal-react"
import styled from "@emotion/styled"
import { Panel } from "@fluentui/react"
import { useCallback } from "react"
import { HeaderButton, UserMenu } from "./components"

const Header = styled.header`
  background-color: ${({ theme }) => theme.palette.themePrimary};
  color: #fff;
  height: 48px;
`
Header.defaultProps = {
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

const NotificationsPanel = styled(Panel)`
  .ms-Panel-main {
    top: 48px;
  }
`

export interface IAppHeaderProps extends IStyleableProps {}

export const AppHeader: React.FunctionComponent<IAppHeaderProps> = ({
  className,
}) => {
  const { instance } = useMsal()
  const user = useAuthenticatedUser()
  const { isOpen, onClose, onToggle } = useDisclosure()

  const logout = useCallback(() => {
    instance.logoutRedirect()
  }, [instance])

  return (
    <>
      <Header className={className}>
        <HeaderInner>
          {/* TODO: Parameterize this */}
          <HeaderButton icon="Waffle" variant="large" />
          <BrandingAnchor href="/">
            {/* TODO: Parameterize the siteName */}
            {process.env.NEXT_PUBLIC_SITE_NAME}
          </BrandingAnchor>

          <CenterRegion></CenterRegion>

          {/* TODO: Allow actions to be passed in */}
          {/* TODO: Collapse down to ellipse on small screens */}
          <HeaderButton icon="Ringer" onClick={onToggle} />
          <HeaderButton icon="Settings" />

          {/* TODO: Pass all user menu props up to the AppShell level */}
          <UserMenu
            // Get fullName from profile
            fullName={"Andrew Craswell"}
            email={user?.username}
            logout={logout}
          />
        </HeaderInner>
      </Header>
      <NotificationsPanel
        headerText="Notifications"
        isOpen={isOpen}
        onDismiss={onClose}
        closeButtonAriaLabel="Close"
        isLightDismiss={true}
        isBlocking={true}
      ></NotificationsPanel>
    </>
  )
}
