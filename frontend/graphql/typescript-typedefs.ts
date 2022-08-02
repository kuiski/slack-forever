import { printSchemaWithDirectives } from '@graphql-tools/utils'
import { GraphQLSchema, stripIgnoredCharacters } from 'graphql'

// https://github.com/dotansimha/graphql-code-generator/issues/3899
const print = (
  schema: string
) => `import { gql, Config } from "apollo-server-micro"

export const typeDefs: Config['typeDefs'] = gql\`
${schema}
\`;
`

export const plugin = (schema: GraphQLSchema) =>
  print(printSchemaWithDirectives(schema))
//print(stripIgnoredCharacters(printSchemaWithDirectives(schema)))
