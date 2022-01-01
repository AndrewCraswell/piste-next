import type { NextPage } from "next"
import { PageTitle } from "$components"
import { useTitle } from "$hooks"

export const Profile: NextPage = () => {
  const pageTitle = "Profile"
  useTitle(pageTitle)

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
    </>
  )
}

export default Profile
