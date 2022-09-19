import { StepContainer } from "./WizardStep.styles"

export interface IWizardStepProps {
  id: string
  label: string
  optional?: boolean
}

export const WizardStep: React.FunctionComponent<IWizardStepProps> = ({
  children,
}) => {
  return <StepContainer>{children}</StepContainer>
}
