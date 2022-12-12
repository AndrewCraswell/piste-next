import { Card } from "../Card"
import { IStyleableProps } from "$types"
import styled from "@emotion/styled"
import { Stack, IconButton, IButtonProps } from "@fluentui/react"

const CardControls = styled(Stack)`
  border-left: 1px solid ${({ theme }) => theme.palette.neutralLight};
  height: auto;
  align-self: stretch;
  padding-left: 6px;
`
CardControls.defaultProps = {
  verticalFill: true,
}

const horizontalTokens = { childrenGap: "0.5rem" }

export interface IHorizontalCardProps extends IStyleableProps {
  actions?: IButtonProps[]
  children: React.ReactNode
}

export function HorizontalCard(props: IHorizontalCardProps) {
  const { children, className, actions } = props

  return (
    <Card className={className}>
      <Stack horizontal>
        <Stack tokens={horizontalTokens} verticalFill grow>
          {children}
        </Stack>

        {actions?.length && (
          <CardControls>
            {actions.map((props, index) => (
              <IconButton key={index} {...props} />
            ))}
          </CardControls>
        )}
      </Stack>
    </Card>
  )
}
