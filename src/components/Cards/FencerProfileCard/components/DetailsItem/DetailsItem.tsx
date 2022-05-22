import { Icon, Stack } from "@fluentui/react"
import styled from "@emotion/styled"
import {
  PresenceBadge,
  PresenceBadgeProps,
  Text,
} from "@fluentui/react-components"

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

export interface IDetailsItemProps {
  iconName: string
  iconLabel: string
  title: string
  badgeProps?: PresenceBadgeProps
}

export const DetailsItem: React.FunctionComponent<IDetailsItemProps> = ({
  iconName,
  iconLabel,
  badgeProps,
  title,
  children,
}) => (
  <Stack horizontal verticalAlign="center">
    <DetailsIcon iconName={iconName} title={iconLabel} />
    <TextTruncated title={title}>
      <>{children}</>
      <>{badgeProps ? <DetailsBadge {...badgeProps} /> : null}</>
    </TextTruncated>
  </Stack>
)
