 import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const userIds = [
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),
    new mongoose.Types.ObjectId(),

];

export const users = [
    {
        _id: userIds[0],
        fname: "Vinothini",
        username: "vinothini",


    }
]




export const videos = [
    {
        num: 1,
        title: "Is AI the future of humanity? - Artificial Intelligence and its Limitations",
        author: "DW Documentary",
        channel: "https://www.youtube.com/@DWDocumentary",
        videolink: "https://www.youtube.com/embed/YZTutoSnXGc",
        description: "Artificial intelligence is often portrayed as the future of humanity. But is the logic of algorithms really infallible? Today, even programmers warn against overestimating AI. After all, artificial intelligence presents us with opportunities, but it also comes with risks.",

    },
    {
        num: 2,
        title: "What is AI? | Artificial Intelligence | What is Artificial Intelligence?",
        author: "Simplilearn",
        channel: "https://www.youtube.com/@SimplilearnOfficial",
        videolink: "https://www.youtube.com/embed/ad79nYk2keg",
        description: "This video on 'What is Artificial Intelligence' will give you a brief overview of artificial intelligence as a technology in just 5 minutes. We will start with a minor introduction to artificial intelligence in which we will know what is artificial intelligence with the help of examples. Moving ahead we will see what are the uses of AI, what is strong AI and what is weak AI. We will warp up this video by making you understand the major difference between AI ML and Deep Learning which will be followed by the future scope of artificial intelligence. ",

    },
    {
        num: 3,
        title: "How will AI change the world?",
        author: "TED-Ed",
        channel: "https://www.youtube.com/@TEDEd",
        videolink: "https://www.youtube.com/embed/RzkD_rTEBYs",
        description: "In the coming years, artificial intelligence is probably going to change your life— and likely the entire world. But people have a hard time agreeing on exactly how AI will affect our society. Can we build AI systems that help us fix the world? Or are we doomed to a robotic takeover? Explore the limitations of artificial intelligence and the possibility of creating human-compatible technology.",

    },
    {
        num: 4,
        title: "What is a Chatbot?",
        author: "IBM Technology",
        channel: "https://www.youtube.com/@IBMTechnology",
        videolink: "https://www.youtube.com/embed/o9-ObGgfpEk",
        description: "How do all the algorithms, like ChatGPT & Bing, around us learn to do their jobs?",

    },
    {
        num: 4,
        title: "How AIs like ChatGPT, Learn",
        author: "CGP Grey",
        channel: "https://www.youtube.com/@CGPGrey",
        videolink: "https://www.youtube.com/embed/R9OHn5ZF4Uo",
        description: "How do all the algorithms, like ChatGPT & Bing, around us learn to do their jobs?",

    },
    {
        num: 5,
        title: "But how does ChatGPT Actually Work?",
        author: "Till Musshoff",
        channel: "https://www.youtube.com/@tillmusshoff",
        videolink: "https://www.youtube.com/embed/aQguO9IeQWE",
        description: "ChatGPT is a type of natural language processing model (NLP) known as a Generative Pretrained Transformer (GPT) developed by OpenAI. These are the two big terms we will focus on in this video. On top of that you will also get a base understanding of common Machine Learning techniques like supervised learning, and reinforcement learning, which were used to make ChatGPT as good as it is.",

    },
    {
        num: 6,
        title: "The Turing Test: Can a Computer pass for a Human?",
        author: "Ted-Ed",
        channel: "https://www.youtube.com/@TEDEd",
        videolink: "https://www.youtube.com/embed/3wLqsRLvV-c",
        description: "What is consciousness? Can an artificial machine really think? For many, these have been vital considerations for the future of artificial intelligence. But British computer scientist Alan Turing decided to disregard all these questions in favor of a much simpler one: Can a computer talk like a human? Alex Gendler describes the Turing test and details some of its surprising results.",

    },
    {
        num: 7,
        title: "AI Vs Machine Learning",
        author: "IBM Technology",
        channel: "https://www.youtube.com/@IBMTechnology",
        videolink: "https://www.youtube.com/embed/4RixMPF4xis",
        description: "What is really the difference between Artificial intelligence (AI) and machine learning (ML)? Are they actually the same thing? In this video, Jeff Crume explains the differences and relationship between AI & ML, as well as how related topics like Deep Learning (DL) and other types and properties of each.",

    }
]


export const WSWords = [
    {
        word: "algorithm",
        hint: "set of instructions or rules machines follow to solve a problem or accomplish a task.",
    },
    {
        word: "artificial",
        hint: "created; not natural",
    },
    {
        word: "intelligence",
        hint: "ability to acquire knowledge",
    },
    {
        word: "chatbot",
        hint: "program that simulate conversations with humans",
    },
    {
        word: "classification",
        hint: "a technique to assign a set of predefined categories",
    },
    {
        word: "linguistics",
        hint: "a field concerning of natural language",
    },
    {
        word: "recognition",
        hint: "ability to identify",
    },
    {
        word: "machine",
        hint: "a system able to perform tasks and actions",
    },
    {
        word: "model",
        hint: "algorithm that has processed data to be able to use in production",
    },
    {
        word: "training",
        hint: "action of teaching",
    },
    {
        word: "program",
        hint: "a series of software instructions",
    },
    {
        word: "prediction",
        hint: "a calculated guess about data",
    },
    {
        word: "decision",
        hint: "action of concluding after consideration",
    },
    {
        word: "precision",
        hint: "a percentage Value that indicates how many of the results are correct",
    },
    {
        word: "semantics",
        hint: "a study of the meaning of words and sentences",
    },
    

] 

export const QQuestions = [
    {
        question: "What is the full form of AI?",
        options: [
            {option: "Advanced Intelligence", answer: false},
            {option: "Artificial Intelligence", answer: true},
            {option: "Artificially Intelligent", answer: false},
            {option: "Anonymous Incognito", answer: false},
        ],
    },
    {
        question: "Who designed the Turing Test?",
        options: [
            {option: "Andrew Ng", answer: false},
            {option: "Micheal Jordan", answer: false},
            {option: "Alan Turing", answer: true},
            {option: "Beyonce", answer: false},
        ],
    },
    {
        question: "What is NOT an application of Artificial Intelligence",
        options: [
            {option: "Expert System", answer: false},
            {option: "Face Recognition", answer: false},
            {option: "Chatbots", answer: false},
            {option: "Database Management System", answer: true},
        ],
    },
    {
        question: "A Technique used to determine whether a machine is intelligent?",
        options: [
            {option: "Beep Test", answer: false},
            {option: "Turing Test", answer: true},
            {option: "Black Box Test", answer: false},
            {option: "Math Test", answer: false},
        ],
    },
    {
        question: "What are the components of an Expert System?",
        options: [
            {option: "Inference Base", answer: false},
            {option: "Knowledge Base", answer: false},
            {option: "User Interface", answer: false},
            {option: "All of the above", answer: true},
        ],
    },
    {
        question: "Which is considered a branch of AI?",
        options: [
            {option: "Full Stack Development", answer: false},
            {option: "Cyber Security", answer: false},
            {option: "IoT", answer: false},
            {option: "Machine Learning", answer: true},
        ],
    },
    {
        question: "What is the Aim of Artificial Intelligence?",
        options: [
            {option: "To solve real-world problems", answer: true},
            {option: "To explain what is meant by intelligence", answer: false},
            {option: "To solve artificial problems", answer: false},
            {option: "To create more problems", answer: false},
        ],
    },
    {
        question: "Which of these categories are part of Machine Learning?",
        options: [
            {option: "Supervies Learning", answer: false},
            {option: "Unsupervised Learning", answer: false},
            {option: "Reinforced Learning", answer: false},
            {option: "All of thte above", answer: true},
        ],
    }
]

