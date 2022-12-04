import { Badge } from "@fluentui/react-components"

export type RoleBadgeProps = {
  name: string
}

export const RoleBadge: React.FunctionComponent<RoleBadgeProps> = ({
  name,
}) => {
  const isStaff = name !== "Member"

  return (
    <Badge color={isStaff ? "brand" : "informative"} shape="rounded">
      {name}
    </Badge>
  )
}
