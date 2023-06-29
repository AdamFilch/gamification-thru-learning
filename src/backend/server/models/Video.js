import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
    {
        num: {
            type: Number,

        },
        title: {
            type: String,

        },
        author: {
            type: String,

        },
        channel: {
            type: String,

        },
        videolink: {
            type: String,

        },
        description: {
            type: String,

        },
        comments: [],
        

    },
    {collection: "learnvideo"},

    {timestamps: true}
)

const Video = mongoose.model("Video", VideoSchema);
export default Video;