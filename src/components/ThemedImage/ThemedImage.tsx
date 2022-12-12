import { Image, ImageProps } from "@fluentui/react-components"

import { useAppTheme } from "$components/AppThemeProvider"

export type ThemedImageProps = {
  lightSrc: string
  darkSrc: string
} & Omit<ImageProps, "src" | "srcSet">

export function ThemedImage(props: ThemedImageProps) {
  const { lightSrc, darkSrc, ...imageProps } = props
  const { themeName } = useAppTheme()

  switch (themeName) {
    case "dark":
      return <Image {...imageProps} src={darkSrc} />
    case "light":
    default:
      return <Image {...imageProps} src={lightSrc} />
  }
}
