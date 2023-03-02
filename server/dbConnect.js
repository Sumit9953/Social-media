const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUrl = "mongodb+srv://Useranuj:2011@cluster0.qjoy0ur.mongodb.net/social-media?retryWrites=true&w=majority";

  try {
    const connect = await mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }

};
