import { ClubModel } from "../models/club-model"
import fs from "fs/promises"


// Listar todos os clubs 
export const findAllClub = async ():Promise<ClubModel[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8")
    const clubs: ClubModel[] = JSON.parse(data)
    return clubs
}
