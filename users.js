const express = require("express");

const router = express.Router();


const DB = {};

const user = {
    id: "1",
    name: "",
    language: "Nodejs"
}

/**
 * List users
 */
router.get("/", (req, res) => {
    const items = Object.entries(DB).map(([key, value]) => value);

    res.json(items);
})

/**
 * Create user
 */
router.post("/", (req, res) => {
    const id = (Math.random() * 10).toFixed(0).toString();
    const name = req.body.name;
    const language = req.body.language;

    const object = { id, name, language };

    DB[id] = object;

    res.json(object);
});

/**
 * Get user
 */
router.get("/:id", (req, res) => {
    const objectID = req.params.id;

    const object = DB[objectID];

    res.json(object);
});


/**
 * Update user
 */
router.put("/:id", (req, res) => {
    const objectID = req.params.id;

    let object = DB[objectID];

    if(!object) {
        return res.status(404).send("User does not exist");
    }

    const name = req.body.name;
    const language = req.body.language;

    object = {
        id: objectID,
        name: name || object.name,
        language: language || object.language,
    }

    DB[objectID] = object;

    res.json(object);
});


/**
 * Delete user
 */
router.delete("/:id", (req, res) => {
    const objectID = req.params.id;
    delete DB[objectID];
    res.json({ status: "success" });
});



module.exports = router;