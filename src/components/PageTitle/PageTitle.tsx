import styled from "@emotion/styled"
import { Title2 } from "@fluentui/react-components"
import { PropsWithChildren } from "react"

const Title = styled(Title2)`
  margin: 0 0 1rem 0;
`

export function PageTitle({ children }: PropsWithChildren<{}>) {
  return (
    <Title as="h1" block>
      {children}
    </Title>
  )
}
