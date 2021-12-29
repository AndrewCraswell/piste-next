import { Card } from "../Card"
import { IStyleableProps } from "$types"
import styled from "@emotion/styled"
import { Stack, IconButton, IButtonProps } from "@fluentui/react"

const CardControls = styled(Stack)`
  border-top: 1px solid ${({ theme }) => theme.palette.neutralLight};
  padding-top: 6px;
`

const verticalTokens = { childrenGap: "0.5rem" }

export interface IVerticalCardProps extends IStyleableProps {
  actions: IButtonProps[]
}

export const VerticalCard: React.FunctionComponent<IVerticalCardProps> = ({
  children,
  className,
  actions,
}) => (
  <Card className={className}>
    <Stack tokens={verticalTokens}>
      <Stack tokens={verticalTokens} verticalFill grow>
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
