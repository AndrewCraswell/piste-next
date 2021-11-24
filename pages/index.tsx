import { useApolloClient } from "@apollo/client"
import type { NextPage } from "next"
import {
  PrimaryButton,
  Stack,
  NormalPeoplePicker,
  PersonaSize,
  CompoundButton,
  Dialog,
  IPersonaProps,
  IBasePicker,
} from "@fluentui/react"
import React, { useRef } from "react"

import { initializeApollo } from "$lib/apollo"
import { Card } from "$components"
import {
  SearchMembersDocument,
  SearchMembersQuery,
  SearchMembersQueryVariables,
} from "$queries"

type MemberPersona = IPersonaProps & {
  memberId: string
}

const Home: NextPage = () => {
  const client = useApolloClient()
  const picker = useRef<IBasePicker<IPersonaProps>>(null)

  return (
    <>
      <Card>
        <Stack tokens={{ childrenGap: 8, padding: 12 }}>
          <Stack horizontal tokens={{ childrenGap: 4 }}>
            <NormalPeoplePicker
              onResolveSuggestions={async (filter) => {
                const { data } = await client.query<
                  SearchMembersQuery,
                  SearchMembersQueryVariables
                >({
                  query: SearchMembersDocument,
                  variables: { filter: `${filter}%` },
                })

                const suggestions: MemberPersona[] = data.members.map((m) => ({
                  text: m.FullName,
                  size: PersonaSize.size24,
                  memberId: m.MemberId,
                  secondaryText: m.Member?.Club1Name || undefined,
                }))

                return suggestions
              }}
              resolveDelay={350}
              onItemSelected={(selectedItem?: IPersonaProps | undefined) => {
                const items = picker.current?.items || []
                if (selectedItem) {
                  console.log([...items, selectedItem])
                  return selectedItem
                } else {
                  console.log([...items])
                  return null
                }
              }}
              componentRef={picker}
            />

            <PrimaryButton>Link</PrimaryButton>
          </Stack>
        </Stack>
      </Card>

      {/* {result && result.member && result.member.length > 0 && (
        <div style={{ padding: "24px 0" }}>
          {JSON.stringify(result.member[0])}
        </div>
      )} */}

      <Dialog
        hidden={true}
        modalProps={{}}
        dialogContentProps={{
          showCloseButton: true,
          title: "Register for Piste",
          subText: "How would you like to onboard to the platform?",
        }}
      >
        <Stack tokens={{ childrenGap: 4 }}>
          <CompoundButton
            primary
            secondaryText="I'm a student wanting to join a club"
          >
            Student
          </CompoundButton>
          <CompoundButton secondaryText="I'm a parent who will register my children">
            Parent
          </CompoundButton>
          <CompoundButton secondaryText="I'm a coach registering my club">
            Coach
          </CompoundButton>
        </Stack>
      </Dialog>
    </>
  )
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()
  return { props: { initialApolloState: apolloClient.cache.extract() } }
}

export default Home
