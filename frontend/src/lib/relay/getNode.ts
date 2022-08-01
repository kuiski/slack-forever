import { GraphQLTaggedNode } from 'relay-runtime'

export const getNode = (taggedNode: GraphQLTaggedNode): GraphQLTaggedNode => {
  // Support for languages that work (best) with ES6 modules, such as TypeScript.
  const node: any = taggedNode
  if (node.default) {
    return node.default
  }

  return taggedNode
}
