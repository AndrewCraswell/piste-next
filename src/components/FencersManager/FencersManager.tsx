import styled from "@emotion/styled"

import { AddFencerCard, FencerCard, EditFencerDialog } from "$components"
import { useAccountProfile, useDisclosure } from "$hooks"
import { useGetAccountFencersLazyQuery } from "$queries"
import { useEffect } from "react"

const FencersGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 280px));
`

export const FencersManager: React.FunctionComponent = () => {
  const { account } = useAccountProfile()
  const {
    isOpen: isEditFencerDialogOpen,
    onClose: onCloseEditFencerDialog,
    onOpen: onOpenEditFencerDialog,
  } = useDisclosure(false)

  const [
    getAccountFencers,
    { data: accountFencers, loading: isLoadingFencers },
  ] = useGetAccountFencersLazyQuery()

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
          <FencerCard key={fencer.StudentId} fencer={fencer} />
        ))}
        <AddFencerCard onClick={onOpenEditFencerDialog} />
      </FencersGrid>
      <EditFencerDialog
        isOpen={isEditFencerDialogOpen}
        onClose={onCloseEditFencerDialog}
        onSaved={onCloseEditFencerDialog}
      />
    </>
  )
}

// TODO: Move EditFencerDialog into the AddFencerCard component
