import {
  Card,
  MemberDetailsCard,
  MemberLookupField,
  useDecisionTree,
} from "$components"
import {
  DialogFooter,
  DefaultButton,
  PrimaryButton,
  Text,
} from "@fluentui/react"

export const StudentAccountLinkingForm: React.FunctionComponent = () => {
  const { back, next } = useDecisionTree()

  return (
    <>
      <Card>
        <div style={{ marginBottom: 20 }}>
          <Text variant="xLarge">USA Fencing membership</Text>
          <Text variant="mediumPlus">
            <div>Link your membership to sync your ratings</div>
          </Text>
        </div>
        <MemberLookupField />

        <DialogFooter>
          <DefaultButton onClick={back}>Back</DefaultButton>
          <DefaultButton onClick={next}>Skip</DefaultButton>
          <PrimaryButton onClick={next}>Next</PrimaryButton>
        </DialogFooter>
      </Card>

      <MemberDetailsCard />
    </>
  )
}
