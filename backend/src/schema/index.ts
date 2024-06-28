export const typeDefs = `
  type Book {
    title: String
    author: String
    coverPhotoURL: String
    readingLevel: String
  }

  type Query {
    books: [Book]
  }
`;


