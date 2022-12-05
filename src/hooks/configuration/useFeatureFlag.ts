import {
  ConfigurationSetting,
  featureFlagPrefix,
  FeatureFlagValue,
  isFeatureFlag,
  parseFeatureFlag,
} from "@azure/app-configuration"
import { useMemo, useState, useEffect } from "react"
import {
  appConfigurtationClient,
  _featuresCache,
} from "./appConfigurationClient"

export type FeatureFlagHookOptions = {
  key: string
  label?: string
  bypassCache?: boolean
}

export const useFeatureFlag = (options: FeatureFlagHookOptions) => {
  const { key, label, bypassCache } = options
  const featureKey = featureFlagPrefix + key
  const cacheKey = featureKey + label

  const [feature, setFeature] = useState<
    ConfigurationSetting<FeatureFlagValue> | undefined
  >(_featuresCache.get(cacheKey))

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const result = await appConfigurtationClient.getConfigurationSetting({
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
