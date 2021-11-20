import Gender from "../../../models/Gender";
import User from "../../../models/User";

export default {
  Query: {
    genders: async () => await Gender.find(),
    gender: async (_, { id }) => await Gender.findById(id),
  },
  Mutation: {
    createGender: async (_, { data }) => await Gender.create(data),
    updateGender: async (_, { id, data }) =>
      await Gender.findOneAndUpdate({_id : id}, data, { new: true }),
    deleteGender: async (_, { id }) => !!(await Gender.findOneAndDelete({_id : id})),
  },
};
