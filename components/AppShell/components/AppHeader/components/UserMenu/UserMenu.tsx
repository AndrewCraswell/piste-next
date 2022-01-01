import { useDisclosure } from "$hooks"
import styled from "@emotion/styled"
import {
  ActionButton,
  Callout,
  Text,
  DirectionalHint,
  Persona,
  PersonaSize,
} from "@fluentui/react"
import { useId } from "@fluentui/react-hooks"
import { HeaderButton } from "../HeaderButton"

export const HeaderAvatar = styled(HeaderButton)`
  align-items: center;
  display: flex;
  justify-content: center;
`

const TransparentPersona = styled(Persona)`
  .ms-Persona-initials {
    background-color: transparent;
  }
`

export interface IUserMenuProps {
  avatarUrl?: string
  fullName?: string
  email?: string
  logout?: () => void
}

export const UserMenu: React.FunctionComponent<IUserMenuProps> = ({
  avatarUrl,
  fullName,
  email,
  logout,
}) => {
  const avatarId = useId("headerAvatar")
  const {
    isOpen: isUserMenuOpen,
    onToggle: toggleUserMenu,
    onClose: onUserMenuDismissed,
  } = useDisclosure(false)

  return (
    <>
      <HeaderAvatar id={avatarId} onClick={toggleUserMenu}>
        <TransparentPersona
          imageUrl={avatarUrl}
          size={PersonaSize.size32}
          hidePersonaDetails={true}
          imageAlt={fullName}
        />
      </HeaderAvatar>
      <Callout
        target={`#${avatarId}`}
        isBeakVisible={false}
        directionalHint={DirectionalHint.bottomRightEdge}
        style={{ width: 320, padding: "20px" }}
        hidden={!isUserMenuOpen}
        onDismiss={onUserMenuDismissed}
        minPagePadding={0}
      >
        <div style={{ display: "flex" }}>
          <Persona
            coinSize={88}
            hidePersonaDetails={true}
            imageAlt=""
            style={{ marginRight: 20 }}
          />
          <div
            style={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginLeft: 20,
            }}
          >
            {fullName ? <Text variant="xLarge">{fullName}</Text> : null}
            {email ? <Text>{email}</Text> : null}

            <div>
              <ActionButton
                href="/profile"
                iconProps={{
                  iconName: "ContactCard",
                }}
                style={{
                  padding: 0,
                  height: 20,
                  marginTop: 6,
                  display: "block",
                }}
                styles={{ icon: { marginLeft: 0 } }}
              >
                My profile
              </ActionButton>

              {logout ? (
                <ActionButton
                  onClick={logout}
                  iconProps={{
                    iconName: "SignOut",
                  }}
                  style={{
                    padding: 0,
                    height: 20,
                    marginTop: 6,
                    display: "block",
                  }}
                  styles={{ icon: { marginLeft: 0 } }}
                >
                  Sign out
                </ActionButton>
              ) : null}
            </div>
          </div>
        </div>
      </Callout>
    </>
  )
}
