import { NextApiHandler } from "next";
import { unstable_getServerSession } from "next-auth/next";

import { authOptions } from "@/lib/auth/authOptions";
import { Storage } from "@google-cloud/storage";
import { Channel } from "@/types/slack-export/channel";

const handler: NextApiHandler = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    // Signed in
    const slackId = session.user.id;

    const storage = new Storage({
      projectId: process.env.PROJECT_ID,
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY,
      },
    });

    const bucket = storage.bucket(process.env.BUCKET_NAME);
    const contents = await bucket.file("slack_export/channels.json").download();
    const channels: Channel[] = JSON.parse(contents.toString());

    const joinedChannels = channels.filter((channel) =>
      channel.members.includes(slackId)
    );

    res.json(joinedChannels);
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};

export default handler;
