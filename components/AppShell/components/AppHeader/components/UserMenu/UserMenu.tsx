import { useDisclosure, useLinkShims } from "$hooks"
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
import { useRouter } from "next/router"
import { useCallback } from "react"
import { HeaderButton } from "../HeaderButton"

const HeaderAvatar = styled(HeaderButton)`
  align-items: center;
  display: flex;
  justify-content: center;
`

const TransparentPersona = styled(Persona)`
  .ms-Persona-initials {
    background-color: transparent;
  }
`

const MenuCallout = styled(Callout)`
  & > div {
    width: 320px;
    padding: 20px;
  }
`

const MenuContent = styled.div`
  display: flex;
`

const LogoutButton = styled(ActionButton)`
  padding: 0;
  height: 20px;
  margin-top: 6px;
  display: block;

  i {
    margin-left: 0;
  }
`

const MenuInner = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`

const ProfileButton = styled(ActionButton)`
  padding: 0;
  height: 20px;
  margin-top: 6px;
  display: block;

  i {
    margin-left: 0;
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
  const router = useRouter()
  const linkShims = useLinkShims()
  const {
    isOpen: isUserMenuOpen,
    onToggle: toggleUserMenu,
    onClose: onUserMenuDismissed,
  } = useDisclosure(false)

  const onLinkClicked = useCallback(
    (event) => {
      linkShims.onClick(event)
      onUserMenuDismissed()
    },
    [linkShims, onUserMenuDismissed]
  )

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
      <MenuCallout
        target={`#${avatarId}`}
        isBeakVisible={false}
        directionalHint={DirectionalHint.bottomRightEdge}
        hidden={!isUserMenuOpen}
        onDismiss={onUserMenuDismissed}
        minPagePadding={0}
      >
        <MenuContent>
          <Persona coinSize={88} hidePersonaDetails={true} imageAlt="" />
          <MenuInner>
            {fullName ? <Text variant="xLarge">{fullName}</Text> : null}
            {email ? <Text>{email}</Text> : null}

            <ProfileButton
              href="/profile"
              onClick={onLinkClicked}
              onMouseOver={linkShims.onMouseOver}
              iconProps={{
                iconName: "ContactCard",
              }}
            >
              My profile
            </ProfileButton>

            {logout ? (
              <LogoutButton
                onClick={logout}
                iconProps={{
                  iconName: "SignOut",
                }}
              >
                Sign out
              </LogoutButton>
            ) : null}
          </MenuInner>
        </MenuContent>
      </MenuCallout>
    </>
  )
}
