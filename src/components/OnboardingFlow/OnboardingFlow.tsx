import { Card } from "$components"
import {
  DecisionTree,
  DecisionTemplate,
  IDecisionTreeContext,
} from "$components/DecisionTree"
import styled from "@emotion/styled"
import { Stack, DialogFooter, AnimationStyles } from "@fluentui/react"
import { Button } from "@fluentui/react-components"

import {
  FlowOptions,
  ProfileRegistrationForm,
  StudentAccountLinkingForm,
} from "./components"

const AnimatedStack = styled(Stack)`
  ${AnimationStyles.slideUpIn20 as unknown as string}
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
                <Button onClick={back}>Back</Button>
                <Button appearance="primary">Get started!</Button>
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
          <StudentAccountLinkingForm />
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
                <Button onClick={back}>Back</Button>
                <Button appearance="primary" onClick={next}>
                  Next
                </Button>
              </DialogFooter>
            </Card>
          )}
        </DecisionTemplate>
        <DecisionTemplate id="parent-usfa" nextId="success">
          {({ back, next }: IDecisionTreeContext) => (
            <Card>
              Sync your children with their USFA Memberships
              <DialogFooter>
                <Button onClick={back}>Back</Button>
                <Button appearance="primary" onClick={next}>
                  Next
                </Button>
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
