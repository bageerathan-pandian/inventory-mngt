// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC2a50b3d74243e3c31748ada5b6b24d56';
const authToken = '3048727036ab10006e28015726f979f7';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Welcome to ownwaysoft!',
     from: '+17542272455',
     to: '+918667289300'
    //  to: '+919095108395'
   })
  .then(message => console.log(message))
  .catch(err => console.error(err));