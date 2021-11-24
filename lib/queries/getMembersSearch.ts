import { gql } from "@apollo/client";

const GET_MEMBERS_SEARCH = gql`
  query SearchMembers($input: String!) {
    members: MembersLookup(
      limit: 25
      where: { FullName: { _like: $input } }
      order_by: { FullName: asc }
    ) {
      FullName
      Member {
        Club1Name
        Club2Name
        Division
        MemberId
      }
    }
  }
`;

export default GET_MEMBERS_SEARCH;
