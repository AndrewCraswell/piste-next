import { PageTitle } from "$components/PageTitle"
import { useTitle } from "$hooks"

const ClubsPage: React.FunctionComponent = () => {
  const pageTitle = "Clubs"
  useTitle(pageTitle)

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
    </>
  )
}

export default ClubsPage
