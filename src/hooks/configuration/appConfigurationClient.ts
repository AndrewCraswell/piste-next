import {
  AppConfigurationClient,
  ConfigurationSetting,
  FeatureFlagValue,
} from "@azure/app-configuration"

export const _settingsCache = new Map<string, ConfigurationSetting<string>>()
export const _featuresCache = new Map<
  string,
  ConfigurationSetting<FeatureFlagValue>
>()

export const appConfigurtationClient = new AppConfigurationClient(
  import.meta.env.VITE_APP_CONFIGURATION_KEY
)
