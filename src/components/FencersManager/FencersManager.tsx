import styled from "@emotion/styled"

import { AddFencerCard, FencerCard, IFencerFormFields } from "$components"
import { useAccountProfile, useDisclosure } from "$hooks"
import { EditFencerDialog } from "./components"
import {
  useAddFencerToAccountMutation,
  GetAccountFencersDocument,
  useGetAccountFencersLazyQuery,
} from "$queries"
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

  const [addFencerToAccount, { loading: isAddingFencer }] =
    useAddFencerToAccountMutation({
      refetchQueries: (result) => [
        {
          query: GetAccountFencersDocument,
          variables: {
            oid: result.data?.insert_Students_one?.Oid,
          },
        },
      ],
    })

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
        {accountFencers?.Students?.map((fencer) => (
          <FencerCard
            key={fencer.StudentId}
            fencer={fencer}
            primaryFencerId={account.PrimaryStudentId}
          />
        ))}
        <AddFencerCard onClick={onOpenEditFencerDialog} />
      </FencersGrid>
      <EditFencerDialog
        isOpen={isEditFencerDialogOpen}
        onClose={onCloseEditFencerDialog}
        onSaved={(fencer: IFencerFormFields) => {
          addFencerToAccount({
            variables: {
              fencer,
            },
          })
          onCloseEditFencerDialog()
        }}
      />
    </>
  )
}
