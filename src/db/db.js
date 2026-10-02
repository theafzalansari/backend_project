const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"])

const mongoose = require("mongoose")

async function connectDB(){
    await mongoose.connect("mongodb+srv://theafzalansari_db_user:nfEFqsaqxwq49ckh@backend-os.orsguhf.mongodb.net/project-1")
    console.log("Connected to db")
}

module.exports = connectDB