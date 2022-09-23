import { Text } from "@fluentui/react-components"
import { AnimationStyles, MotionDurations } from "@fluentui/react"
import styled from "@emotion/styled"

import { useTitle } from "$hooks"
import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import { Wizard, WizardStep } from "$components/Wizard"
import { AccountProfileRegistration } from "./components/AccountProfileRegistration"

const LeftSlideAnimation = styled.div`
  ${AnimationStyles.slideLeftIn400 as unknown as string}
  animation-duration: ${MotionDurations.duration2 as unknown as string};
`

export const AthleteOnboardingPage: React.FunctionComponent = () => {
  const pageTitle = "Athlete onboarding"
  useTitle(pageTitle)
  useTrackPisteMetric({ componentName: "AthleteOnboardingPage" })

  return (
    <LeftSlideAnimation>
      <Wizard name="athlete">
        <WizardStep id="account" label="Account details">
          <LeftSlideAnimation>
            <AccountProfileRegistration />
          </LeftSlideAnimation>
        </WizardStep>

        <WizardStep id="association" label="Fencing association" optional>
          <LeftSlideAnimation>
            <Text>Todo Association</Text>
          </LeftSlideAnimation>
        </WizardStep>

        <WizardStep id="membership" label="Club membership" optional>
          <LeftSlideAnimation>
            <Text>Todo Membership</Text>
          </LeftSlideAnimation>
        </WizardStep>
      </Wizard>
    </LeftSlideAnimation>
  )
}

export default AthleteOnboardingPage
