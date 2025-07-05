# Library Management System

A web application for managing a library, built with **ReactJS**, **TypeScript**, **Tailwind CSS**, **Redux**, and **RTK Query**.

## Features

- **Add Book**: Add new books to the library collection.
- **Show Book**: View a list of all available books.
- **Edit Book**: Update book details.
- **Delete Book**: Remove books from the library.
- **Borrow Book**: Borrow books and track borrowing status.
- **Borrow Summary**: View a summary of all borrowed books.

## Tech Stack

- **ReactJS**: UI development
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **Redux & RTK Query**: State management and data fetching
- **Node.js API**: Backend API ([View API](https://library-management-five-lac.vercel.app/api))

## API Endpoint

All backend requests are handled via the following API endpoint:

```
  https://library-management-five-lac.vercel.app/api
```

## Getting Started

1. **Install dependencies:**
  ```bash
    git clone https://github.com/takbirgazi/l2b5-assignment-4-frontend.git
  ```

2. **Start the development server:**
  ```bash
    npm install
  ```

3. **Build for production:**
  ```bash
    npm run dev
  ```

## Folder Structure

```
src/
├── components/      # Reusable UI components
├── features/        # Redux slices and RTK Query endpoints
├── pages/           # Application pages (Add, Show, Edit, Borrow, Summary)
├── app/             # Redux store setup
├── types/           # TypeScript types
└── main.tsx        # Entry point
```

## License

This project is licensed under the MIT License.