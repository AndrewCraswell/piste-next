import styled from "@emotion/styled"

const PageContainer = styled.div`
  overflow-y: auto;
  width: 100%;
`

const PageContent = styled.main`
  max-width: 1024px;
  padding: 32px;
  width: 100%;
  box-sizing: content-box;
`

export const AppPage: React.FunctionComponent = ({ children }) => {
  return (
    <PageContainer>
      <PageContent>{children}</PageContent>
    </PageContainer>
  )
}
