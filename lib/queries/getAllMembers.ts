import { gql } from "@apollo/client";

const GET_ALL_MEMBERS = gql`
  query AllMembers {
    members: USAFencing_Members {
      FirstName
      LastName
      MemberId
    }
  }
`;

export default GET_ALL_MEMBERS;
