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
  actions: IButtonProps[]
}

export const HorizontalCard: React.FunctionComponent<IHorizontalCardProps> = ({
  children,
  className,
  actions,
}) => (
  <Card className={className}>
    <Stack horizontal>
      <Stack tokens={horizontalTokens} verticalFill grow>
        {children}
      </Stack>

      {actions.length ? (
        <CardControls>
          {actions.map((props, index) => (
            <IconButton key={index} {...props} />
          ))}
        </CardControls>
      ) : undefined}
    </Stack>
  </Card>
)
