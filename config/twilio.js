// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
            const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTHTOKEN);

            // let text = "👋Hello from Ownwaysoft Pvt. Ltd.";

                      const creatVerificationService = ()=>{
                        client.verify.services.create({friendlyName: 'Ownwaysoft'})
                          .then(service =>   
                          // console.log(service.sid)
                          sendVerificationCode(service.sid)
                        );
                      }
                      

                       const sendVerificationCode = (sid)=>{
                          client.verify.services(sid)
                          .verifications
                          .create({to: '+919095108395', channel: 'sms'}) // sms/call/email
                          .then(verification => console.log(verification.status));
                         }

                         const checkVerificationCode = (sid,ccode)=>{
                          client.verify.services(sid)
                          .verificationChecks
                          .create({to: '+15017122661', code: ccode})
                          .then(verification_check => console.log(verification_check.status));
                         }

                        const sendMessage = (cto)=>{                            
                            client.messages.create({
                               body: 'Welcome to ownwaysoft!',
                                from: process.env.TWILIO_FROMNUMBER,
                                to: cto
                               })
                              .then(message => console.log(message))
                              .catch(err => console.error(err));
                         }

                         
                      // sendMessage('+918667289300')