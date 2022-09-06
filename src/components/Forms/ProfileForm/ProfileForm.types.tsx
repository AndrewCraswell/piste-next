import { FieldValues } from "react-hook-form"
import { IAddressFormFields } from "../AddressForm"
import { IFencerFormFields } from "../FencerForm"

export interface IProfileFormFields
  extends IFencerFormFields,
    FieldValues,
    IAddressFormFields {}
