const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { findUser, createUser } = require("./service")

const JWT_SECRET = process.env.JWT_SECRET

const signUp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body

        // Check if user exists
        const existingUser = await findUser(email)
    
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" })
        }
    
        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
    
        // Create new user
        const newUser = await createUser({
            name,
            email,
            password: hashedPassword,
            role
        })
    
        if (!newUser) {
            return res.status(500).json({ error: "User could not be created" })
        }
    
        // Sign JWT
        const token = jwt.sign(
            { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role },
            JWT_SECRET,
            { expiresIn: "1h" }
        )
    
        // Return success
        return res.status(201).json({ message: "User created successfully!", token })
    } catch (error) {
        return res.status(500).json({ error: error.message || "Internal server error" })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        // check if user exist  
        const user = await findUser(email)
    
        if (!user) {
            return res.status(404).json({ error: "User does not exist" })
        }
    
        // Compare password
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) return res.status(401).json({ error: "Invalid password" })
    
        // Sign JWT
        const token = jwt.sign(
            { id: user.id, name: user.name, email: user.email, role: user.role },
            JWT_SECRET,
            { expiresIn: "1h" }
        )
    
        // Return success
        return res.status(200).json({ message: "Logged in successfully!", token })
    } catch (error) {
        return res.status(500).json({ error: error.message || "Internal server error" })
    }
}

module.exports = {
    signUp,
    login
}
