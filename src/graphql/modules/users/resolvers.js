import User from "../../../models/User";
export default {
  Query: {
    users: async () => await User.find({}),
    user: async (_, { id }) => await User.findById(id),
    userLogin: async (_, { ra, password }) => {
      let result = await User.findOne({ ra: ra, password: password });

      if (result) {
        result.__typename = 'User';
        return result;
      }

      return {
        __typename: "Error",
        message: "The RA or password is incorrect",
      };
    },
  },
  Mutation: {
    createUser: async (_, { data }) => await User.create(data),
    updateUser: async (_, { id, data }) =>
      await User.findOneAndUpdate({ _id: id }, data, { new: true }),
    deleteUser: async (_, { id }) =>
      !!(await User.findOneAndDelete({ _id: id })),
  },
};
