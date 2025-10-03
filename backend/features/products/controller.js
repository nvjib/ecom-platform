const { create } = require("./service")

const createProduct = async (req, res) => {
    try {
        const { image, title, price, description, features } = req.body

        // insert into db
        const product = await create({
            image, 
            title, 
            price, 
            description,
            features
        })

        if (!product) {
            return res.status(500).json({ error: "Product could not be created" })
        }

        return res.status(201).json({ message: "Product created successfully", product })
    } catch (error) {
        console.error({ error: error.message })
        return res.status(500).json({ error: "Internal server error", product })
    }
}

module.exports = {
    createProduct
}