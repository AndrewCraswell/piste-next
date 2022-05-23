import styled from "@emotion/styled"
import { CommandBar, ShimmeredDetailsList } from "@fluentui/react"
import { CardHeader } from "@fluentui/react-components/unstable"

export const AssessmentResponseActions = styled(CommandBar)`
  .ms-CommandBar {
    padding-left: 0;
  }
`

export const NoImageCardHeader = styled(CardHeader)`
  .fui-CardHeader__image {
    display: none;
  }
`
