import { Card } from "$components"
import { DecisionTree, DecisionTemplate } from "$components/DecisionTree"
import styled from "@emotion/styled"
import {
  Stack,
  MotionAnimations,
  MotionDurations,
  MotionTimings,
  IStackProps,
} from "@fluentui/react"

import { FlowOptions, ProfileRegistrationForm } from "./components"

const AnimatedStack = styled(Stack)`
  animation: ${MotionAnimations.slideUpIn};
  animation-duration: ${MotionDurations.duration4};
  animation-timing-function: ${MotionTimings.decelerate};
  height: 85vh;
  width: 100%;
  max-width: 100vw;
`

export const OnboardingFlow: React.FunctionComponent = () => {
  return (
    <AnimatedStack
      tokens={{ childrenGap: 24 }}
      verticalAlign={"center"}
      horizontalAlign={"center"}
    >
      <DecisionTree defaultDecisionId="options">
        <DecisionTemplate id="options">
          <FlowOptions />
        </DecisionTemplate>
        <DecisionTemplate id="student">
          <Card>
            <ProfileRegistrationForm />
          </Card>
        </DecisionTemplate>
        <DecisionTemplate id="parent">Parent</DecisionTemplate>
        <DecisionTemplate id="coach">Coach</DecisionTemplate>
      </DecisionTree>
    </AnimatedStack>
  )
}
