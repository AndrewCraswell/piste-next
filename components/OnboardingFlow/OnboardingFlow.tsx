import styled from "@emotion/styled"
import {
  Stack,
  CompoundButton,
  Separator,
  Text,
  MotionAnimations,
  MotionDurations,
  MotionTimings,
} from "@fluentui/react"

const AnimatedStack = styled(Stack)`
  animation: ${MotionAnimations.slideUpIn};
  animation-duration: ${MotionDurations.duration4};
  animation-timing-function: ${MotionTimings.decelerate};
  height: 85vh;
  width: 100vw;
`

const HeroStack = styled(Stack)`
  margin-bottom: 3em;
`

const ThemedSeparator = styled(Separator)`
  &:before {
    background-color: ${({ theme }) => theme.palette.neutralTertiaryAlt};
  }

  & > div {
    background: ${({ theme }) => theme.palette.neutralLighterAlt};
  }
`

export const OnboardingFlow: React.FunctionComponent = () => {
  return (
    <AnimatedStack
      tokens={{ childrenGap: 24 }}
      verticalAlign={"center"}
      horizontalAlign={"center"}
    >
      <HeroStack
        verticalAlign={"center"}
        horizontalAlign="center"
        tokens={{ childrenGap: 32 }}
      >
        <Text variant="xxLargePlus">Welcome to the Piste!</Text>
        <Text variant="large">
          Let's find the best onboarding experience for you
        </Text>
      </HeroStack>

      <Stack tokens={{ childrenGap: 12 }}>
        <CompoundButton primary secondaryText="I'm ready to try classes">
          Student
        </CompoundButton>

        <ThemedSeparator alignContent="center">Or</ThemedSeparator>

        <CompoundButton
          secondaryText="I schedule lessons for my family"
          disabled
        >
          Parent
        </CompoundButton>

        <CompoundButton
          secondaryText="I own or teach at an existing club"
          disabled
        >
          Coach
        </CompoundButton>
      </Stack>
    </AnimatedStack>
  )
}
