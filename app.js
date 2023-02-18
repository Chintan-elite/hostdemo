const express = require("express")
const app = express();
const PORT = 9000

app.get("/", (req, resp) => {
    resp.send("yes....we have done")
})

app.listen(PORT, (req, resp) => {
    console.log("server runing on port" + PORT);
})