import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import getUsers from "./routes/users/getUsers";

const jsonParser = bodyParser.json();

const app: Application = express();

app.use(cors());
// getting all users from file
app.use("/users/getUsers", jsonParser, getUsers);

app.listen(8080, () => {
  console.log("listening to port: 8080");
});
