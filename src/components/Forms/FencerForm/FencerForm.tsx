import { UseFormReturn } from "react-hook-form"
import dayjs from "dayjs"

import { IProfileFormFields } from "$components/Forms/ProfileForm"
import { FormDatePicker } from "$components/Form/components/v8/FormDatePicker"
import { FormMaskedTextField } from "$components/Form/components/v8/FormMaskedTextField"
import { FormRow } from "$components/Form/components/FormRow"
import { FormSection } from "$components/Form/components/FormSection"
import { FormInputField } from "$components/Form/components/v9/FormInputField"

interface IFencerFormProps {
  form: UseFormReturn<IProfileFormFields, object>
}

export const FencerForm: React.FunctionComponent<IFencerFormProps> = ({
  form,
}) => {
  const { control } = form

  return (
    <FormSection>
      <FormRow>
        <FormInputField
          control={control}
          name="FirstName"
          id="firstName"
          label="First name"
          required
          placeholder="First name"
          maxLength={64}
          autoComplete="given-name"
        />
        <FormInputField
          control={control}
          id="lastName"
          name="LastName"
          label="Last name"
          required
          placeholder="Last name"
          maxLength={64}
          autoComplete="family-name"
        />
      </FormRow>
      <FormRow>
        <FormDatePicker
          control={control}
          name="Birthdate"
          label="Birthdate"
          placeholder="Birthdate"
          ariaLabel="Birthdate"
          allowTextInput
          isRequired
          style={{ maxWidth: 177 }}
          defaultValue={new Date() as unknown as string}
          maxDate={new Date()}
          formatDate={(date) => dayjs(date).format("M/DD/YYYY")}
        />
      </FormRow>
      <FormRow>
        <FormMaskedTextField
          control={control}
          name="Phone"
          label="Phone number"
          mask="(999) 999-9999"
          title="A 10 digit phone number"
          type="tel"
          autoComplete="tel-national"
        />
      </FormRow>
      <FormRow>
        <FormInputField
          control={control}
          name="Email"
          label="Email"
          required
          placeholder="Email"
          type="email"
          maxLength={64}
          autoComplete="email"
        />
      </FormRow>
    </FormSection>
  )
}
