namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    // GCP
    PROJECT_ID: string;
    CLIENT_EMAIL: string;
    PRIVATE_KEY: string;
    BUCKET_NAME: string;

    // next-auth
    SLACK_CLIENT_ID: string;
    SLACK_CLIENT_SECRET: string;
    SECRET: string;
  }
}
