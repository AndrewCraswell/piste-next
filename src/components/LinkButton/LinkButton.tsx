import styled from "@emotion/styled"
import { Button, ButtonProps } from "@fluentui/react-components"
import { useLinkShims } from "$hooks"

const UnstyledButton = styled(Button)`
  text-decoration: none;
`

UnstyledButton.defaultProps = {
  as: "a",
}

type LinkButtonProps = ButtonProps & { href: string }

export const LinkButton: React.FunctionComponent<LinkButtonProps> = (props) => {
  const { children, ...buttonProps } = props
  const { onClick, onMouseOver } = useLinkShims()

  const href = (buttonProps as any)["href"] as string
  return (
    // @ts-ignore
    <UnstyledButton
      {...buttonProps}
      as="a"
      href={href}
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      {children}
    </UnstyledButton>
  )
}
