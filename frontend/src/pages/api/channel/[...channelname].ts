import { NextApiRequest, NextApiResponse } from "next";
import { Storage } from "@google-cloud/storage";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const storage = new Storage({
    projectId: process.env.PROJECT_ID,
    credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY,
    },
  });

  const bucket = storage.bucket(process.env.BUCKET_NAME);
  const contents = await bucket.file("slack_export/channels.json").download();
  const data = JSON.parse(contents.toString());

  res.status(200).json(data);
}
