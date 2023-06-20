import mongoose from "mongoose";

const WordSCrambleWordSchema = new mongoose.Schema(
    {
        word: {type: String,},
        hint: {type: String,},
    },
    {collection: "wswords"},
)

const WordScrambleWord = mongoose.model("WordScrambleWords", WordSCrambleWordSchema);
export default WordScrambleWord;