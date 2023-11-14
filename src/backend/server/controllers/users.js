import User from "../models/User.js";

/* READ */
export const getUser = async(req, res) => {
    try {
        const{ id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user)

    } catch(err) {
        res.status(404).json({ message: err.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const {
            _id,
            firstname,
            username,
            password,
        } = req.body;

        const DelUser = new User({
            _id,
            firstname,
            username,
        })

        console.log(DelUser._id);
        const deletedUser = await User.findByIdAndDelete({_id: DelUser._id})
        res.send({status: "ok", data: deletedUser})
         
    } catch (err) {
        console.log(err);
    }
}

export const updateUser = async (req, res) => {
    try {
        const {
            _id,
            firstname,
            username,
            password,
            role,
            teamsaccount,
            whatsappaccount,
        } = req.body;

        const upUser = new User({
            _id,
            firstname,
            username,
            password,
            role,
            teamsaccount,
            whatsappaccount,
        })

        console.log(upUser.role);
        const updatedUser = await User.findByIdAndUpdate(upUser._id, upUser)
        res.send({status: "ok", data: updatedUser})
         
    } catch (err) {
        console.log(err);
    }
}