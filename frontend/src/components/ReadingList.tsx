import React from 'react';
import { Button, Avatar, CardHeader, Card, CardMedia, Typography, Grid, Box } from '@mui/material';
import theme from '../constants/theme';
import { ReadingListProps } from '../lib/interfaces';

const ReadingList: React.FC<ReadingListProps> = ({ readingList, onRemove }) => {

  return (
    <Grid container spacing={3} margin={1}>
      {readingList.map((book, index) => (
        <Grid item xs={12} sm={6} md={4} key={`${book.title}-${index}`}>
          <Card sx={{ background: theme.palette.background.paper, height: "auto" }}>
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
              height="200"
              image={book.coverPhotoURL}
              alt={book.title}
            />
            <Box display="flex" justifyContent="space-evenly" alignItems="center" px={2} py={1}>
              <Typography variant="body2" color="text.secondary">
                Reading Level: {book.readingLevel}
              </Typography>
              <Button sx={{ color: theme.palette.error.main }} size="small" onClick={() => onRemove(book)}>Remove</Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ReadingList;
