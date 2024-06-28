# Ello Engineering Challenge

Welcome to the Ello Engineering Challenge! This project is designed to showcase your skills in building a teacher-facing UI for assigning books to students using React and GraphQL.

## About Ello

Ello is a forward-thinking educational technology company dedicated to revolutionizing the way children learn to read. Our mission is to empower young readers with the tools they need to become proficient and passionate readers. We believe that fostering a love for reading is essential for a child's academic and personal growth.

## Screenshots

### Laptop screens
1. ![Book List - Laptop](/frontend/public/assets/booklistLaptop.png)
2. ![Reading List - Laptop](/frontend/public/assets/ReadingListLaptop.png)

### Mobile Phone
1. ![Book List - Mobile](/frontend/public/assets/booklistPhone.png)
2. ![Reading List - Mobile](/frontend/public/assets/readingListPhone.png)


## Challenge Overview

As part of this challenge, you will be building a part of the Ello web viewer product for teachers. Specifically, you will implement the book assignment view, which includes the following features:

- A search bar to find books by title.
- A list of search results displaying book titles, authors, and buttons to add books to the reading list.
- A reading list that shows all the books added by the teacher.
- Functionality to remove books from the reading list.

## Requirements

- Use React as the frontend framework.
- Showcase the use of React hooks.
- Use Material-UI as the component library for styling.
- Write your frontend code in the `src/frontend` directory.
- Utilize GraphQL to fetch data from the provided server (`http://localhost:4000`).

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-repository-url.git
   cd your-repository-directory

   ```

2. **Install dependencies:**
   Navigate to the src/backend directory and install backend dependencies:
   cd src/backend
   npm install

Start the GraphQL server:

```bash
npm start
```

3. **Run frontend:**
   Open a new terminal tab/window, navigate to the src/frontend directory, and install frontend dependencies.
   cd src/frontend
   npm install

Start the React development server:

```bash
npm start
```

4. **Access the application:**
   Open your browser and go to

   ```bash
   http://localhost:3000
   ```

   to view the Ello web viewer.

**Data**
The GraphQL server provides access to a list of books using the following query:

```bash
query Books {
  books {
    author
    coverPhotoURL
    readingLevel
    title
  }
}
```

Adjust the coverPhotoURL to valid URLs located in `src/frontend/assets` directory.
