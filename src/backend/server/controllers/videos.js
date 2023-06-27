import axios from "axios";
import Video from "../models/Video.js";

/* REGISTER USER */
export const uploadLearn = async (req,res) => {
    try{
        const {
            num,
            title,
            author,
            channel,
            videolink,
            description,
        } = req.body;

        const newVideo = new Video({
            num,
            title,
            author,
            channel,
            videolink,
            description,
        })

        const savedVideo = await newVideo.save();
        res.status(201).json(savedVideo);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }

};