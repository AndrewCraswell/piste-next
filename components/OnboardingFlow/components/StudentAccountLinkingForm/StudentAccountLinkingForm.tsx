import { Card, MemberDetailsCard, useDecisionTree } from "$components"
import { useMemberDetailsByNameQuery } from "$queries"
import {
  DialogFooter,
  DefaultButton,
  PrimaryButton,
  Text,
} from "@fluentui/react"

export const StudentAccountLinkingForm: React.FunctionComponent = () => {
  const { back, next } = useDecisionTree()
  const { data: members } = useMemberDetailsByNameQuery({
    variables: {
      firstName: "Andrew",
      lastName: "Chen",
    },
  })

  return (
    <>
      <Card>
        <div style={{ marginBottom: 20 }}>
          <Text variant="xLarge">Is this you?</Text>
          <Text variant="mediumPlus">
            <div>There is a USA Fencing member that matches your profile</div>
          </Text>
        </div>

        <DialogFooter>
          <DefaultButton onClick={back}>Back</DefaultButton>
          <DefaultButton onClick={next}>Skip</DefaultButton>
          <PrimaryButton onClick={next}>Next</PrimaryButton>
        </DialogFooter>
      </Card>

      <div style={{ width: 400 }}>
        {members?.Members.map((member) => (
          <MemberDetailsCard
            key={member.MemberId}
            details={{
              fullName: `${member.FirstName} ${member.LastName}`,
              secondaryText:
                member.Club1Name || member.Club2Name || member.Division || "",
              memberId: member.MemberId,
              membershipExpiration: member.Expiration,
              birthdate: member.Birthdate,
              foilRating: member.Foil,
              epeeRating: member.Epee,
              sabreRating: member.Saber,
            }}
          />
        ))}
      </div>
    </>
  )
}
