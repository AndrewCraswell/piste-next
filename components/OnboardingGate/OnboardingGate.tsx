import { OnboardingFlow } from "$components"
import { useAuthenticatedUser } from "$hooks"
import { useUserByIdQuery } from "$queries"
import styled from "@emotion/styled"
import {
  MotionAnimations,
  MotionDurations,
  MotionTimings,
  Spinner,
  SpinnerSize,
  Stack,
} from "@fluentui/react"

const AnimatedStack = styled(Stack)`
  animation: ${MotionAnimations.slideUpIn};
  animation-duration: ${MotionDurations.duration4};
  animation-timing-function: ${MotionTimings.decelerate};
  height: 85vh;
  width: 100vw;
`

export const OnboardingGate: React.FunctionComponent = ({ children }) => {
  const user = useAuthenticatedUser()
  const { data, loading } = useUserByIdQuery({
    variables: { id: user?.idTokenClaims.oid! },
  })

  if (loading) {
    return (
      <AnimatedStack verticalAlign={"center"} horizontalAlign={"center"}>
        <Spinner size={SpinnerSize.large} />
      </AnimatedStack>
    )
  } else {
    // If profile already exists
    if (data?.Users[0]?.Oid) {
      return <>{children}</>
    } else {
      // If profile does not exist, guide user to create it
      return <OnboardingFlow />
    }
  }
}
