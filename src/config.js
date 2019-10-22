const dev = {
  STRIPE_KEY: "pk_test_xghwWmS9BNTu0i7uaTeGAjsf00XOukSAgh",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-15umooxm1y8be"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://notesapi.amccoig.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_u5vPwlRES",
    APP_CLIENT_ID: "4sam6s7kthepucup59vjhhfprb",
    IDENTITY_POOL_ID: "us-east-1:285588aa-b57f-41e2-b30e-d11427f3e498"
  }		
};

const prod = {
  STRIPE_KEY: "pk_test_xghwWmS9BNTu0i7uaTeGAjsf00XOukSAgh",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-ycq9ne0du72z"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://notesapi.amccoig.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_0SqMZtiuS",
    APP_CLIENT_ID: "466bh1nsrj1inur8ofcqg2kn4h",
    IDENTITY_POOL_ID: "us-east-1:6866e0b5-6c3e-49a9-9097-d104c89e4ab7"
  }
};

//Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};