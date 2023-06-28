import Quiz from "../models/Quiz.js";



export const deleteQQuestion = async (req, res) => {
    try {
        const {
            _id,
            question,
            options,
        } = req.body;

        const DelQuestion = new Quiz({
            _id,
            question,
            options,
        })

        console.log(DelQuestion._id);
        const deletedWord = await Quiz.findByIdAndDelete({_id: DelQuestion._id})
        res.send({status: "ok", data: "deleted"})
         
    } catch (err) {
        console.log(err);
    }
};