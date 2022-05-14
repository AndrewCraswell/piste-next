import { Card, MemberDetailsCard, useDecisionTree } from "$components"
import { useGetMemberDetailsByNameQuery } from "$queries"
import { DialogFooter } from "@fluentui/react"
import { Button, Text } from "@fluentui/react-components"

export const StudentAccountLinkingForm: React.FunctionComponent = () => {
  const { back, next } = useDecisionTree()
  const { data: members } = useGetMemberDetailsByNameQuery({
    variables: {
      firstName: "Andrew",
      lastName: "Chen",
    },
  })

  return (
    <>
      <Card>
        <div style={{ marginBottom: 20 }}>
          <Text size={500}>Is this you?</Text>
          <Text size={400}>
            <div>There is a USA Fencing member that matches your profile</div>
          </Text>
        </div>

        <DialogFooter>
          <Button onClick={back}>Back</Button>
          <Button onClick={next}>Skip</Button>
          <Button appearance="primary" onClick={next}>
            Next
          </Button>
        </DialogFooter>
      </Card>

      <div style={{ width: 400 }}>
        {members?.AssociationMembersLookup.map((member) => (
          <MemberDetailsCard
            key={member.AssociationMemberId}
            details={{
              fullName: `${member.FirstName} ${member.LastName}`,
              secondaryText:
                member.Club1Name || member.Club2Name || member.Division || "",
              memberId: member.AssociationMemberId,
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
