import {
  useAppInsightsContext,
  useTrackEvent,
  useTrackMetric,
} from "@microsoft/applicationinsights-react-js"
import { AIReactCustomEvent } from "@microsoft/applicationinsights-react-js/types/useTrackEvent"
import {
  CustomEventOptions,
  ComponentTrackingOptions,
} from "./ApplicationInsightsProvider.types"

export function useTrackPisteEvent<T>(
  options: CustomEventOptions<T>
): AIReactCustomEvent<T> {
  const reactPlugin = useAppInsightsContext()
  const { eventData, eventName, skipFirstRun } = options

  return useTrackEvent(reactPlugin, eventName, eventData, skipFirstRun)
}

export const useTrackPisteMetric = (
  options: ComponentTrackingOptions
): void => {
  const reactPlugin = useAppInsightsContext()
  const { componentName, customProperties } = options

  useTrackMetric(reactPlugin, componentName, customProperties)
}
