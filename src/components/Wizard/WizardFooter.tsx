import { Button } from "@fluentui/react-components"

import { useWizard } from "./useWizard"

export const WizardFooter: React.FunctionComponent = () => {
  const { hasNext, hasPrevious, next, previous } = useWizard()

  return (
    <div style={{ marginTop: "15em" }}>
      <Button disabled={!hasPrevious()} onClick={previous}>
        Back
      </Button>

      <Button appearance="transparent">Skip</Button>
      <Button disabled={!hasNext()} appearance="primary" onClick={next}>
        Save and continue
      </Button>
    </div>
  )
}
