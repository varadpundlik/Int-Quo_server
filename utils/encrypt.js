const bcrypt = require('bcryptjs');

const encrypt = async (password) => {
    const pass=await bcrypt.hash(password, 10);
    console.log(pass);
    return pass;
}

const compare = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

module.exports = {
    encrypt,
    compare
}