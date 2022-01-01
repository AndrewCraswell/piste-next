import { useDisclosure } from "$hooks"
import styled from "@emotion/styled"
import { IconButton, Nav, MotionTimings, INavLinkGroup } from "@fluentui/react"
import { useRouter } from "next/router"

const NavContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.neutralLighter};

  .ms-FocusZone {
    display: flex;
  }
`

export interface IStyledNavProps {
  isExpanded: boolean
}

const StyledNav = styled(Nav)<IStyledNavProps>`
  width: ${(props) => (props.isExpanded ? 200 : 48)}px;
  transition: width 200ms ${MotionTimings.decelerate};

  li[role="listitem"] a,
  li[role="listitem"] button {
    padding: 0 12px 0;
  }

  li[role="listitem"] button {
    padding: 0;
    width: auto;
    height: auto;
  }

  .ms-Nav-group {
    .ms-Nav-groupContent {
      margin-bottom: 16px;
    }

    button {
      color: ${({ isExpanded, theme }) =>
        isExpanded ? "inherit" : theme.palette.neutralLighter};
      transition: color 125ms ease-in-out;
    }
  }
`

const HamburgerContainer = styled.div`
  display: flex;
  line-height: 44px;
  height: 44px;
`

const HamburgerButton = styled(IconButton)`
  padding: 0 12px;
  width: auto;
  height: auto;
`

export interface IAppNavProps {
  links: INavLinkGroup[]
}

export const AppNav: React.FunctionComponent<IAppNavProps> = ({ links }) => {
  const router = useRouter()
  const { isOpen, onToggle } = useDisclosure(true)

  return (
    <NavContainer>
      <HamburgerContainer>
        <HamburgerButton
          iconProps={{ iconName: "GlobalNavButton" }}
          onClick={onToggle}
        />
      </HamburgerContainer>

      <StyledNav
        isExpanded={isOpen}
        onLinkClick={(event, item) => {
          if (item) {
            event?.preventDefault()
            router.push(item.url)
          }
        }}
        groups={links}
      />
    </NavContainer>
  )
}
