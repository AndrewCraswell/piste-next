import styled from "@emotion/styled"

const PageContainer = styled.div`
  overflow-y: auto;
  width: 100%;
  padding: 32px;
`

const PageContent = styled.main`
  max-width: 1024px;
  width: 100%;
`

export const AppPage: React.FunctionComponent = ({ children }) => {
  return (
    <PageContainer>
      <PageContent>{children}</PageContent>
    </PageContainer>
  )
}
