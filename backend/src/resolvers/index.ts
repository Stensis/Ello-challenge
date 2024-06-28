import { booksData } from '../data/books';

export const resolvers = {
  Query: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    books: (_: any, { title }: { title: string }) => {
      if (title) {
        return booksData.filter((book) =>
          book.title.toLowerCase().includes(title.toLowerCase())
        );
      }
      return booksData;
    },
  },
};
