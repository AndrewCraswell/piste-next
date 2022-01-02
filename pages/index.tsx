import type { NextPage } from "next"

import { initializeApollo } from "$lib/apollo"
import { useSearchMembersLazyQuery } from "$queries"
import { MemberDetailsCard, PageTitle } from "$components"
import styled from "@emotion/styled"
import { useTitle } from "$hooks"
import { PrimaryButton, SearchBox, Spinner, SpinnerSize } from "@fluentui/react"
import { useEffect, useState } from "react"

const GridContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 332px));
  margin-top: 2em;
`

export const Dashboard: NextPage = () => {
  const pageTitle = "Dashboard"
  useTitle(pageTitle)

  const pageSize = 12
  const [fetch, { data: members, fetchMore, loading }] =
    useSearchMembersLazyQuery({
      notifyOnNetworkStatusChange: true,
    })
  const [pageNum, setPageNum] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch({
      variables: {
        filter: "%",
        count: pageSize,
      },
    })
  }, [fetch])

  return (
    <>
      <PageTitle>{pageTitle}</PageTitle>
      <SearchBox
        placeholder="Search"
        onSearch={(value) => {
          if (searchTerm === value) {
            return
          }

          setSearchTerm(value)
          setPageNum(0)
          if (value) {
            fetch({
              variables: {
                filter: `%${value}%`,
                count: pageSize,
              },
            })
          } else {
            fetch({
              variables: {
                filter: "%",
                count: pageSize,
              },
            })
          }
        }}
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

      {loading ? (
        <Spinner size={SpinnerSize.large} style={{ marginTop: "2em" }} />
      ) : (
        <PrimaryButton
          style={{ margin: "2em auto 0", display: "block" }}
          onClick={() => {
            setPageNum((val) => val + 1)
            fetchMore({
              variables: {
                filter: `%${searchTerm}%`,
                offset: pageSize * (pageNum + 1),
                count: pageSize,
              },
              updateQuery: (existing, incoming) => ({
                MembersLookup: [
                  ...existing.MembersLookup,
                  ...incoming.fetchMoreResult?.MembersLookup!,
                ],
              }),
            })
          }}
        >
          Load more
        </PrimaryButton>
      )}
    </>
  )
}

export const getStaticProps = async () => {
  const apolloClient = initializeApollo()
  return { props: { initialApolloState: apolloClient.cache.extract() } }
}

export default Dashboard
