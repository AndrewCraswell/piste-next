import { Button } from "@fluentui/react-components"
import { Stack } from "@fluentui/react"

import { useAccountProfile, useFormHelpers } from "$hooks"
import { useTrackPisteMetric } from "$components/ApplicationInsightsProvider"
import { useWizard } from "$components/Wizard"
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

// TODO: Handle errors
// TODO: Handle loading spinner
// TODO: Determine whether to Create new records, or Update when "Save and continue" is clicked

// TODO: Store copy of data in memory
// TODO: Serializing of numbers/dates is not working correctly

// TODO: Add isOnboardingCompleted row on account
// TODO: Update the GraphQL "CreatedBy" fields for Accounts, Addresses, and Students tables in Hasura

// TODO: Migrate database to Postgres to simplify the queries.
//   Execute all mutations at the same time

export const AccountProfileRegistration: React.FunctionComponent = () => {
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
      console.log(values)

      // If the account is already create and no fields are changed, skip to next step
      if (hasStepCompleted() && !formState.isDirty) {
        next()
        return
      }

      addAccount({
        variables: {
          account: {
            Oid: UserId,
          },
        },
        onCompleted: () => {
          addAddressAndFencer({
            variables: {
              fencer: {
                Oid: UserId,
                FirstName: values.FirstName,
                LastName: values.LastName,
                Birthdate: sanitizeDate(values.Birthdate),
                Gender: values.Gender,
                Phone: sanitizePhone(values.Phone),
                Email: values.Email,
              },
              address: {
                Address: values.Address,
                Address2: values.Address2,
                City: values.City,
                State: values.State,
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
