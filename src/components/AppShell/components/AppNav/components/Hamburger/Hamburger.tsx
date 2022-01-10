import styled from "@emotion/styled"
import { IconButton, IButtonProps } from "@fluentui/react"

const HamburgerButton = styled(IconButton)`
  padding: 0 12px;
  width: auto;
  height: 44px;
`

const HamburgerContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.neutralLight};
`

export const Hamburger: React.FunctionComponent<IButtonProps> = ({
  children,
  className,
  theme,
  ...props
}) => (
  <HamburgerContainer className={className}>
    <HamburgerButton {...props} />
  </HamburgerContainer>
)
