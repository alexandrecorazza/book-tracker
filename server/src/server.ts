import "reflect-metadata"
import express from "express"
import cors from "cors";
import myDataSource from "./app-data-source"
import { routes } from "./routes"

myDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

    
const app = express()

app.use(cors());

app.use(express.json())

app.use(routes)

app.listen(3333, () => console.log("Server is running"))