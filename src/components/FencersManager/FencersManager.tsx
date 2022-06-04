import styled from "@emotion/styled"

import {
  AddFencerCard,
  FencerProfileCard,
} from "$components/Cards/FencerProfileCard"
import { useAccountProfile } from "$hooks"
import { useGetAccountFencersLazyQuery } from "$queries"
import { useEffect } from "react"

const FencersGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 280px));
`

export const FencersManager: React.FunctionComponent = () => {
  const { account } = useAccountProfile()

  const [getAccountFencers, { data: accountFencers }] =
    useGetAccountFencersLazyQuery()

  useEffect(() => {
    if (account.UserId) {
      getAccountFencers({
        variables: {
          oid: account.UserId,
        },
      })
    }
  }, [account.UserId, getAccountFencers])

  return (
    <>
      <FencersGrid>
        {accountFencers?.Students?.filter(
          (f) => f.StudentId !== account.PrimaryStudentId
        ).map((fencer) => (
          <FencerProfileCard key={fencer.StudentId} fencer={fencer} />
        ))}
        <AddFencerCard />
      </FencersGrid>
    </>
  )
}
