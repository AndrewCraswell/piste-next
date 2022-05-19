import styled from "@emotion/styled"
import { Text } from "@fluentui/react-components"

const Title = styled(Text)`
  margin: 0 0 1rem 0;
`

export const PageTitle: React.FunctionComponent = ({ children }) => (
  <Title as="h1" size={500} weight="semibold" block>
    {children}
  </Title>
)
