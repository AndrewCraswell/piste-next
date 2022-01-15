import { VerticalCard } from "$components/Cards/VerticalCard"
import styled from "@emotion/styled"
import { Stack } from "@fluentui/react"
import { Button, Text } from "@fluentui/react-components"

const Card = styled(VerticalCard)`
  border: 4px dashed ${({ theme }) => theme.palette.neutralLight};
  box-shadow: none;
  min-height: 362px;
`

const VerticallyCentered = styled(Stack)`
  height: 100%;
`

export interface IAddFencerCard {
  onClick: () => void
}

export const AddFencerCard: React.FunctionComponent<IAddFencerCard> = ({
  onClick,
}) => {
  return (
    <Card actions={[]}>
      <VerticallyCentered horizontalAlign="center" verticalAlign="center">
        <Button appearance="outline" onClick={onClick}>
          Add fencer
        </Button>
      </VerticallyCentered>
    </Card>
  )
}
