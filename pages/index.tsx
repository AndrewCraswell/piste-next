import type { NextPage } from "next"

import { initializeApollo } from "$lib/apollo"
import {
  useMemberDetailsByNameLazyQuery,
  useSearchMembersLazyQuery,
} from "$queries"
import { MemberDetailsCard, PageTitle } from "$components"
import styled from "@emotion/styled"
import { useTitle } from "$hooks"
import { SearchBox } from "@fluentui/react"
import { useEffect } from "react"

const GridContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 332px));
  margin-top: 2em;
`

export const Dashboard: NextPage = () => {
  const pageTitle = "Dashboard"
  useTitle(pageTitle)

  const [fetch, { data: members }] = useSearchMembersLazyQuery()

  useEffect(() => {
    fetch({
      variables: {
        filter: "%",
        count: 12,
      },
    })
  }, [])

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      <SearchBox
        placeholder="Search"
        onSearch={(newValue) =>
          fetch({
            variables: {
              filter: `%${newValue}%`,
              count: 30,
            },
          })
        }
      />
      <GridContainer>
        {members?.MembersLookup.map(({ FullName, Member, MemberId }) => (
          <MemberDetailsCard
            key={MemberId}
            details={{
              fullName: FullName,
              secondaryText:
                Member?.Club1Name ||
                Member?.Club2Name ||
                Member?.Division ||
                "",
              memberId: Member?.MemberId,
              membershipExpiration: Member?.Expiration,
              birthdate: Member?.Birthdate,
              foilRating: Member?.Foil,
              epeeRating: Member?.Epee,
              sabreRating: Member?.Saber,
            }}
          />
        ))}
      </GridContainer>
    </>
  )
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()
  return { props: { initialApolloState: apolloClient.cache.extract() } }
}

export default Dashboard
