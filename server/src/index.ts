import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import getUsers from "./routes/users/getUsers";
import "./atlasDB"

const jsonParser = bodyParser.json();

const app: Application = express();

app.use(cors());
// getting all users
app.use("/users/getUsers", jsonParser, getUsers);
// add user
app.use("/users/addUsers", jsonParser, getUsers);


app.listen(8080, () => {
  console.log("listening to port: 8080");
});
