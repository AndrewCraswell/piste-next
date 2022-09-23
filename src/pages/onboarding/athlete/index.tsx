import { Button, Text } from "@fluentui/react-components"
import { AnimationStyles, MotionDurations, Stack } from "@fluentui/react"
import styled from "@emotion/styled"

import { useAccountProfile, useFormHelpers, useTitle } from "$hooks"
import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import { useWizard, Wizard, WizardStep } from "$components/Wizard"
import { IProfileFormFields, FencerForm, AddressForm } from "$components/Forms"
import { useCallback, useEffect } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { FormSection } from "$components/Form/components/FormSection"
import { FormRow } from "$components/Form/components/FormRow"
import dayjs from "dayjs"
import {
  useAddAccountMutation,
  useUpdateAccountByIdMutation,
  useAddAddressAndFencerToAccountMutation,
} from "$queries"

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

// TODO: Handle errors

// TODO: Fix State field not persisting
// TODO: Store state property in storage too
// TODO: Store copy of data in memory

// TODO: Write GraphQL query for account registration
// TODO: Add isOnboardingCompleted row on account

// TODO: Break this into a new component file
const AccountProfileRegistration: React.FunctionComponent = () => {
  useTrackPisteMetric({ componentName: "AthleteOnboardingAccountPage" })
  const form = useForm<IProfileFormFields>()
  const { handleSubmit, formState } = form
  const { sanitizePhone, sanitizePostal, sanitizeDate, setFormFields } =
    useFormHelpers(form)
  const {
    account,
    account: { isRegistered, UserId, AddressId, PrimaryStudentId },
    loading: isProfileLoading,
  } = useAccountProfile()

  const [addAccount, { error: addAccountError }] = useAddAccountMutation()

  const [addAddressAndFencer, { error: addToAccountsError }] =
    useAddAddressAndFencerToAccountMutation()

  const [updateAccount, { error: updateAccountError }] =
    useUpdateAccountByIdMutation()

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

  const hasStepCompleted = useCallback(() => {
    return isRegistered && AddressId && PrimaryStudentId
  }, [AddressId, PrimaryStudentId, isRegistered])

  const onSubmit: SubmitHandler<IProfileFormFields> = useCallback(
    (values, event) => {
      event?.preventDefault()

      // If the account is already create and no fields are changed, skip to next step
      if (hasStepCompleted() && !formState.isDirty) {
        next()
        return
      }

      // TOOD: Migrate to Postgres so that this can all be done as a single query
      addAccount({
        variables: {
          account: {
            Oid: UserId,
          },
        },
        onCompleted: () => {
          // TODO: Add gender field
          addAddressAndFencer({
            variables: {
              fencer: {
                Oid: UserId,
                FirstName: values.FirstName,
                LastName: values.LastName,
                Birthdate: sanitizeDate(values.Birthdate),
                Phone: sanitizePhone(values.Phone),
                Email: values.Email,
              },
              address: {
                Address: values.Address,
                Address2: values.Address2,
                City: values.City,
                // TODO: Fix the state field
                //State: values.State,
                State: "WA",
                Postal: sanitizePostal(values.Postal),
              },
            },
            onCompleted: ({ insert_Addresses_one, insert_Students_one }) => {
              const { AddressId } = insert_Addresses_one ?? {}
              const { StudentId } = insert_Students_one ?? {}

              updateAccount({
                variables: {
                  id: UserId,
                  changes: {
                    AddressId,
                    PrimaryStudentId: StudentId,
                  },
                },
                onCompleted: () => {
                  setStepStatus("account", "completed")
                  next()
                },
              })
            },
          })
        },
      })
    },
    [
      UserId,
      addAccount,
      addAddressAndFencer,
      formState.isDirty,
      hasStepCompleted,
      next,
      sanitizeDate,
      sanitizePhone,
      sanitizePostal,
      setStepStatus,
      updateAccount,
    ]
  )

  // Load existing account values if they exist
  useEffect(() => {
    if (!isProfileLoading) {
      console.log("ACCOUNT ", account)
      if (account.isRegistered) {
        if (account.PrimaryStudentId) {
          // TODO: Shift this code into the FencerForm component
          const fields: Partial<IProfileFormFields> = {
            ...account.Student,
            Birthdate: account.Student
              ? dayjs(account.Student.Birthdate).toDate()
              : undefined,
          }

          setFormFields(fields)
        }

        // TODO: Shift this code into the FencerForm component AddressForm component
        if (account.AddressId) {
          const fields: Partial<IProfileFormFields> = {
            ...account.Address,
          }

          setFormFields(fields)
        }
      } else {
        // Not registered
      }
    }
  }, [setFormFields, account, isProfileLoading])

  // Determine if the step is already completed
  useEffect(() => {
    if (hasStepCompleted()) {
      setStepStatus("account", "completed")
    }
  }, [hasStepCompleted, setStepStatus])

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

          <Button
            type="submit"
            appearance="primary"
            disabled={!hasNext() || formState.isSubmitting}
          >
            Save and continue
          </Button>
        </Stack>
      </FormSection>
    </form>
  )
}
