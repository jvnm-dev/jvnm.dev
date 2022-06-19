import { gql } from "graphql-request";

export const GET_EXPERIENCES = gql`
  {
    experiences {
      id
      image
      place
      dateFrom
      dateTo
      role
      url
      isExtiaConsulting
      journey {
        id
      }
    }
  }
`;
