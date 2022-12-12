import styled from "@emotion/styled"
import { BasePageLayoutProps, BasePageLayout } from "./BasePageLayout"

const PageLayout = styled(BasePageLayout)`
  margin: ${({ theme }) => theme.spacing.l2};
`

export function DefaultPageLayout({ children, ...props }: BasePageLayoutProps) {
  return <PageLayout {...props}>{children}</PageLayout>
}
