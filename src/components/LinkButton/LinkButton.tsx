import styled from "@emotion/styled"
import { Button } from "@fluentui/react-components"

export const LinkButton = styled(Button)`
  text-decoration: none;
`
LinkButton.defaultProps = {
  as: "a",
}
