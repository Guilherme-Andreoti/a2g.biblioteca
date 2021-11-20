import Setting from "../../../models/Setting";
export default {
  Query: {
    settings: async () => await Setting.find({}),
    setting: async (_, { id }) => await Setting.findById(id),
  },
  Mutation: {
    createSetting: async (_, { data }) => await Setting.create(data),
    updateSetting: async (_, { id, data }) =>
      await Setting.findOneAndUpdate({_id : id}, data, { new: true }),
  },
};
