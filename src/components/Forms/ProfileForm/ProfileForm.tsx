import { useCallback, useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Button,
  Text,
} from "@fluentui/react-components"
import styled from "@emotion/styled"
import dayjs from "dayjs"

import { IProfileFormFields } from "./ProfileForm.types"
import { AddressForm } from "../AddressForm"
import { FencerForm } from "../FencerForm"
import { PanelFooter } from "$components/PanelFooter"
import { useAccountProfile } from "$hooks/useAccountProfile"
import { useFormHelpers } from "$hooks/useFormHelpers"

export const IndentedAccordionPanel = styled(AccordionPanel)`
  margin-left: 40px;
`

export const TabText = styled(Text)`
  margin: 0 0 1rem 1rem;
`

export const ProfileForm: React.FunctionComponent = () => {
  const form = useForm<IProfileFormFields>()
  const { setFormFields, sanitizePhone, sanitizePostal } = useFormHelpers(form)
  const { account, loading } = useAccountProfile()

  const { handleSubmit, formState } = form

  const onSubmit: SubmitHandler<IProfileFormFields> = useCallback(
    (values, event) => {
      event?.preventDefault()

      values.Phone = sanitizePhone(values.Phone)
      values.Postal = sanitizePostal(values.Postal)

      console.log(JSON.stringify(values))
    },
    [sanitizePhone, sanitizePostal]
  )

  useEffect(() => {
    if (!loading) {
      const fields: Partial<IProfileFormFields> = {
        ...account.Student,
        Birthdate: account.Student
          ? dayjs(account.Student.Birthdate).toDate()
          : undefined,
      }

      setFormFields(fields)
    }
  }, [loading, setFormFields, account])

  return (
    <>
      <TabText block>
        The profile is used for the primary fencer on the account. It also
        serves as the default contact information for any additional fencers
        added.
      </TabText>

      <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
        <Accordion collapsible defaultOpenItems="contact">
          <AccordionItem value="contact">
            <AccordionHeader size="large">Contact information</AccordionHeader>
            <IndentedAccordionPanel>
              <FencerForm form={form} />

              <PanelFooter>
                <Button
                  appearance="primary"
                  type="submit"
                  disabled={!formState.isDirty || formState.isSubmitting}
                >
                  Save
                </Button>
                <Button>Cancel</Button>
              </PanelFooter>
            </IndentedAccordionPanel>
          </AccordionItem>
          <AccordionItem value="address">
            <AccordionHeader size="large">Home address</AccordionHeader>
            <IndentedAccordionPanel>
              <AddressForm form={form} />

              <PanelFooter>
                <Button
                  appearance="primary"
                  type="submit"
                  disabled={!formState.isDirty || formState.isSubmitting}
                >
                  Save
                </Button>
                <Button>Cancel</Button>
              </PanelFooter>
            </IndentedAccordionPanel>
          </AccordionItem>
        </Accordion>
      </form>
    </>
  )
}
