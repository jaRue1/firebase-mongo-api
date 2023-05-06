import Furniture from "./models.js"
// get all furniture
export async function getAllFurniture(req, res) {
  // get the whole furniture collection
  Furniture.find()
    .then((furniture) => {
      res.json({
        message: "furniture retrieved successfully",
        data: furniture,
      })
    })
    // catch any errors -> status 500
    .catch((err) => {
      res.status(500).send(err)
      return
    })
  res.set("Cache-Control", "public, max-age=300, s-maxage=600")
}
// get furniture by id
export async function getFurnitureById(req, res) {
  const { furnitureId } = req.params
  Furniture.findById({ _id: furnitureId })
    .then((furniture) => {
      res.json({
        message: "furniture retrieved successfully",
        data: furniture,
      })
    })
    .catch((err) => {
      res.status(500).send(err)
      return
    })
}
// add new furniture
export async function addNewFurniture(req, res) {
  // get new furniture from the body of the request
  const { brand, model, type, price } = req.body

  const newFurniture = new Furniture({
    brand,
    model,
    type,
    price,
  })

  // put this new furniture into our furniture collection in our db
  newFurniture
    .save()
    .then(() => {
      res.json({ message: "Furniture added" })
    })
    // catch errors and send with status 500
    .catch((err) => {
      res.status(500).send(err)
      return
    })
}
// update furniture
export async function updateFurniture(req, res) {
  const { furnitureId } = req.params

  const { brand, model, type, price } = req.body
  Furniture.findById({ _id: furnitureId }).then((furniture) => {
    furniture.brand = brand
    furniture.model = model
    furniture.type = type
    furniture.price = price
    furniture
      .save()
      .then(() => {
        res.json({ message: "Furniture updated" })
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  })
}
// delete furniture
export async function deleteFurniture(req, res) {
  const { furnitureId } = req.params
  Furniture.findByIdAndDelete({ _id: furnitureId })
    .then(() => {
      res.json({ _id: furnitureId, message: "Furniture deleted" })
    })
    .catch((err) => {
      res.status(500).send(err)
    })
}
