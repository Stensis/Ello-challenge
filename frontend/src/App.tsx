import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Loader from './components/LoadingData';
import ReadingList from './components/ReadingList';
import { GET_BOOKS } from './Queries/BookQuery';
import { Box, Typography, Grid, ThemeProvider, CssBaseline } from '@mui/material';
import SearchBar from './components/SearchBar';
import theme from './constants/theme';
import { Book } from './lib/interfaces';
import BookList from './components/BookList';

const App = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [readingList, setReadingList] = useState<Book[]>([]);
  const [searchQuery] = useState<string>('');

  const { loading, error, data } = useQuery(GET_BOOKS);

  useEffect(() => {
    if (data && data.books) {
      setBooks(data.books);
    }
  }, [data]);

  // Function to add a book to the reading list, prepending it to maintain order
  const handleAddToReadingList = (book: Book) => {
    // Check if the book is already in the reading list
    const isAlreadyAdded = readingList.some((item) => item.title === book.title);

    if (!isAlreadyAdded) {
      // Prepend the new book to the reading list to appear at the beginning
      setReadingList([book, ...readingList]);
    }
  };

  const handleRemoveFromReadingList = (book: Book) => {
    setReadingList((prevReadingList) =>
      prevReadingList.filter((b) => b.title !== book.title)
    );
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const handleSelectBook = (book: Book) => {
    handleAddToReadingList(book);
  };

  // Filtered books excluding those in reading list
  const filteredBooks = books.filter((book) =>
    !readingList.some((item) => item.title === book.title)
    && book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) {
    console.error('Error fetching books:', error);
    return <Typography variant='h6'>Error fetching books. Please try again later.</Typography>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box display="flex" justifyContent="center" alignItems="center" mt={1}>
        <img src="/assets/ello.png" alt="Illustration for Reading List" style={{ width: '100%', maxWidth: 400, height: 100 }} />
      </Box>

      <Box p={2}>
        <Box display="flex" justifyContent="center" alignItems="center" mb={1}>
          <SearchBar books={filteredBooks} onSelect={handleSelectBook} />
        </Box>

        {readingList.length > 0 ? (
          <>
            <Typography variant='h5' gutterBottom >Reading List</Typography>
            <Grid container spacing={4}>
              <ReadingList readingList={readingList} onRemove={handleRemoveFromReadingList} />
            </Grid>
          </>
        ) : null}

        {/* Display Book List only if there are books not in the reading list */}
        {filteredBooks.length > 0 && readingList.length === 0 && (
          <>
            <Typography variant='h5' gutterBottom>Book List</Typography>
            <Grid container spacing={3}>
              <BookList books={filteredBooks} onAdd={handleAddToReadingList} />
            </Grid>
          </>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default App;
