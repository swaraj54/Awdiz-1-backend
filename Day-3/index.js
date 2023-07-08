import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import User from './modals/User.js';

const app = express();

app.use(express.json());

dotenv.config();

app.get('/', (req, res) => {
    res.send("Working..")
})

app.post("/register", async (req, res) => {
    try {
        const { name, email, password, number } = req.body;

        if (!name) return res.send("Name is required!");
        if (!email) return res.send("Email is required!");
        if (!password) return res.send("Password is required!");
        if (!number) return res.send("Number is required!");

        const user = new User({
            name: name,
            email: email,
            password,
            number
        })
        await user.save();
        res.send("Registeratrion Complete...")
    } catch (error) {
        res.send(error)
    }

})


app.put("/update-data/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.send("Id is required!");
        const { number, name } = req.body;
        if (!number && !name) return res.send('Inputs data is required!')

        await User.findByIdAndUpdate(id, { number: number, name: name })
        // console.log(res, "- res")
        res.send("Data Updated!");
    } catch (error) {
        return res.send(error)
    }
})


app.delete("/delete-user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) return res.send("Id is required!");

        await User.findByIdAndDelete(id);
        res.send("User deleted!")
    } catch (error) {
        return res.send(error)
    }
})

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to DB")
}).catch((error) => {
    console.log("Error while connecting mongofb :- ", error)
})

app.listen(8000, () => {
    console.log("Sever listening on port 8000");
})