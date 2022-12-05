import { PageTitle } from "$components/PageTitle"
import { useTitle } from "$hooks/useTitle"

export type BasePageLayoutProps = {
  title: string
  skipTitleHeading?: boolean
  className?: string
}

export const BasePageLayout: React.FunctionComponent<BasePageLayoutProps> = ({
  children,
  className,
  skipTitleHeading,
  title,
}) => {
  useTitle(title)

  return (
    <div className={className}>
      {!skipTitleHeading && <PageTitle>{title}</PageTitle>}
      {children}
    </div>
  )
}
