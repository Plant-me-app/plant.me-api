const express = require("express");
const app = express();

const plantRouter = require("./src/routes/plantRoutes");
const userRouter = require("./src/routes/userRoutes")
const notificationRouter = require("./src/routes/notificationRoutes")
 
//middleware
app.use(express.json());
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.use("/api/plants", plantRouter);
app.use("/api/users", userRouter);
app.use("/api/notifications", notificationRouter);

const mongoose = require("mongoose");
//configure mongoose
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://mongo:27017/plant-me-api?directConnection=true",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Connected to MongoDB");
//     }
//   }
// );

const connectWithRetry = () => {
  mongoose.connect('mongodb://mongo:27017/plant-me-api?directConnection=true', {useNewUrlParser: true })
  .then(() => console.log('succesfully connected to DB'))
  .catch((err) => {
    console.log(err);
    setTimeout(connectWithRetry, 5000);
  });
}

connectWithRetry()


module.exports = app;