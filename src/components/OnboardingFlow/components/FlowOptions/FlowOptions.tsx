import { useDecisionTree } from "$components/DecisionTree"
import styled from "@emotion/styled"
import { Stack, Separator, Text } from "@fluentui/react"
import { CompoundButton } from "@fluentui/react-components"

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

export const FlowOptions: React.FunctionComponent = () => {
  const { goTo } = useDecisionTree()

  return (
    <>
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
        <CompoundButton
          appearance="primary"
          secondaryContent="I'm ready to try classes"
          onClick={() => {
            goTo("student")
          }}
        >
          Student
        </CompoundButton>

        <ThemedSeparator alignContent="center">Or</ThemedSeparator>

        <CompoundButton
          secondaryContent="I schedule lessons for my family"
          onClick={() => {
            goTo("parent")
          }}
        >
          Parent
        </CompoundButton>

        <CompoundButton
          secondaryContent="I own or teach at an existing club"
          disabled
          onClick={() => {
            goTo("coach")
          }}
        >
          Coach
        </CompoundButton>
      </Stack>
    </>
  )
}
