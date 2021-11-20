import Editor from "../../../models/Editor";

export default {
  Query: {
    editors: async () => await Editor.find(),
    editor: async (_, { id }) => await Editor.findById(id),
  },
  Mutation: {
    createEditor: async (_, { data }) => await Editor.create(data),
    updateEditor: async (_, { id, data }) =>
      await Editor.findOneAndUpdate({_id : id}, data, { new: true }),
    deleteEditor: async (_, { id }) => !!(await Editor.findOneAndDelete({_id : id})),
  },
};
