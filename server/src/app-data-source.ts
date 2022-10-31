import { DataSource } from "typeorm"

const myDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    database: "postgres",
    entities: ["./src/entities/*.{ts,js}"],
    migrations: ["./src/database/migrations/*.{ts,js}"],
})

export default myDataSource