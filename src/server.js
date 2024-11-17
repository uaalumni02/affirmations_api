import express from "express";
import "dotenv/config";

const app = express();
const { log, error } = console;

const port = process.env.PORT || 3000;

const router = express.Router();


app.use("/api", router);

app.listen(port, () => log("server is running"));
export default app;