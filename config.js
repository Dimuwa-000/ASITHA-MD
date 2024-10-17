const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=jrwlUQBK#AR_OJVGLq0H0VqSrZWtoGU5FWTOzv3W0ZiDfcmLFT2g",
MONGODB: process.env.MONGODB || "mongodb+srv://rygwriter2005:L9csK6k4LzPnvfIc@cluster0.fgi7g.mongodb.net/",//enter mongo db url
};
