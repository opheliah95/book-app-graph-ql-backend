const express = require("express")
const app = express()
var { createHandler }=  require("graphql-http/lib/use/express")

const schema = require("./schema/schema")

app.get("/", (req, res) => {
    return res.json({message: "Welcome to the graphql backend"})
})

app.use("/graphql", createHandler({
    schema: schema
}))

app.listen(4000, () => {
    console.log("listening request on port 4000")
})

