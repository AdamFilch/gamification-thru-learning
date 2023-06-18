import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js"
import { register } from "./controllers/auth.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js"
import { videos } from "../data/index.js";
import { MongoClient } from "mongodb";



/* CONFIGURATIONS (MIDDLE WARE) */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));


/* FILE STORAGE */
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

// /* ROUTES WITH FILES */
app.post('/auth/register', upload.single("picture"), register);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

/* MONGOOSE SERUP */
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // Insert Data one time
    // try {
    //     var MongoClient = require('mongodb').MongoClient;
    //     const client = MongoClient(MONGO_URL);
    //     const db = client.db("test");
    //     const coll = db.collection("learnvideo");

    //     const result = coll.insertMany(videos);

    //     console.log(result.insertedIds);
        

    // } finally {
    //     client.close();
    //     console.log("Done")
    // }
    



}).catch((error) => console.log(`${error} did not connect`))