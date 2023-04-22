const express = require("express");

const usersRouter = require("./users");

const PORT = 5000;

const app = express();

app.use(express.json());

app.use("/users", usersRouter);

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(PORT, () => {
    console.log(`Started listening at port ${PORT}`);
});
