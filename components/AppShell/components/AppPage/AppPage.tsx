import styled from "@emotion/styled"
import { DetailedHTMLProps, HTMLAttributes } from "react"

const PageContainer = styled.div`
  width: 100%;
  padding: 32px;
`

const PageContent = styled.main`
  max-width: 1024px;
  width: 100%;
`

export interface IAppPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const AppPage: React.FunctionComponent<IAppPageProps> = ({
  children,
  ...props
}) => {
  return (
    <PageContainer {...props}>
      <PageContent>{children}</PageContent>
    </PageContainer>
  )
}
