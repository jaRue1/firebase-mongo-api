import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import {
  getAllFurniture,
  addNewFurniture,
  updateFurniture,
  deleteFurniture,
  getFurnitureById,
} from "./src/furniture.js"
import dbConnect from "./src/dbConnect.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/hello", (_, res) => res.send("Hello World!"))

app.get("/furniture", (req, res) => getAllFurniture(req, res))
app.get("/furniture/:furnitureId", (req, res) => getFurnitureById(req, res))

app.post("/furniture", (req, res) => addNewFurniture(req, res))

app.patch("/furniture/:furnitureId", (req, res) => updateFurniture(req, res))
app.delete("/furniture/:furnitureId", (req, res) => deleteFurniture(req, res))

app.listen(3001, () => console.log("listening on port 3001"))
dbConnect()
export const api = functions.https.onRequest(app)
