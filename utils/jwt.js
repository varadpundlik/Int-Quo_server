const jsonwebtoken = require("jsonwebtoken");

class JsonWebToken {
    #serverSecret;

    constructor(serverSecret) {
        this.serverSecret = serverSecret;
    }

    decode(token) {
        return jsonwebtoken.verify(token, this.serverSecret);
    }

    generate(payload, tokenLifeTime) {
        return jsonwebtoken.sign(payload, this.serverSecret, {
            expiresIn: tokenLifeTime,
        });
    }
}

module.exports = JsonWebToken;