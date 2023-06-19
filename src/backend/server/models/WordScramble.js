import mongoose from "mongoose";

const WordSCrambleWordSchema = new mongoose.Schema(
    {
        word: string,
        hint: string,
    },
    {collection: "wswords"},
)

const WordScrambleWord = mongoose.model("WordScrambleWords", WordSCrambleWordSchema);
export default WordScrambleWord;