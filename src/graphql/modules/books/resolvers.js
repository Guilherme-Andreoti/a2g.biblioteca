import Book from "../../../models/Book";
import Author from "../../../models/Author";
import Gender from "../../../models/Gender";
import Editor from "../../../models/Editor";
import Comment from "../../../models/comment";

export default {
  Query: {
    books: async () => await Book.find({}),
    book: async (_, { id }) => await Book.findById(id),
  },
  Book: {
    author: async (book) => await Author.findById(book.author),
    gender: async (book) => await Gender.findById(book.gender),
    editor: async (book) => await Editor.findById(book.editor),
    reviewedComments: async (book) =>
      await Comment.find({ book: book.id, reviewed: true }),
    comments: async (book) => await Comment.find({ book: book.id }),
  },
  Mutation: {
    createBook: async (_, { data }) => await Book.create(data),
    updateBook: async (_, { id, data }) =>
      await Book.findOneAndUpdate({ _id: id }, data, { new: true }),
    deleteBook: async (_, { id }) =>
      !!(await Book.findOneAndDelete({ _id: id })),
  },
};
