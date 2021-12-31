import { Icon } from "@fluentui/react"
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react"
import styled from "@emotion/styled"

export interface IHeaderButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "normal" | "large"
  icon?: string
}

const Button: React.FunctionComponent<IHeaderButtonProps> = (props) => {
  const { icon, variant, children, ...buttonProps } = props

  return (
    <button {...buttonProps}>
      {icon ? <Icon iconName={icon} /> : children}
    </button>
  )
}

export const HeaderButton = styled(Button)`
  background-color: inherit;
  color: inherit;
  line-height: inherit;
  border: none;
  min-width: 48px;
  padding: 0;

  i {
    line-height: inherit;
    font-size: ${({ theme, variant }) =>
      (variant === "large"
        ? theme.fonts.xxLarge
        : theme.fonts.large) as unknown as string};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.themeDarker};
    transition: background-color 0.467s cubic-bezier(0.1, 0.9, 0.2, 1) 34ms;
    cursor: pointer;
  }

  &:focus {
    outline: #fff 1px solid;
    outline-offset: -1px;
  }
`
