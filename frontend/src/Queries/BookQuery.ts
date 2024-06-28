import { gql } from "@apollo/client";

// Define your GraphQL query
export const GET_BOOKS = gql`
  query GetBooks {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;
