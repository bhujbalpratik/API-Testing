import { User } from "../models/user.models.js";

export const userhome = (req, res) => {
    res.send("User Home Page");
}
export const register = async (req, res) => {
    const { name, email, password } = req.body;

    await User.create(
        {
            name, email, password
        }
    )

    return res.json({
        success: true,
        msg: "User Registerd Successfully"
    })


}

export const getAllUser = async (req, res) => {
    const users = await User.find({});
    return res.status(200).json({
        success: true,
        users
    })
}
export const getUser = async (req, res) => {
    const { name } = req.params;

    const user = await User.find({ name });
    if (!user) return res.status(400).json({ success: false, msg: "User Not found" })

    return res.status(200).json({
        success: true,
        user

    })
}

export const login = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({
            success: false,
            msg: "Invalid User"
        })
    }

    const isPasswordMatch = user.password === password;

    if (!isPasswordMatch) {
        return res.status(400).json({
            success: false,
            msg: "Invalid Password"
        })
    }

    return res.json({
        success: true,
        msg: "User Login Successfully"
    })
}