import type { NextPage, GetServerSideProps } from "next"
import { initializeApollo } from "$lib/apollo"
import { useSearchMembersLazyQuery, SearchMembersDocument } from "$queries"
import { MemberDetailsCard, PageTitle } from "$components"
import styled from "@emotion/styled"
import { useTitle } from "$hooks"
import { PrimaryButton, SearchBox, Spinner, SpinnerSize } from "@fluentui/react"
import { useCallback, useEffect, useState } from "react"

const pageSize = 12

const GridContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 330px));
  margin-top: 2em;
`

export const Overview: NextPage = () => {
  const pageTitle = "Overview"
  useTitle(pageTitle)

  const [fetch, { data: members, fetchMore, loading }] =
    useSearchMembersLazyQuery({
      notifyOnNetworkStatusChange: true,
    })
  const [pageNum, setPageNum] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")

  const fetchMembers = useCallback(() => {
    setPageNum((val) => val + 1)
    fetchMore({
      variables: {
        filter: `%${searchTerm}%`,
        offset: pageSize * (pageNum + 1),
        count: pageSize,
      },
      updateQuery: (existing, incoming) => ({
        AssociationMembersLookup: [
          ...existing.AssociationMembersLookup,
          ...incoming.fetchMoreResult?.AssociationMembersLookup!,
        ],
      }),
    })
  }, [fetchMore, pageNum, searchTerm])

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
        {members?.AssociationMembersLookup.map((member) => (
          <MemberDetailsCard
            key={member.AssociationMemberId}
            details={{
              fullName: member.FullName,
              secondaryText:
                member?.Club1Name ||
                member?.Club2Name ||
                member?.Division ||
                "",
              memberId: member?.AssociationMemberId,
              membershipExpiration: member?.Expiration,
              birthdate: member?.Birthdate,
              foilRating: member?.Foil,
              epeeRating: member?.Epee,
              sabreRating: member?.Saber,
            }}
          />
        ))}
      </GridContainer>

      {loading ? (
        <Spinner size={SpinnerSize.large} style={{ marginTop: "2em" }} />
      ) : (
        <PrimaryButton
          style={{ margin: "2em auto 0", display: "block" }}
          onClick={fetchMembers}
        >
          Load more
        </PrimaryButton>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: SearchMembersDocument,
    variables: {
      filter: "%",
      count: pageSize,
    },
  })

  return { props: { initialApolloState: apolloClient.cache.extract() } }
}

export default Overview
