import { Text } from "@fluentui/react-components"
import { AnimationStyles, MotionDurations } from "@fluentui/react"
import styled from "@emotion/styled"

import { useTitle } from "$hooks"
import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import { Wizard, WizardStep } from "$components/Wizard"

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
      <Wizard>
        <WizardStep id="account" label="Account details">
          <LeftSlideAnimation>
            <Text>Todo Account</Text>
          </LeftSlideAnimation>
        </WizardStep>

        <WizardStep
          id="association"
          label="Fencing association"
          optional
          status="skipped"
        >
          <LeftSlideAnimation>
            <Text>Todo Association</Text>
          </LeftSlideAnimation>
        </WizardStep>

        <WizardStep id="profile" label="Fencer profile" status="completed">
          <LeftSlideAnimation>
            <Text>Todo Fencer</Text>
          </LeftSlideAnimation>
        </WizardStep>

        <WizardStep
          id="membership"
          label="Club membership"
          optional
          status="error"
        >
          <LeftSlideAnimation>
            <Text>Todo Membership</Text>
          </LeftSlideAnimation>
        </WizardStep>
      </Wizard>
    </LeftSlideAnimation>
  )
}

export default AthleteOnboardingPage
