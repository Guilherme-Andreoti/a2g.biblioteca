import Author from "../../../models/Author";
import User from "../../../models/User";

export default {
  Query: {
    authors: async () => await Author.find(),
    author: async (_, { id }) => await Author.findById(id),
  },
  Mutation: {
    createAuthor: async (_, { data }) => await Author.create(data),
    updateAuthor: async (_, { id, data }) =>
      await Author.findOneAndUpdate({_id : id}, data, { new: true }),
    deleteAuthor: async (_, { id }) => !!(await Author.findOneAndDelete({_id : id})),
  },
};
