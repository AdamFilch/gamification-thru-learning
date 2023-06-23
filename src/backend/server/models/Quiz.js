import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema(
    {
        question: {type: String},
        options: [{
            option: {type: String},
            answer: {type: Boolean},
        }],
    },
    {collection: "qquestions"},
)

const Quiz = mongoose.model("Quiz", QuizSchema);
export default Quiz;