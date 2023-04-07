export interface MailTemplate {
    title: string;
    heading: string;
    receiver: string;
    text: string;
}

/**
 * Returns a html email template
 * @return  {string} html email template
 */
export function generateEmail({title, heading, receiver, text}: MailTemplate) {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      font-size: 14px;
      line-height: 1.5;
      color: #333;
      margin: 0;
      background-color: #689A9B;
    }
    .container {
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      padding: 20px;
      box-sizing: border-box;
    }
    .header {
      display: table;
      width: 100%;
      background-color: #fff;
      padding: 10px;
      box-sizing: border-box;
    }
    .header h1 {
      font-size: 24px;
      margin: 0;
      display: table-cell;
      vertical-align: middle;
    }
    .header img {
      display: table-cell;
      vertical-align: middle;
      max-width: 70px;
      height: auto;
      margin: 0 0 0 20px;
    }
    p {
      margin: 0 0 10px;
      background-color: #fff;
      padding: 10px;
      box-sizing: border-box;
    }
    a {
      color: #1a73e8;
      text-decoration: none;
    }
    .button {
      display: inline-block;
      background-color: #1a73e8;
      color: #fff;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 3px;
      font-size: 14px;
    }
    .footer {
      font-size: 12px;
      text-align: center;
      color: #777;
      margin-top: 20px;
      background-color: #fff;
      padding: 10px;
      box-sizing: border-box;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${heading}</h1>
      <img src="https://pinte-mieten.web.app/static/media/pinte_logo.e42845c4f71dfb872e31.png" alt="Pinte 42 Logo">
    </div>
    <p>Hi ${receiver},</p>
    <p>${text}</p>
    <p>Viele Grüße,</p>
    <p>Dein Pinte 42 Team</p>
    <p class="footer">Diese E-Mail wurde automatisiert von unser Vermietungswebsite geschickt,
     falls du nicht weißt warum du diese Mail erhalten hast, melde dich bitte bei uns: heimrat42@googlegroups.com</p>
  </div>
</body>
</html>
`;
}
