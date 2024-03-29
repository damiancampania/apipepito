const express = require('express');
const dbconnect = require('./config');
const ModelUser = require('./userModel');
const app = express();

const router = express.Router();

app.use(express.json());

router.post("/api/users", async (req, res) => {
    try {
        const body = req.body;
        const respuesta = await ModelUser.create(body);
        res.json(respuesta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/api/users", async (req, res) => {
    try {
        const respuesta = await ModelUser.find({});
        res.json({ docs: respuesta });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get("/api/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const respuesta = await ModelUser.findById(id);
        res.json(respuesta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put("/api/users/:id", async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const respuesta = await ModelUser.findOneAndUpdate({ _id: id }, body, { new: true });
        res.json(respuesta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/api/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const respuesta = await ModelUser.deleteOne({ _id: id });
        res.json(respuesta);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.use(router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`El servidor está en el puerto ${PORT}`);
});

dbconnect();