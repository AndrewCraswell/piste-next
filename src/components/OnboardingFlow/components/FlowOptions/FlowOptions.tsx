import { useDecisionTree } from "$components/DecisionTree"
import styled from "@emotion/styled"
import { Stack } from "@fluentui/react"
import { CompoundButton, Divider } from "@fluentui/react-components"
import { Text } from "@fluentui/react-components"

const HeroStack = styled(Stack)`
  margin-bottom: 3em;
`

const AlignedCompoundButton = styled(CompoundButton)`
  justify-content: flex-start;
`

export const FlowOptions: React.FunctionComponent = () => {
  const { goTo } = useDecisionTree()

  return (
    <>
      <HeroStack
        verticalAlign={"center"}
        horizontalAlign="center"
        tokens={{ childrenGap: 32 }}
      >
        <Text size={800}>
          Welcome to the {process.env.NEXT_PUBLIC_SITE_NAME}!
        </Text>
        <Text size={500}>
          Let's find the best onboarding experience for you
        </Text>
      </HeroStack>

      <Stack tokens={{ childrenGap: 12 }}>
        <AlignedCompoundButton
          size="large"
          appearance="primary"
          secondaryContent="I'm ready to try some classes"
          onClick={() => {
            goTo("student")
          }}
        >
          Student
        </AlignedCompoundButton>

        <Divider>Or</Divider>

        <AlignedCompoundButton
          size="large"
          secondaryContent="I schedule lessons for my family"
          onClick={() => {
            goTo("parent")
          }}
        >
          Parent
        </AlignedCompoundButton>

        <AlignedCompoundButton
          size="large"
          secondaryContent="I own or teach at an existing club"
          disabled
          onClick={() => {
            goTo("coach")
          }}
        >
          Coach
        </AlignedCompoundButton>
      </Stack>
    </>
  )
}
