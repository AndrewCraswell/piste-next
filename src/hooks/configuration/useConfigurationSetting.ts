import { ConfigurationSetting, isFeatureFlag } from "@azure/app-configuration"
import { useMemo, useState, useEffect } from "react"
import {
  appConfigurtationClient,
  _settingsCache,
} from "./appConfigurationClient"

export type ConfigurationSettingHookOptions = {
  key: string
  label?: string
  bypassCache?: boolean
}

export const useConfigurationSetting = (
  options: ConfigurationSettingHookOptions
) => {
  const { key, label, bypassCache } = options

  const [setting, setSetting] = useState<
    ConfigurationSetting<string> | undefined
  >(_settingsCache.get(key))

  useEffect(() => {
    const fetchSetting = async () => {
      try {
        const value = await appConfigurtationClient.getConfigurationSetting({
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
