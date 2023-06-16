import mailgun from 'mailgun-js';

const API_KEY = '9dee85537b583be01b523cacb9b6bce7-b36d2969-94a0aa8f';
const DOMAIN = 'sandbox319d2f5953de4734855ed46c84c28589.mailgun.org';

// const mailgun = require("mailgun-js");
// const DOMAIN = 'YOUR_DOMAIN_NAME';
const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });
const data = {
    from: 'Excited User <jhustbright@gmail.com>',
    to: 'jhustbright@gmail.com, YOU@YOUR_DOMAIN_NAME',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
};
mg.messages().send(data, function (error, body) {
    console.log(body);
});