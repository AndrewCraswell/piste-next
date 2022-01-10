import { useDisclosure, useLinkShims } from "$hooks"
import styled from "@emotion/styled"
import { ActionButton, Text, Persona } from "@fluentui/react"
import {
  Avatar,
  Popover,
  PopoverSurface,
  PopoverTrigger,
} from "@fluentui/react-components"
import { useCallback, useRef } from "react"
import { HeaderButton } from "../HeaderButton"

const AvatarContainer = styled.div`
  height: 100%;
  z-index: 1000;
`

const HeaderAvatar = styled(HeaderButton)`
  align-items: center;
  display: flex;
  justify-content: center;
`

const TransparentAvatar = styled(Avatar)`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.white};
`

const MenuContent = styled.div`
  display: flex;
  line-height: normal !important;
`

const ActionsContainer = styled.div`
  margin-top: 6px;

  a,
  button {
    margin-top: 6px;
  }
`

const LogoutButton = styled(ActionButton)`
  padding: 0;
  height: 20px;
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
  const avatarRef = useRef(null)
  const linkShims = useLinkShims()
  const { isOpen, onToggle, onClose } = useDisclosure(false)

  const onLinkClicked = useCallback(
    (event) => {
      linkShims.onClick(event)
      onClose()
    },
    [linkShims, onClose]
  )

  return (
    <>
      <Popover noArrow mountNode={avatarRef.current || undefined} open={isOpen}>
        <PopoverTrigger>
          <AvatarContainer ref={avatarRef} onClick={onToggle}>
            <HeaderAvatar>
              <TransparentAvatar
                image={{
                  src: avatarUrl,
                  alt: `User menu for ${fullName}`,
                }}
              />
            </HeaderAvatar>
          </AvatarContainer>
        </PopoverTrigger>
        <PopoverSurface>
          <MenuContent>
            <Persona
              imageUrl={avatarUrl}
              coinSize={88}
              hidePersonaDetails={true}
              imageAlt=""
              imageShouldStartVisible={true}
            />

            <MenuInner>
              {fullName ? <Text variant="xLarge">{fullName}</Text> : null}
              {email ? <Text>{email}</Text> : null}

              <ActionsContainer>
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
              </ActionsContainer>
            </MenuInner>
          </MenuContent>
        </PopoverSurface>
      </Popover>
    </>
  )
}
