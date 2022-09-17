export interface IWizardStepProps {
  id: string
  label: string
  optional?: boolean
  status?: "completed" | "skipped" | "error" | "none"
}

export const WizardStep: React.FunctionComponent<IWizardStepProps> = ({
  children,
}) => {
  return <>{children}</>
}
