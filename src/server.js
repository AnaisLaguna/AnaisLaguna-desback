const cors = require("cors");
const express = require("express");
const userRouter = require("./routers/user.router");
const authRouter = require("./routers/auth.router")
const postRouter = require("./routers/post.Router");



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/posts", postRouter);



app.get("/", (request, response) => {
    response.json({
        message: "Bienvenido a mi desafio v1"
    });
});

module.exports = app;