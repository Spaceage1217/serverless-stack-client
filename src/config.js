export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-1",
      BUCKET: "hype-notes-app-uploads"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://8jzvh0r5o2.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_m8TFl0r6C",
      APP_CLIENT_ID: "2ru5olm3mmaqll5o66rbua43f6",
      IDENTITY_POOL_ID: "us-east-2:fc370c43-2c4e-4a34-983e-a9cab5353e38"
    }
  };