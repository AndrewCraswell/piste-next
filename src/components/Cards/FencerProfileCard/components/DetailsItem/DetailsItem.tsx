import { Icon, Stack } from "@fluentui/react"
import styled from "@emotion/styled"
import {
  PresenceBadge,
  PresenceBadgeProps,
  Text,
} from "@fluentui/react-components"
import { PropsWithChildren } from "react"

const TextTruncated = styled(Text)`
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
`

const DetailsIcon = styled(Icon)`
  margin-right: 0.75rem;
`

const DetailsBadge = styled(PresenceBadge)`
  margin-left: 0.5rem;
`

export type DetailsItemProps = PropsWithChildren<{
  iconName: string
  iconLabel: string
  title: string
  badgeProps?: PresenceBadgeProps
}>

export function DetailsItem(props: DetailsItemProps) {
  const { iconName, iconLabel, badgeProps, title, children } = props

  return (
    <Stack horizontal verticalAlign="center">
      <DetailsIcon iconName={iconName} title={iconLabel} />
      <TextTruncated title={title}>
        <>{children}</>
        <>{badgeProps ? <DetailsBadge {...badgeProps} /> : null}</>
      </TextTruncated>
    </Stack>
  )
}
