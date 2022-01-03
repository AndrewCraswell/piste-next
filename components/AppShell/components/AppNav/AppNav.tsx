import { useDisclosure } from "$hooks"
import { IStyleableProps } from "$types"
import styled from "@emotion/styled"
import {
  Nav,
  AnimationVariables,
  INavLinkGroup,
  IRenderGroupHeaderProps,
  Text,
  FontWeights,
} from "@fluentui/react"
import { useCallback } from "react"
import { Hamburger } from "./components"

const NavContainer = styled.div`
  border-right: 1px solid ${({ theme }) => theme.palette.neutralLight};

  .ms-FocusZone {
    display: flex;
  }
`

export interface IStyledNavProps {
  isExpanded: boolean
}

const StyledNav = styled(Nav)<IStyledNavProps>`
  width: ${(props) => (props.isExpanded ? 200 : 48)}px;
  transition: width 200ms ${AnimationVariables.easeFunction1};
  overflow-y: visible;

  li[role="listitem"] {
    a,
    button {
      padding: 0 12px 0 !important;

      &:not(.is-disabled, :hover) {
        color: inherit;
      }
    }
  }

  .ms-Nav-group {
    .ms-Nav-groupContent {
      margin-bottom: 16px;
    }

    & > span {
      color: ${({ isExpanded }) => (isExpanded ? "inherit" : "transparent")};
      transition: color 125ms ease-in-out;

      font-weight: ${FontWeights.light};
      padding-left: 16px;
      border-bottom: 1px solid ${({ theme }) => theme.palette.neutralLight};
      display: block;

      font-weight: 400;
      font-size: 18px;
      padding-bottom: 8px;
    }
  }
`

export interface IAppNavProps extends IStyleableProps {
  links: INavLinkGroup[]
}

export const AppNav: React.FunctionComponent<IAppNavProps> = ({
  links,
  className,
}) => {
  const { isOpen, onToggle } = useDisclosure(true)

  const onRenderGroupHeader = useCallback(
    (group?: IRenderGroupHeaderProps) => (
      <Text variant="mediumPlus">{group?.name}</Text>
    ),
    []
  )

  return (
    <NavContainer className={className}>
      <Hamburger
        iconProps={{ iconName: "GlobalNavButton" }}
        onClick={onToggle}
      />

      <StyledNav
        onRenderGroupHeader={onRenderGroupHeader}
        isExpanded={isOpen}
        groups={links}
      />
    </NavContainer>
  )
}
