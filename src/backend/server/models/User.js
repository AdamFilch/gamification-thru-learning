import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "First Name is required"],
            min: 2,
            max: 50,
        },
        username: {
            type: String,
            required: [true, "Username is required"],
            min: 2,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            min: 2,
            max: 50,
        },
        ongoingCourse: {
            type: Array,
            default: []
        },
        gameProgress: {
            type: Object,
            default: []
        },
        role: {
            type: String,
            enum: ['Player', 'Lecturer', 'Game Master'],
            default: "Player",
            
        }
    }, 
    {timestamps: true}
)

const User = mongoose.model("User", UserSchema);
export default User;