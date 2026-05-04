const generateOtp = () => {
  return Math.floor(10000 + Math.random() * 90000).toString();
};

const getMailContent = (otp) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OTP Verification</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #f4f6fb;
        color: #333333;
      }
      .container {d
        max-width: 600px;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
      }
      .header {
        background-color: #3b82f6;
        color: #ffffff;
        padding: 28px 24px;
        text-align: center;
      }
      .content {
        padding: 28px 24px;
      }
      .otp-box {
        margin: 24px auto;
        max-width: 260px;
        padding: 20px;
        border-radius: 14px;
        background: #f3f8ff;
        text-align: center;
        letter-spacing: 6px;
        font-size: 32px;
        font-weight: 700;
        color: #1d4ed8;
      }
      .text {
        font-size: 16px;
        line-height: 1.7;
        color: #4b5563;
      }
      .footer {
        padding: 20px 24px 28px;
        font-size: 13px;
        color: #9ca3af;
        text-align: center;
      }
      .footer a {
        color: #3b82f6;
        text-decoration: none;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>OTP Verification</h1>
      </div>
      <div class="content">
        <p class="text">Use the code below to verify your email address. This code will expire in 10 minutes.</p>
        <div class="otp-box">${otp}</div>
        <p class="text">If you did not request this code, please ignore this email.</p>
      </div>
      <div class="footer">
        <p>Need help? Reply to this email and we'll be happy to assist.</p>
        <p><a href="https://example.com">PetHub</a></p>
      </div>
    </div>
  </body>
</html>`;
};

const createCryptoHash = (data) => {
  return crypto.createHash("sha256").update(data).digest("hex");
};

const createToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const signToken = (data, expireTime) => {
  jwt.sign(data, process.env.JWT_SECRET, { expiresIn: expireTime });
};

export {
  generateOtp,
  getMailContent,
  createCryptoHash,
  createToken,
  signToken,
};
