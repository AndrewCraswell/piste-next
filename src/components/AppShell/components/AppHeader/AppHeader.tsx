import { appInsights } from "$components/ApplicationInsightsProvider"
import { PistePanel } from "$components/PistePanel"
import { useAccountProfile, useDisclosure } from "$hooks"
import { IStyleableProps } from "$types"
import { LogoutOptions, useAuth0 } from "@auth0/auth0-react"
import styled from "@emotion/styled"
import { useCallback } from "react"
import { HeaderButton, UserMenu } from "./components"

export const headerHeight = 48

const Header = styled.header`
  background-color: ${({ theme }) => theme.fluentV9.colorBrandBackground};
  color: ${({ theme }) => theme.fluentV9.colorNeutralForegroundOnBrand};
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

export interface IAppHeaderProps extends IStyleableProps {}

export const AppHeader: React.FunctionComponent<IAppHeaderProps> = ({
  className,
}) => {
  const { isOpen, onClose, onToggle } = useDisclosure()
  const { account } = useAccountProfile()
  const { logout } = useAuth0()

  const handleLogout = useCallback(
    (options?: LogoutOptions) => {
      appInsights.clearAuthenticatedUserContext()
      return logout(options)
    },
    [logout]
  )

  return (
    <>
      <Header className={className}>
        <HeaderInner>
          {/* TODO: Parameterize this */}
          <HeaderButton icon="Waffle" variant="large" />
          <BrandingAnchor href="/">
            {import.meta.env.VITE_BRANDING_NAME}
          </BrandingAnchor>

          <CenterRegion></CenterRegion>

          {/* TODO: Allow actions to be passed in */}
          {/* TODO: Collapse down to ellipse on small screens */}
          <HeaderButton icon="Ringer" onClick={onToggle} />
          <HeaderButton icon="Settings" />

          {/* TODO: Pass all user menu props up to the AppShell level */}
          <UserMenu
            avatarUrl={account.Picture}
            fullName={account.FullName}
            email={account.Email}
            logout={handleLogout}
          />
        </HeaderInner>
      </Header>
      <PistePanel
        headerText="Notifications"
        isOpen={isOpen}
        onDismiss={onClose}
        closeButtonAriaLabel="Close"
        isLightDismiss={true}
        isBlocking={true}
      ></PistePanel>
    </>
  )
}
