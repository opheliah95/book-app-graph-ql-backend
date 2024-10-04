const express = require("express")
const app = express()
var { createHandler }=  require("graphql-http/lib/use/express")
var { ruruHTML } = require("ruru/server")
 
const schema = require("./schema/schema")

app.get("/", (_req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
  })
  
app.use("/graphql", createHandler({
    schema: schema
}))

app.listen(4000, () => {
    console.log("listening request on port 4000")
})

