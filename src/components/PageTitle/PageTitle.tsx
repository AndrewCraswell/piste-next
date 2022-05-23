import styled from "@emotion/styled"
import { Headline } from "@fluentui/react-components"

const Title = styled(Headline)`
  margin: 0 0 1rem 0;
`

export const PageTitle: React.FunctionComponent = ({ children }) => (
  <Title as="h1" block>
    {children}
  </Title>
)
