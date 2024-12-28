import express from "express"
import router from "./routes/routes"

// Configuração da minha aplicação
function createApp(){
    const app = express()

    app.use(express.json())

    app.use("/api", router)

    return app
}

export default createApp