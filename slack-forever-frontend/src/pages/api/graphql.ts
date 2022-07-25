import { NextApiHandler } from "next";
import { ApolloServer } from "apollo-server-micro";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core";

import { typeDefs, resolvers, makeContext } from "@/lib/graphql";

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: makeContext,
  plugins: [
    process.env.NODE_ENV === "development"
      ? ApolloServerPluginLandingPageGraphQLPlayground({
          settings: {
            "request.credentials": "include",
          },
        })
      : ApolloServerPluginLandingPageDisabled(),
  ],
});

const startServer = apolloServer.start();

const handler: NextApiHandler = async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};

export default handler;
