import { FontWeights, Spinner, SpinnerSize, Stack } from "@fluentui/react"
import styled from "@emotion/styled"

export const CardHeader = styled.div`
  position: relative;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.neutralLight};
  margin-bottom: 12px;
`

export const BadgeContainer = styled.div`
  position: absolute;
  right: 0;
  z-index: 10;
`

export const DetailsStack = styled(Stack)`
  margin: 1.5rem 0 1rem 0;
`

export const SemiboldText = styled.span`
  font-weight: ${FontWeights.semibold};
`

export const EmbedDialog = styled.div`
  display: none;
`

export const DialogSpinner = styled(Spinner)`
  display: inline-block;
  height: 15px;
  margin-right: 4px;
`

DialogSpinner.defaultProps = {
  size: SpinnerSize.medium,
}
