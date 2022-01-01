import styled from "@emotion/styled"
import { IconButton, IButtonProps } from "@fluentui/react"

const HamburgerButton = styled(IconButton)`
  padding: 0 12px;
  width: auto;
  height: 44px;
`

export const Hamburger: React.FunctionComponent<IButtonProps> = ({
  children,
  ...props
}) => (
  <div>
    <HamburgerButton {...props} />
  </div>
)
