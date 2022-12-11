import styled from "@emotion/styled"
import { ActionButton } from "@fluentui/react"
import {
  Popover,
  PopoverSurface,
  PopoverTrigger,
  Text,
} from "@fluentui/react-components"
import { useCallback, useRef } from "react"

import { PersonaAvatar } from "$components/PersonaAvatar"
import { useDisclosure } from "$hooks/useDisclosure"
import { useLinkShims } from "$hooks/useLinkShims"

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

const MenuContent = styled.div`
  display: flex;
  line-height: normal;
  color: ${({ theme }) => theme.fluentV9.colorNeutralForeground1};
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

const OutlinedAvatar = styled(PersonaAvatar)`
  .fui-Avatar {
    border: 1px solid ${({ theme }) => theme.fluentV9.colorNeutralStrokeOnBrand};
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
  const { isOpen, onToggle, onClose, setIsOpen } = useDisclosure(false)

  const onLinkClicked = useCallback(
    (event) => {
      linkShims.onClick(event)
      onClose()
    },
    [linkShims, onClose]
  )

  const loginRedirect = useCallback(() => {
    if (logout) {
      logout()
    }
  }, [logout])

  return (
    <>
      <Popover
        mountNode={avatarRef.current || undefined}
        open={isOpen}
        onOpenChange={(e, { open }) => setIsOpen(open)}
      >
        <PopoverTrigger>
          <AvatarContainer ref={avatarRef} onClick={onToggle}>
            <HeaderAvatar>
              <OutlinedAvatar
                text={fullName}
                imageAlt={`User menu for ${fullName}`}
                imageShouldFadeIn={false}
                hidePersonaDetails={true}
                size={32}
              />
            </HeaderAvatar>
          </AvatarContainer>
        </PopoverTrigger>
        <PopoverSurface style={{ borderRight: 0 }}>
          <MenuContent>
            <PersonaAvatar
              text={fullName}
              imageAlt=""
              imageShouldFadeIn={false}
              hidePersonaDetails={true}
              size={96}
            />

            <MenuInner>
              {fullName ? <Text size={500}>{fullName}</Text> : null}
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
                    onClick={loginRedirect}
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
