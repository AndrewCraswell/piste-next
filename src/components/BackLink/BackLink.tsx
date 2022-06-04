import { ChevronLeftRegular } from "@fluentui/react-icons"
import { IconLink } from "./BackLink.styles"

interface IBackLink {
  onClick: () => void
}

export const BackLink: React.FunctionComponent<IBackLink> = ({
  onClick,
  children,
}) => {
  return (
    <IconLink onClick={onClick} as="button">
      <ChevronLeftRegular />
      {children}
    </IconLink>
  )
}
