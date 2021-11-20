import Comment from "../../../models/comment";
import Book from "../../../models/Book";
import User from "../../../models/User";

export default {
  Query: {
    comments: async () => await Comment.find({}),
    comment: async (_, { id }) => await Comment.findById(id),
  },
  Comment: {
    author: async (comment) => await User.findById(comment.author),
    book: async (comment) => await Book.findById(comment.author),
  },
  Mutation: {
    createComment: async (_, { data }) => await Comment.create(data),
    updateComment: async (_, { id, data }) =>
      await Comment.findOneAndUpdate({_id : id}, data, { new: true }),
    deleteComment: async (_, { id }) => !!(await Comment.findOneAndDelete({_id : id})),
  },
};
