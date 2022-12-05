import {
  AppConfigurationClient,
  ConfigurationSetting,
  featureFlagPrefix,
  FeatureFlagValue,
  isFeatureFlag,
  ListConfigurationSettingsOptions,
  parseFeatureFlag,
} from "@azure/app-configuration"
import { useMemo, useState, useEffect } from "react"

const client = new AppConfigurationClient(
  import.meta.env.VITE_APP_CONFIGURATION_KEY
)

const _settingsCache = new Map<string, ConfigurationSetting<string>>()
const _featuresCache = new Map<string, ConfigurationSetting<FeatureFlagValue>>()
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
      const settingsIterator = client.listConfigurationSettings(options)

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
    // TODO: Enable bypass of cache
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

export type ConfigSettingHookOptions = {
  key: string
  label?: string
  bypassCache?: boolean
}

export const useFeatureFlag = (options: ConfigSettingHookOptions) => {
  const { key, label, bypassCache } = options
  const featureKey = featureFlagPrefix + key
  const cacheKey = featureKey + label

  const [feature, setFeature] = useState<
    ConfigurationSetting<FeatureFlagValue> | undefined
  >(_featuresCache.get(cacheKey))

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const result = await client.getConfigurationSetting({
          key: featureKey,
          label,
        })

        if (isFeatureFlag(result)) {
          const flag = parseFeatureFlag(result)

          _featuresCache.set(cacheKey, flag)
          setFeature(flag)
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (_featuresCache.has(cacheKey) && !bypassCache) {
      const cachedFeature = _featuresCache.get(cacheKey)
      setFeature(cachedFeature)
    } else {
      fetchFlag()
    }
  }, [bypassCache, cacheKey, featureKey, key, label])

  return useMemo(
    () => ({
      feature,
      isEnabled: feature?.value.enabled,
    }),
    [feature]
  )
}

// TODO: Refactor this to use the settings cache
export const useConfigurationSetting = (options: ConfigSettingHookOptions) => {
  const { key, label, bypassCache } = options

  const [setting, setSetting] = useState<
    ConfigurationSetting<string> | undefined
  >(_settingsCache.get(key))

  useEffect(() => {
    const fetchSetting = async () => {
      try {
        const value = await client.getConfigurationSetting({
          key,
          label,
        })

        if (!isFeatureFlag(value)) {
          _settingsCache.set(key, value)
          setSetting(value)
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (_settingsCache.has(key) && !bypassCache) {
      const cachedSetting = _settingsCache.get(key)
      setSetting(cachedSetting)
    } else {
      fetchSetting()
    }
  }, [bypassCache, key, label])

  return useMemo(
    () => ({
      setting,
      value: setting?.value,
    }),
    [setting]
  )
}
