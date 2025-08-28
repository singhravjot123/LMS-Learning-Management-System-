import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
import  mediaRoute from "./routes/media.route.js";
import purchaseRoute from "./routes/purchaseCourse.route.js";
import courseProgressRoute from "./routes/courseProgress.route.js";
import path from "path";

dotenv.config({}); // Load environment variables before using them

connectDB(); // Call database connection after loading env variables

const app = express();




const PORT = process.env.PORT || 3000;

const _dirname=path.resolve()


// default middleware
app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "*",  
  credentials: true
}));
 
//apis
app.use("/api/v1/media",mediaRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress",courseProgressRoute );

app.use(express.static(path.join(_dirname,"/client/dist")));
app.get('*', (_,res)=>{
    res.sendFile(path.resolve(_dirname,"client","dist","index.html"));
})


app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}`);
});
