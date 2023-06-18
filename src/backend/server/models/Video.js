import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema(
    {

    },
    {timestamps: true}
)

const Video = mongoose.model("Video", VideoSchema);
export default Video;