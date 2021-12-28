import { PlaceResult } from "./PlaceResult"

export class GoogleAddressResult {
  private _place: PlaceResult
  private _addressNameFormat: Record<string, string> = {
    street_number: "short_name", // Address
    route: "long_name", // Address
    locality: "long_name", // City
    administrative_area_level_1: "short_name", // State
    country: "long_name", // Country
    postal_code: "short_name", // Postal
    postal_code_suffix: "short_name", // Postal
  }

  public formattedAddress: string
  public streetNumber: string
  public address1: string
  public address2: string
  public city: string
  public state: string
  public country: string
  public postalCodePrefix: string
  public postalCodeSuffix: string
  public postalCode: string

  constructor(place: PlaceResult) {
    this._place = place
    this.formattedAddress = place.formatted_address

    this.streetNumber = this.getAddressComponent("street_number")
    this.address1 = `${this.streetNumber} ${this.getAddressComponent("route")}`
    this.address2 = this.getAddressComponent("")
    this.city = this.getAddressComponent("locality")
    this.state = this.getAddressComponent("administrative_area_level_1")
    this.country = this.getAddressComponent("country")
    this.postalCodePrefix = this.getAddressComponent("postal_code")
    this.postalCodeSuffix = this.getAddressComponent("postal_code_suffix")
    this.postalCode = `${this.postalCodePrefix}-${this.postalCodeSuffix}`
  }

  getAddressComponent(type: string) {
    for (const component of this._place.address_components) {
      if (component.types[0] === type) {
        return component[this._addressNameFormat[type]]
      }
    }
    return ""
  }
}
