import { Card } from "$components"
import {
  DecisionTree,
  DecisionTemplate,
  IDecisionTreeContext,
} from "$components/DecisionTree"
import styled from "@emotion/styled"
import {
  Stack,
  MotionAnimations,
  MotionDurations,
  MotionTimings,
  IStackProps,
  DefaultButton,
  DialogFooter,
  PrimaryButton,
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
        <DecisionTemplate id="success">
          {({ back }: IDecisionTreeContext) => (
            <Card>
              Congratulations, you're done!
              <DialogFooter>
                <DefaultButton onClick={back}>Back</DefaultButton>
                <PrimaryButton>Get started!</PrimaryButton>
              </DialogFooter>
            </Card>
          )}
        </DecisionTemplate>

        {/* Student flow */}
        <DecisionTemplate id="student" nextId="student-usfa">
          <Card>
            <ProfileRegistrationForm />
          </Card>
        </DecisionTemplate>
        <DecisionTemplate id="student-usfa" nextId="success">
          {({ back, next }: IDecisionTreeContext) => (
            <Card>
              Sync with USFA Membership
              <DialogFooter>
                <DefaultButton onClick={back}>Back</DefaultButton>
                <PrimaryButton onClick={next}>Next</PrimaryButton>
              </DialogFooter>
            </Card>
          )}
        </DecisionTemplate>

        {/* Parent flow */}
        <DecisionTemplate id="parent" nextId="parent-children">
          <Card>
            <ProfileRegistrationForm />
          </Card>
        </DecisionTemplate>
        <DecisionTemplate id="parent-children" nextId="parent-usfa">
          {({ back, next }: IDecisionTreeContext) => (
            <Card>
              Add your children to your account
              <DialogFooter>
                <DefaultButton onClick={back}>Back</DefaultButton>
                <PrimaryButton onClick={next}>Next</PrimaryButton>
              </DialogFooter>
            </Card>
          )}
        </DecisionTemplate>
        <DecisionTemplate id="parent-usfa" nextId="success">
          {({ back, next }: IDecisionTreeContext) => (
            <Card>
              Sync your children with their USFA Memberships
              <DialogFooter>
                <DefaultButton onClick={back}>Back</DefaultButton>
                <PrimaryButton onClick={next}>Next</PrimaryButton>
              </DialogFooter>
            </Card>
          )}
        </DecisionTemplate>

        {/* Coach flow */}
        <DecisionTemplate id="coach">Coach</DecisionTemplate>
      </DecisionTree>
    </AnimatedStack>
  )
}
