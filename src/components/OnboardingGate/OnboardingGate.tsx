import styled from "@emotion/styled"
import { AnimationStyles, Stack } from "@fluentui/react"
import { Spinner } from "@fluentui/react-components"
import { useLocation, useNavigate } from "react-router-dom"

import { useAccountProfile } from "$hooks"
import { useEffect } from "react"

const AnimatedStack = styled(Stack)`
  ${AnimationStyles.slideUpIn20 as unknown as string}
  height: 60%;
`

export const OnboardingGate: React.FunctionComponent = ({ children }) => {
  const { loading, account, previousData } = useAccountProfile()
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!pathname.startsWith("/onboarding") && !account.PrimaryStudentId) {
      navigate("/onboarding", {
        replace: true,
      })
    }
  }, [account.PrimaryStudentId, navigate, pathname])

  if (!previousData && loading) {
    return (
      <AnimatedStack verticalAlign={"center"} horizontalAlign={"center"}>
        <Spinner labelPosition="below" label="Loading your account..." />
      </AnimatedStack>
    )
  } else {
    return <>{children}</>
  }
}
