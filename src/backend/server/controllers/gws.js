import WordScrambleWord from "../models/WordScramble.js";

export const uploadWSWord = async (req,res) => {
    try{
        const {
            word,
            hint,
        } = req.body;

        const AddWord = new WordScrambleWord({
            word,
            hint,
        })

        const savedWord = await AddWord.save();
        res.status(201).json(savedWord);
    } catch(err) {
        console.log(err);
    }

};

export const deleteWSWord = async (req, res) => {
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
        const deletedWord = await WordScrambleWord.findByIdAndDelete({_id: DelWord._id})
        res.send({status: "ok", data: "deleted"})
         
    } catch (err) {
        console.log(err);
    }
}
