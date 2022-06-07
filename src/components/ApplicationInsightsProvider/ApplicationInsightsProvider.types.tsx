import { ICustomProperties } from "@microsoft/applicationinsights-web"

export type CustomEventOptions<T> = {
  eventName: string
  eventData: T
  skipFirstRun?: boolean
}

export type ComponentTrackingOptions = {
  componentName: string
  customProperties?: ICustomProperties
}
