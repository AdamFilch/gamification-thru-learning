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
            comments,
        } = req.body;

        const newVideo = new Video({
            num,
            title,
            author,
            channel,
            videolink,
            description,
            comments,
        })

        const savedVideo = await newVideo.save();
        res.status(201).json(savedVideo);
    } catch(err) {
        res.status(500).json({ error: err.message });
    }

};

export const deleteLearn = async (req, res) => {
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
        const deletedVid = await Video.findByIdAndDelete({_id: newVideo._id})
        res.send({status: "ok", data: "deleted"})
         
    } catch (err) {
        console.log(err);
    }
}

export const commentLearn = async (req,res) => {
    try{

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
        console.log("reached")

        const savedVideo = await Video.replaceOne({_id: _id}, newVideo);
        res.status(201).json(savedVideo);
    } catch(err) {
        console.log(err);
    }

};
