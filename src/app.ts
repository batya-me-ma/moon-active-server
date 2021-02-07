import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/promotion.routes";
import bodyParser from "body-parser";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
// mongodb+srv://Batya:<password>@promotions.u5lbr.mongodb.net/<dbname>?retryWrites=true&w=majority
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@promotions.u5lbr.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set("useFindAndModify", false);

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    console.log("error connect to mongoose");
    throw error;
  });
