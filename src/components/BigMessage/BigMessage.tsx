import { Stack } from "@fluentui/react"
import { Subtitle1, Body1 } from "@fluentui/react-components"

import { ThemedImage } from "$components/ThemedImage"

// TODO: Parameterize these as props
import errorLightSvg from "$assets/errorLight.svg"
import errorDarkSvg from "$assets/errorDark.svg"
import { PropsWithChildren } from "react"

export type BigMessageProps = PropsWithChildren<{
  heading: string
}>

export function BigMessage({ heading, children }: BigMessageProps) {
  return (
    <Stack horizontalAlign="center" style={{ marginTop: "10vh" }}>
      <ThemedImage
        lightSrc={errorLightSvg}
        darkSrc={errorDarkSvg}
        width="100%"
        style={{ maxWidth: "12.5rem" }}
      />

      <Subtitle1 style={{ marginTop: "1.25rem", marginBottom: "0.5rem" }}>
        {heading}
      </Subtitle1>

      <Body1 as="p">{children}</Body1>
    </Stack>
  )
}
