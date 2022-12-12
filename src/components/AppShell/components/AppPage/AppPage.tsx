import { IStyleableProps } from "$types"
import styled from "@emotion/styled"
import { DetailedHTMLProps, HTMLAttributes } from "react"

const PageContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.white};
`

const PageContent = styled.main`
  width: 100%;
  height: 100%;
`

export interface IAppPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    IStyleableProps {}

export function AppPage({ children, className, ...props }: IAppPageProps) {
  return (
    <PageContainer className={className} {...props}>
      <PageContent>{children}</PageContent>
    </PageContainer>
  )
}
