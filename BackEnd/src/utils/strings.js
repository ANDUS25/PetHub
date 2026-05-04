const Title = {
  ACCESS_TOKEN_REFRESHED_SUCCESSFULLY: "Access token refreshed successfully",
  APP_IS_CONNECTED: "App is connected to the mongo DB database",
  CONNECTED: "connected",
  CUSTOM_ERROR: "This is a custom error",
  DB_CONNECTION_NOT_DEFINED:
    "DB_CONNECTION environment variable is not defined",
  EMAIL_REQUIRED: "Email is required",
  EMAIL_UNIQUE: "Email must be unique",
  ERROR_IN_GET_ME_CONTROLLER: "Error in getMe controller:",
  ERROR_OCCUR_FROM_DATABASE: "This error occur from the database connection",
  ERROR_OCCURRED_IN_LOGIN_CONTROLLER: "Error occurred in login controller:",
  ERROR_OCCURRED_IN_LOGOUT_ALL_CONTROLLER:
    "Error occurred in logOutAll Controller:",
  ERROR_OCCURRED_IN_LOGOUT_CONTROLLER: "Error occurred in logout controller:",
  ERROR_OCCURRED_IN_RE_FRESH_TOKEN_CONTROLLER:
    "Error occurred in refreshToken Controller:",
  ERROR_OCCURRED_WHILE_CONNECTING_TO_THE_MAIL_SERVICE:
    "Error occurred while connecting to the mail service",
  ERROR_OCCURRED_WHILE_REGISTERING_USER:
    "Error occurred while registering user:",
  ERROR_OCCURRED_WHILE_SENDING_MAIL: "Error occurred while sending mail",
  ERROR_OCCURRED: "Error occurred while connecting to the mongo db database.",
  ERROR: "error",
  GOOGLE_CLIENT_ID_MUST_BE_SET:
    "Custom Error :- Google client id be set in .env file",
  GOOGLE_CLIENT_SECRET_MUST_BE_SET:
    "Custom Error :- Google client secret be set in .env file",
  GOOGLE_REFRESH_TOKEN_MUST_BE_SET:
    "Custom Error :- Google refresh token be set in .env file",
  GOOGLE_USER_MUST_BE_SET: "Custom Error :- Google user be set in .env file",
  INTERNAL_SERVER_ERROR: "Internal server error",
  INVALID_OTP_MESSAGE: "Invalid OTP message",
  INVALID_REFRESH_TOKEN: "Invalid refresh token",
  IP_ADDRESS_REQUIRED: "IP address is required",
  JWT_MUST_BE_SET: "Custom Error :- JWT Secret must be set in .env file",
  JWT_SECRET_NOT_DEFINED: "JWT_SECRET environment variable is not defined",
  LOGGED_OUT_SUCCESSFULLY: "Logged out successfully",
  MAIL_SERVICE_READY_TO_SEND_MAIL: "mail service ready to send mail",
  MONGO_DB_URL_MUST_BE_SET:
    "Custom Error :- Mongo DB URL must be set in .env file",
  NAME_REQUIRED: "name is required",
  NAME_UNIQUE: "name must be unique",
  OTP_HASH_IS_REQUIRED: "OTP Hash is required",
  OTP_VERIFICATION: "OTP Verification",
  PASSWORD_REQUIRED: "Password is required",
  PORT_MUST_BE_SET: "Custom Error :- port be set in .env file",
  REFRESH_TOKEN_HASH_REQUIRED: "Refresh token hash is required",
  REFRESH_TOKEN_NOT_FOUND: "Refresh token not found",
  SERVER_RUNNING_ON_PORT: "server running on port",
  SUCCESS: "success",
  TOKEN_NOT_FOUND: "Token not found",
  USER_AGENT_REQUIRED: "User agent is required",
  USER_DATA_FETCHED_SUCCESSFULLY: "User data fetched successfully",
  USER_EXISTS: "User with this name or email already exists",
  USER_IS_REQUIRED: "User is required",
  USER_LOGIN_SUCCESSFULLY: "User login successfully",
  USER_LOGOUT_FROM_ALL_DEVICES: "User Logout from all devices",
  USER_MAIL_ADDRESS_IS_NOT_VERIFIED: "User Mail address is not verified",
  USER_REFERENCE_IS_REQUIRED_FOR_SESSION:
    "User reference is required for session",
  USER_REGISTERED_SUCCESSFULLY: "User registered successfully",
  USER_VERIFIED_SUCCESSFULLY: "user verified successfully",
  WELCOME_ONBOARD: "Welcome onboard",
  WRONG_USER_CREDENTIALS: "Wrong user credentials",
  WRONG_USER_PASSWORD: "Wrong user password",
};

const EndPoint = {
  API_AUTH: "/api/auth",
  GET_ME: "/get-me",
  LOGIN: "/login",
  LOGOUT_ALL: "/logout-all",
  LOGOUT: "/logout",
  REFRESH_TOKEN: "/refresh-token",
  REGISTER: "/register",
  VERIFY_EMAIL: "/verify-email",
};

const CommonENum = {
  gmail: "gmail",
  OAuth2: "OAuth2",
};

export { Title, EndPoint, CommonENum };
