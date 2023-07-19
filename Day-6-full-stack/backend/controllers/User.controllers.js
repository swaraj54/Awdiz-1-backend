import User from './../modal/User.schema.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) return res.send("Fields are unfilled..")

        const isUserExist = await User.findOne({ email })
        if (isUserExist) {
            return res.json({ status: 404, message: "Email already used try different one.." })
        }
        const newUser = new User({ name, email, password, role });
        await newUser.save();
        return res.json({ status: 200, message: "Regiseration Complete." })
    } catch (error) {
        return res.send(error)
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.send("Fields are unfilled..")

        const user = await User.findOne({ email, password }).select("-password");

        // console.log("Before token", user)

        const payload = { id: user._id, email: user.email, role: user.role }

        const token = jwt.sign(payload, process.env.JWT_SECRET);
        // console.log(token, "- token")
        if (user) {
            return res.json({ status: 200, message: "Login successfull.", data: token, user })
        }
        return res.send("Credentials wrong..")
    } catch (error) {
        return res.send(error)
    }
}


export const getCurrentUser = async (req, res) => {
    try {
        const { token } = req.body;
        if (!token) return res.send("Token is required!")

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        // console.log(decodedToken, "decoeded tokem")

        const userId = decodedToken.id;

        const user = await User.findById(userId);

        if (user) {
            res.status(200).json({ data: user, status: "Sucess" })
        }

    } catch (error) {
        return res.send(error)
    }
}