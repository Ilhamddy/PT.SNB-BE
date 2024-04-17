import express, { Request, Response,   static as static_ } from "express";
import cors from "cors";
import router from "./routes/RoleRoute";
import { NewsRouter } from './routes/NewsRoute';
import dotenv from "dotenv";
import { UserRouter } from "./routes/UserRoute";
import { ServicesRouter } from "./routes/ServicesRoute";
import { FaqRouter } from "./routes/FaqsRoute";

import { join } from "path";



dotenv.config();
const app = express();

const PORT = process.env.APP_PORT;
app.use(express.json());
app.use(cors())
app.use('/', static_(join(__dirname, '../public')));


app.get("/api", (req: Request, res: Response) => {
  return res.status(200).send({
    response: "Require Berhasil Didapat",
  });
  // res.send("hello");
});


const newsRouter = new NewsRouter();
const userRouter = new UserRouter();
const faqRouter = new FaqRouter();
const servicesRouter = new ServicesRouter();


app.use(router);

app.use('/api/news', newsRouter.getRouter());
app.use('/api/user', userRouter.getRouter());
app.use('/api/faq', faqRouter.getRouter());
app.use('/api/services', servicesRouter.getRouter());



app.get("/", (req: Request, res: Response) => {
  return res.send("Berhasil get Data");
});

app.listen(PORT, () => {
  console.log("Express API Succesfully " + PORT);
});
