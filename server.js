import express from "express"
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";


// aap config
const app = express()

const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middleware
app.use(express.json())
app.use(cors())


// endpints api wale

app.get("/", function (req, res) {
    res.json({
        message: "Api Working"
    })
})

app.listen(port, () => {
    console.log("server started on port : " + port)
})