import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { AuthenticationError } from "apollo-server-micro";
import { Storage } from "@google-cloud/storage";
import { CloudStorageDatasource, SlackLogDatasource } from "@/lib/slack-log";

export interface ApolloContext {
  session: Session;
  storage: Storage;
  slackLog: SlackLogDatasource;
}

export const makeContext = async ({ req }: any) => {
  const session = await getSession({ req });
  if (!session) throw new AuthenticationError("Authentication error");

  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
  });

  const datasource = new CloudStorageDatasource(
    storage,
    process.env.BUCKET_NAME
  );

  return {
    session,
    storage,
    slackLog: datasource,
  };
};
