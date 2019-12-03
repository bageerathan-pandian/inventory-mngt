const Nexmo = require('nexmo');
 
const nexmo = new Nexmo({
    apiKey: process.env.NEXMO_API_KEY,
    apiSecret: process.env.NEXMO_API_SECRET,
    // applicationId:  process.env.NEXMO_API_APPLICATION_ID,
    // privateKey:  process.env.NEXMO_API_PRIVATE,
  });

//   Send a text message
//   nexmo.message.sendSms('+918667289300', '+919894138811', 'test');
  let text = "👋Hello from Ownwaysoft Pvt. Ltd.";
 
nexmo.message.sendSms("NEXMO", '916369681965', text, {
  type: "unicode"
}, (err, responseData) => {
  if (err) {
    console.log(err);
  } else {
    if (responseData.messages[0]['status'] === "0") {
      console.log("Message sent successfully.");
    } else {
      console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
    }
  }
})

// Make a call
//   nexmo.calls.create({
//     to: [{
//       type: 'phone',
//       number: '918667289300'
//     }],
//     from: {
//       type: 'phone',
//       number: "NEXMO"
//     },
//     answer_url: [process.env.NEXMO_API_ANSWER_URL]
//   }, callback);