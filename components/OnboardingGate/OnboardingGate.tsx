import { OnboardingFlow } from "$components"
import { useAuthenticatedUser } from "$hooks"
import { useAccountProfileQuery } from "$queries"
import styled from "@emotion/styled"
import { AnimationStyles, Spinner, SpinnerSize, Stack } from "@fluentui/react"

const AnimatedStack = styled(Stack)`
  ${AnimationStyles.slideUpIn20 as unknown as string}
  height: 85vh;
  width: 100vw;
`

export const OnboardingGate: React.FunctionComponent = ({ children }) => {
  const account = useAuthenticatedUser()
  const { data, loading } = useAccountProfileQuery({
    variables: { oid: account?.oid! },
  })

  if (loading) {
    return (
      <AnimatedStack verticalAlign={"center"} horizontalAlign={"center"}>
        <Spinner size={SpinnerSize.large} />
      </AnimatedStack>
    )
  } else {
    // If profile already exists
    if (data?.Accounts[0]?.Oid) {
      return <>{children}</>
    } else {
      // If profile does not exist, guide user to create it
      return <OnboardingFlow />
    }
  }
}
