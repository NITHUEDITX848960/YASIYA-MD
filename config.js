const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~MIhnSbYQ#DoRDET7G2d5iJ7zOXZNZGZnMS1QmanMnO9-erKc1FPw'
};
