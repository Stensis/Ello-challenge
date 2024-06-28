export interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}

export interface ReadingListProps {
  readingList: Book[];
  onRemove: (book: Book) => void;
}

// Define the props expected by the BookList component
export interface BookListProps {
  // Array of books to display
  books: Book[];
  // Callback function triggered when a book is added to the reading list
  onAdd: (book: Book) => void;
}

// Define the props expected by the SearchBar component
export interface SearchBarProps {
  // Array of books to display and select from
  books: Book[];
  // Callback function triggered when a book is selected
  onSelect: (book: Book) => void;
}
