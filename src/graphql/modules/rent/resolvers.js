import Rent from "../../../models/Rent";
import Book from "../../../models/Book";
import User from "../../../models/User";


export default {
  Query: {
    rents: async () => await Rent.find({}),
    rent: async (_, { id }) => await Rent.findById(id),
  },
  Rent: {
    book: async (rent) => await Book.findById(rent.book),
    user: async (rent) => await User.findById(rent.user),
  },
  Mutation: {
    createRent: async (_, { data }) => await Rent.create(data),
    updateRent: async (_, { id, data }) =>
      await Rent.findOneAndUpdate({ _id: id }, data, { new: true }),
    deleteRent: async (_, { id }) =>
      !!(await Rent.findOneAndDelete({ _id: id })),
  },
};
