const mongoose = require("mongoose");
// connecting to db
const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // Other connection options can be added here
  });

  console.log(
    `MongoDB connected in ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDb;
