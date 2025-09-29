const pool = require("../../db")

// Find a user by email
const findUser = async (email) => {
    try {
        const { rows } = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        )
        return rows[0] || null
    } catch (error) {
        throw new Error("findUser database error:", error)
    }
}

// Create a new user
const createUser = async ({ name, email, password, role }) => {
    try {
        const { rows } = await pool.query(
            `INSERT INTO users (name, email, password, role)
            VALUES ($1, $2, $3, $4)
            RETURNING *`,
            [name, email, password, role]
        )
        return rows[0] || null
    } catch (error) {
        throw new Error("createUser database error:", error)
    }
}

module.exports = {
    findUser,
    createUser
}