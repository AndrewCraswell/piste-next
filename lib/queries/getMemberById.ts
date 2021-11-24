import { gql } from "@apollo/client";

const GET_MEMBER_BY_ID = gql`
  query MemberById($id: String!) {
    member: Members(where: { MemberId: { _eq: $id } }) {
      FirstName
      LastName
      MemberId
      Club1Name
      Division
      Birthdate
    }
  }
`;

export default GET_MEMBER_BY_ID;
