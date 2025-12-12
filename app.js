import express from "express";
const app = express();
export default app;

import employees from "#db/employees";
import router from "#api/employees";

// body- parsing middleware
app.use(express.json());


//Simple loggin middleware
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.originalUrl}`);
//   next();
  
// });
app.get("/", (req, res) => {
  res.send("Hello employees!");
});


app.use("/employees", router);

//Catch all error-handeling middleware
app.use((err, req, res, next) => {
res.status(500).send("Sorry! Something went wrong :(");
});