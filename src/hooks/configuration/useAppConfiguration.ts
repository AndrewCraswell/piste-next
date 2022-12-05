import {
  ConfigurationSetting,
  FeatureFlagValue,
  isFeatureFlag,
  ListConfigurationSettingsOptions,
} from "@azure/app-configuration"
import { useState, useEffect } from "react"
import {
  appConfigurtationClient,
  _featuresCache,
  _settingsCache,
} from "./appConfigurationClient"

let _hasSettingsCached = false

export type AppConfiguration = {
  configurations: ConfigurationSetting<string>[]
  features: ConfigurationSetting<FeatureFlagValue>[]
}

const _emptyAppConfig: AppConfiguration = {
  configurations: [],
  features: [],
}

export type AppConfigurationHookOptions = {
  options?: ListConfigurationSettingsOptions
  bypassCache?: boolean
}

export const useAppConfiguration = (
  configOptions: AppConfigurationHookOptions = {}
): AppConfiguration => {
  const { bypassCache, options } = configOptions

  const [configuration, setConfiguration] =
    useState<AppConfiguration>(_emptyAppConfig)

  useEffect(() => {
    const fetchConfigurations = async () => {
      const settingsIterator =
        appConfigurtationClient.listConfigurationSettings(options)

      for await (const setting of settingsIterator) {
        if (isFeatureFlag(setting)) {
          _featuresCache.set(
            setting.key + setting.label,
            setting as unknown as ConfigurationSetting<FeatureFlagValue>
          )
        } else {
          _settingsCache.set(setting.key, setting)
        }
      }

      _hasSettingsCached = true

      setConfiguration({
        configurations: Array.from(_settingsCache.values()),
        features: Array.from(_featuresCache.values()),
      })
    }

    // Only fetch the settings if it isn't already cached
    if (_hasSettingsCached && !bypassCache) {
      setConfiguration({
        configurations: Array.from(_settingsCache.values()),
        features: Array.from(_featuresCache.values()),
      })
    } else {
      fetchConfigurations()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return configuration
}
