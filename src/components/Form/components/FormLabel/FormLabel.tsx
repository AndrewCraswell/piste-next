import styled from "@emotion/styled"
import { Button, Label, LabelProps, Tooltip } from "@fluentui/react-components"
import { Info16Regular } from "@fluentui/react-icons"

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
`

const SpacedLabel = styled(Label)`
  margin-bottom: var(--spacingVerticalXXS);
  margin-top: var(--spacingVerticalXXS);
  display: inline-block;
`

const InfoButton = styled(Button)`
  height: 16px;
`

export type FormLabelProps = {
  tooltipContent?: string
} & LabelProps

export const FormLabel: React.FunctionComponent<FormLabelProps> = ({
  children,
  tooltipContent,
  ...labelProps
}) => {
  return (
    <LabelContainer>
      <SpacedLabel {...labelProps}>{children}</SpacedLabel>
      {tooltipContent && (
        <Tooltip content={tooltipContent} relationship="label">
          <InfoButton icon={<Info16Regular />} appearance="transparent" />
        </Tooltip>
      )}
    </LabelContainer>
  )
}
