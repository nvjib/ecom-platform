const create = async ({ image, title, price, description, features }) => {
    try {
        const { rows } = await pool.query(
            `INSERT INTO products (image, title, price, description, features)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`,
            [image, title, price, description, JSON.stringify(features)]
        )
    
        return rows[0] || null
    } catch (error) {
        console.error("CreateProduct db error", error)
        throw error
    }
}

module.exports = {
    create
}