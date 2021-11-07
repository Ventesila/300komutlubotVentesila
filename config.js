const config = {
    "ownerID": "853339073322549248", //kendi IDınızı yazınız
    "admins": ["853339073322549248"],
    "support": ["853339073322549248"],
    "token": "OTA2NjA0MzY5OTIxODU5NjA1.YYbDHQ.qiRYH9ilUcsnPPhb20vFJ6cloC0", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "yFQF33mC9Mo7GrcVljX9IT2dtE7SXKLO", //botunuzun secretini yazınız
      "callbackURL": `https://paint-marked-attempt.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "super-secret-session-thing", //kalsın
      "domain": "https://paint-marked-attempt.glitch.me/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;

