import axios from 'axios';

import Email from '../config/Email';
import EmailKeys from '../config/EmailKeys.json';

const sendEmail = async (name: string, contact: string, message: string) => {
  const user = Buffer.from(
    `${EmailKeys.API_KEY}:${EmailKeys.SECRET_KEY}`
  ).toString('base64');

  await axios({
    url: 'https://api.mailjet.com/v3.1/send',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${user}`,
    },
    data: {
      Messages: [
        {
          From: {
            Email,
            Name: 'William Kondo',
          },
          To: [
            {
              Email,
              Name: 'William Kondo',
            },
          ],
          Subject: 'Message received from portfolio',
          TextPart: `${name} sent you a message.\n\n${message}\n\nFrom ${contact}.`,
        },
      ],
    },
  });
};

export default sendEmail;
