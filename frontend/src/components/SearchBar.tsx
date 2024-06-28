import React from 'react';
import { Autocomplete, TextField, Box, Button, Typography, Divider } from '@mui/material';
import theme from '../constants/theme';
import { Book, SearchBarProps } from '../lib/interfaces';

// SearchBar component: Allows users to search and select books
const SearchBar: React.FC<SearchBarProps> = ({ books, onSelect }) => {
  // State to track the currently selected book
  const [selectedBook, setSelectedBook] = React.useState<Book | null>(null);

  // Handler function invoked when the "Add" button is clicked
  const handleAdd = () => {
    if (selectedBook) {
      // Call onSelect callback with the selected book to add it
      onSelect(selectedBook);
      // Reset selectedBook state after adding
      setSelectedBook(null);
    }
  };

  return (
    <Box width="100%" display="flex" justifyContent="center" alignItems="center" flexDirection="column" py={3}>

      {/* Autocomplete component for book selection */}
      <Autocomplete
        // List of books to display in the Autocomplete dropdown
        options={books}
        // Display format for each book option 
        getOptionLabel={(book) => `${book.title} - ${book.author}`}
        onChange={(event, book) => {
          // Update selected book when an option is selected
          setSelectedBook(book);
        }}
        renderInput={(params) => (
          <TextField {...params} label="Book Title" variant="outlined" fullWidth />
        )}
        renderOption={(props, book, { selected }) => (
          // Custom rendering for each book option in the dropdown
          <Box
            display="flex"
            alignItems="center"
            component="li"
            {...props}
            sx={{ '&:hover': { backgroundColor: '#f0f0f0' }, py: 1, width: '100%' }}
          >
            <img
              loading="lazy"
              width="20"
              src={book.coverPhotoURL}
              alt={book.title}
              style={{ marginRight: 8 }}
            />
            <Box flex="1">
              <Typography variant="body1">{book.title}</Typography>
              <Typography variant="body2" color="textSecondary">{book.author}</Typography>
            </Box>
            {/* Add button for each book option */}
            <Button
              variant="contained"
              // Call handleAdd function when the button is clicked
              onClick={() => {
                setSelectedBook(book);
                handleAdd();
              }}
              sx={{ ml: 2, backgroundColor: theme.palette.secondary.main }}
            >
              Add
            </Button>
          </Box>
        )}
        style={{ width: '100%', maxWidth: 400 }}
      />
      {/* Divider between book items */}
      <Divider style={{ width: '100%', marginTop: '12px', marginBottom: '12px' }} />
    </Box>
  );
};

export default SearchBar;
