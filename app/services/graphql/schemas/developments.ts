import { gql } from "graphql-request";

export const GET_DEVELOPMENTS = gql`
  {
    developments {
      id
      name
      description
      image
      sourceCodeUrl
      demoUrl
    }
  }
`;
