const router = require("express").Router();

const db = require("./recipes-model");

router.get("/", async (req, res) => {
  try {
    const recipes = await db.getRecipes();
    res.status(200).json(recipes);
  } catch {
    res.status(500).json({ message: "500 error: can't find data" });
  }
});

router.get("/:id/ShoppingList", async (req, res) => {
  const { id } = req.params;
  try {
    const shoppingList = await db.getShoppingList(id);
    res.json(shoppingList);
  } catch {
    res.status(500).json({ message: "500 error: can't find data" });
  }
});

router.get("/:id/instructions", async (req, res) => {
  const { id } = req.params;
  try {
    const instructions = await db.getInstructions(id);
    res.json(instructions);
  } catch {
    res.status(500).json({ message: "500 error: can't find data" });
  }
});

module.exports = router;
