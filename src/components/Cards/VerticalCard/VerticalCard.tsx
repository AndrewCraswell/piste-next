import { Card } from "../Card"
import { IStyleableProps } from "$types"
import styled from "@emotion/styled"
import { Stack, IconButton, IButtonProps } from "@fluentui/react"

const CardThinnedBottom = styled(Card)`
  padding-bottom: 0;
`

const CardControls = styled(Stack)`
  border-top: 1px solid ${({ theme }) => theme.palette.neutralLight};
  padding: 6px 0;
`

const verticalTokens = { childrenGap: "0.5rem" }

export interface IVerticalCardProps extends IStyleableProps {
  actions?: IButtonProps[]
  children?: React.ReactNode
}

export function VerticalCard(props: IVerticalCardProps) {
  const { children, className, actions } = props

  return (
    <CardThinnedBottom className={className}>
      <Stack tokens={verticalTokens} verticalFill grow>
        <Stack tokens={verticalTokens} verticalFill grow>
          {children}
        </Stack>

        {actions?.length ? (
          <CardControls horizontal horizontalAlign="end">
            {actions.map((props, index) => (
              <IconButton key={index} {...props} />
            ))}
          </CardControls>
        ) : undefined}
      </Stack>
    </CardThinnedBottom>
  )
}
