
import path from 'path'

import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
const typesArray = loadFilesSync(path.join(__dirname, 'modules', '**', '*.gql'))
const typeDefs = mergeTypeDefs(typesArray)

export default typeDefs