const express = require("express")

const app = express()
var { createHandler }=  require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")


app.use("/graphql", createHandler({
    
}))
app.listen(4000, () => {
    console.log("listening request on port 4000")
})

