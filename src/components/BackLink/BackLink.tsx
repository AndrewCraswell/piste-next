import { ChevronLeftRegular } from "@fluentui/react-icons"
import { PropsWithChildren } from "react"
import { IconLink } from "./BackLink.styles"

type IBackLink = PropsWithChildren<{
  onClick: () => void
}>

export function BackLink({ onClick, children }: IBackLink) {
  return (
    <IconLink onClick={onClick} as="button">
      <ChevronLeftRegular />
      {children}
    </IconLink>
  )
}
