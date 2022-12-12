import styled from "@emotion/styled"
import { IStackTokens, Stack } from "@fluentui/react"
import { PropsWithChildren } from "react"

const ToolbarContainer = styled.div`
  padding: ${({ theme }) => theme.fluentV9.spacingVerticalS}
    ${({ theme }) => theme.fluentV9.spacingHorizontalXXXL};
  border-bottom: 1px solid ${({ theme }) => theme.palette.neutralLight};
`

const toolbarTokens: IStackTokens = { childrenGap: 8 }

export function PageToolbar({ children }: PropsWithChildren<{}>) {
  return (
    <ToolbarContainer role="complementary">
      <Stack horizontal={true} horizontalAlign="start" tokens={toolbarTokens}>
        {children}
      </Stack>
    </ToolbarContainer>
  )
}

export function PageToolbarGrow() {
  return (
    <Stack.Item grow>
      <></>
    </Stack.Item>
  )
}
