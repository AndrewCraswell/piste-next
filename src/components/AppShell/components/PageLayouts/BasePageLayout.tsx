import { PageTitle } from "$components/PageTitle"
import { useTitle } from "$hooks/useTitle"
import { PropsWithChildren } from "react"

export type BasePageLayoutProps = PropsWithChildren<{
  title: string
  skipTitleHeading?: boolean
  className?: string
}>

export function BasePageLayout(props: BasePageLayoutProps) {
  const { children, className, skipTitleHeading, title } = props
  useTitle(title)

  return (
    <div className={className}>
      {!skipTitleHeading && <PageTitle>{title}</PageTitle>}
      {children}
    </div>
  )
}
