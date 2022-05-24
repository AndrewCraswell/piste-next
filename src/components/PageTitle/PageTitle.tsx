import styled from "@emotion/styled"
import { Title2 } from "@fluentui/react-components"

const Title = styled(Title2)`
  margin: 0 0 1rem 0;
`

export const PageTitle: React.FunctionComponent = ({ children }) => (
  <Title as="h1" block>
    {children}
  </Title>
)
