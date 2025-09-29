const { Pool } = require("pg")

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDB,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
})

module.exports = pool