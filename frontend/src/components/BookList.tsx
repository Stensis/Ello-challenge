import React from 'react';
import { Button, Avatar, CardHeader, Card, CardMedia, Typography, Grid, Box } from '@mui/material';
import theme from '../constants/theme';
import { BookListProps } from '../lib/interfaces';

// BookList component: Displays a list of books with details and an "Add to Reading List" button
const BookList: React.FC<BookListProps> = ({ books, onAdd }) => {
  return (
    <Grid container spacing={3} margin={1}>
      {books.map((book, index) => (
        <Grid item xs={12} sm={6} md={4} key={`${book.title}-${index}`}>
          <Card sx={{ background: theme.palette.background.paper }}>
            {/* CardHeader with Avatar displaying the book title initial */}
            <CardHeader
              avatar={
                <Avatar sx={{ background: theme.palette.secondary.main }} aria-label="book title">
                  {book.title.charAt(0).toUpperCase()}
                </Avatar>
              }
              title={book.title}
              subheader={book.author}
            />
            <CardMedia
              component="img"
              height="194"
              image={book.coverPhotoURL}
              alt={book.title}
            />

            {/* Box displaying reading level and "Add to Reading List" button */}
            <Box display="flex" justifyContent="space-evenly" alignItems="center" px={2} py={1}>
              <Typography variant="body2" color="text.secondary">
                Reading Level: {book.readingLevel} {/* Display the reading level of the book */}
              </Typography>
              {/* Button to add the book to the reading list */}
              <Button variant="outlined"
                sx={{ color: theme.palette.primary.contrastText, border: "1px solid", borderColor: theme.palette.secondary.main }} size="small" onClick={() => onAdd(book)}>
                Add to Reading List
              </Button>
            </Box>
          </Card>
        </Grid>
      ))
      }
    </Grid >
  );
};

export default BookList;
