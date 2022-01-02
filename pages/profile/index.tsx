import type { NextPage } from "next"
import { PageTitle } from "$components"
import { useTitle } from "$hooks"
import { ProfileRegistrationForm } from "$components/OnboardingFlow/components"

export const Profile: NextPage = () => {
  const pageTitle = "Profile"
  useTitle(pageTitle)

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>

      <ProfileRegistrationForm />
    </>
  )
}

export default Profile
