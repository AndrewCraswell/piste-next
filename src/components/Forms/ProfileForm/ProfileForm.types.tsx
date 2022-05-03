import { IAddressFormFields } from "../AddressForm"
import { IFencerFormFields } from "../FencerForm"

export interface IProfileFormFields
  extends IFencerFormFields,
    IAddressFormFields {}
