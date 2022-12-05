import styled from "@emotion/styled"
import { BasePageLayoutProps, BasePageLayout } from "./BasePageLayout"

const PageLayout = styled(BasePageLayout)`
  margin: ${({ theme }) => theme.spacing.l2};
`

export const DefaultPageLayout: React.FunctionComponent<
  BasePageLayoutProps
> = ({ children, ...props }) => <PageLayout {...props}>{children}</PageLayout>
