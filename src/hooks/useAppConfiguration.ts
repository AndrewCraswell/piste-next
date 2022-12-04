import {
  AppConfigurationClient,
  ConfigurationSetting,
  featureFlagPrefix,
  isFeatureFlag,
  ListConfigurationSettingsOptions,
  parseFeatureFlag,
} from "@azure/app-configuration"
import { useMemo, useState, useEffect } from "react"

const client = new AppConfigurationClient(
  import.meta.env.VITE_APP_CONFIGURATION_KEY
)

let _settingsCache: ConfigurationSetting<string>[] = []
let _hasCached = false

export const useAppConfiguration = (
  options?: ListConfigurationSettingsOptions
) => {
  const [configuration, setConfiguration] = useState<
    ConfigurationSetting<string>[]
  >([])

  useEffect(() => {
    const fetchConfigurations = async () => {
      const settingsIterator = client.listConfigurationSettings(options)

      const settings: ConfigurationSetting<string>[] = []
      for await (const setting of settingsIterator) {
        settings.push(setting)
      }

      setConfiguration(settings)
      _settingsCache = settings
      _hasCached = true
    }

    // Only fetch the settings if it isn't already cached
    if (_hasCached === false) {
      fetchConfigurations()
    } else {
      setConfiguration(_settingsCache)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return configuration
}

/**
 * Retrieves the specified feature flag from Azure App Configuration.
 * @param {string} flagKey App Config Feature Flag key
 * @returns the feature flag for the specified key
 */
export const useFeatureFlag = (
  flagKey: string,
  label?: string
): boolean | undefined => {
  const [enabled, setEnabled] = useState<boolean | undefined>(undefined)

  useMemo(async () => {
    try {
      const result = await client.getConfigurationSetting({
        key: featureFlagPrefix + flagKey,
        label,
      })

      if (isFeatureFlag(result)) {
        const flag = parseFeatureFlag(result)
        setEnabled(!!flag.value)
      }
    } catch (error) {
      console.error(error)
    }
  }, [flagKey, label])

  return enabled
}

/**
 * Retrieves the specified configuration from Azure App Configuration.
 * @param {string} configKey App Config Key
 * @returns the configuration for the specified key
 */
export const useConfigurationSetting = (
  configKey: string,
  label?: string
): string | undefined => {
  const [config, setConfig] = useState<string | undefined>(undefined)

  useMemo(async () => {
    try {
      const result = await client.getConfigurationSetting({
        key: configKey.toString().trim(),
        label,
      })

      if (result) {
        setConfig(result.value)
      }
    } catch (error) {
      console.error(error)
    }
  }, [configKey, label])

  return config
}
