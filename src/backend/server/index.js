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
import { QQuestions, WSWords, videos } from "../data/index.js";
import Video from "./models/Video.js";
import axios from "axios";
import WordScrambleWord from "./models/WordScramble.js";
import Quiz from "./models/Quiz.js";
import { commentLearn, deleteLearn, uploadLearn } from "./controllers/videos.js";
import { uploadWSWord } from "./controllers/gws.js";
import { deleteQQuestion, uploadQCard } from "./controllers/gq.js";
import { deleteUser, updateUser } from "./controllers/users.js";


/* CONFIGURATIONS (MIDDLE WARE) */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '.env') });
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
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

// /* ROUTES WITH FILES */
app.post('/auth/register', upload.single("picture"), register);

app.post('/video/post', uploadLearn);
app.post('/video/comment/post', commentLearn);
app.post('/WS/word/post', uploadWSWord);
app.post('/Q/card/post', uploadQCard);

app.post('/Q/question/delete', deleteQQuestion);

app.post('/User/Delete', deleteUser);
app.post('/User/Edit/permission', updateUser);

app.use('/video/delete', async (req, res) => {
  try {
    const {
      _id,
      num,
      title,
      author,
      channel,
      videolink,
      description,
      comments,
    } = req.body;

    const newVideo = new Video({
      _id,
      num,
      title,
      author,
      channel,
      videolink,
      description,
      comments,
    })

    console.log(newVideo._id);
    const deletedVid = await Video.findByIdAndDelete(newVideo._id);
    res.send({ status: "ok", data: "deleted" });

  } catch (err) {
    console.log(err);
  }
});

app.use('/WS/word/delete', async (req, res) => {
  try {
    const {
      _id,
      word,
      hint,
    } = req.body;

    const DelWord = new WordScrambleWord({
      _id,
      word,
      hint,
    })

    console.log(DelWord._id);
    const deletedWord = await WordScrambleWord.findByIdAndDelete({ _id: DelWord._id })
    res.send({ status: "ok", data: "deleted" })

  } catch (err) {
    console.log(err);
  }
});

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);

/* GET ROUTES */


app.get("/getVideos", async (req, res) => {
  try {
    const allVideos = await Video.find({});
    res.send({ status: "ok", data: allVideos });

  } catch (error) {
    console.log(error)
  }
})

app.get("/getVideos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const videoSp = await Video.findById(id);
    res.send({ status: "ok", data: videoSp })

  } catch (error) {
    console.log(error)

  }
})

app.get("/getVideos/comments/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const videoSp = await Video.findById(id);
    res.send({ status: "ok", data: videoSp })

  } catch (error) {
    console.log(error)

  }
})

app.get("/getWSW", async (req, res) => {
  try {
    const words = await WordScrambleWord.find({});
    res.send({ status: "ok", data: words });

  } catch (error) {
    console.log(error)
  }
})

app.get("/getQuestions", async (req, res) => {
  try {
    const allQuestions = await Quiz.find({});
    res.send({ status: "ok", data: allQuestions });

  } catch (error) {
    console.log(error)
  }
})

app.get("/getUsers", async (req, res) => {
  try {
    const allQuestions = await User.find({});
    res.send({ status: "ok", data: allQuestions });

  } catch (error) {
    console.log(error)
  }
})


/* MONGOOSE SERUP */
// const uri = process.env.MONGODB_URI;
const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

  // Insert Data one time
  try {
    // Video.insertMany(videos)
    // WordScrambleWord.insertMany(WSWords);
    // Quiz.insertMany(QQuestions);


  } finally {
    // client.close();
    console.log("Conntected to MongoDB")
  }




}).catch((error) => console.log(`${error} did not connect fuck`));


