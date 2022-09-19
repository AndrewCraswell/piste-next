import { Button, Text } from "@fluentui/react-components"
import { AnimationStyles, MotionDurations, Stack } from "@fluentui/react"
import styled from "@emotion/styled"

import { useFormHelpers, useTitle } from "$hooks"
import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import { useWizard, Wizard, WizardStep } from "$components/Wizard"
import { IProfileFormFields, FencerForm, AddressForm } from "$components/Forms"
import { useCallback } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { FormSection } from "$components/Form/components/FormSection"
import { FormRow } from "$components/Form/components/FormRow"

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

        <WizardStep id="profile" label="Fencer profile">
          <LeftSlideAnimation>
            <Text>Todo Fencer</Text>
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

// TODO: Restore form from profile data on backend
//  TODO: Restore the step status after a page refresh

// TODO: Fix State field not persisting

// TODO: Write GraphQL query for account registration
// TODO: Add isOnboardingCompleted row on account

// TODO: Break this into a new component file
const AccountProfileRegistration: React.FunctionComponent = () => {
  useTrackPisteMetric({ componentName: "AthleteOnboardingAccountPage" })
  const form = useForm<IProfileFormFields>()
  const { handleSubmit } = form
  const { sanitizePhone, sanitizePostal } = useFormHelpers(form)

  const {
    hasNext,
    hasPrevious,
    next,
    previous,
    setStepStatus,
    skip,
    currentStep,
  } = useWizard({
    form,
    storage: "localStorage",
  })

  const onSubmit: SubmitHandler<IProfileFormFields> = useCallback(
    (values, event) => {
      event?.preventDefault()

      values.Phone = sanitizePhone(values.Phone)
      values.Postal = sanitizePostal(values.Postal)

      console.log(JSON.stringify(values))

      // TODO: Actually execute the GraphQL query
      if (currentStep) {
        setStepStatus(currentStep.id, "completed")
        next()
      }
    },
    [currentStep, next, sanitizePhone, sanitizePostal, setStepStatus]
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
      <FormSection>
        <FormRow>
          <FencerForm form={form} />
        </FormRow>
        <FormRow>
          <AddressForm form={form} />
        </FormRow>

        <Stack horizontal>
          <Button disabled={!hasPrevious()} onClick={previous}>
            Back
          </Button>
          <Stack grow horizontal />

          {currentStep?.optional && (
            <Button
              disabled={!hasNext()}
              onClick={skip}
              appearance="transparent"
            >
              Skip
            </Button>
          )}

          <Button type="submit" disabled={!hasNext()} appearance="primary">
            Save and continue
          </Button>
        </Stack>
      </FormSection>
    </form>
  )
}
