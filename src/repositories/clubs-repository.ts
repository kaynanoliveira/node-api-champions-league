import { ClubModel } from "../models/club-model"

const database: ClubModel[] = [
    {
        id: 1,
        name: "Real Madrid"
    }
]

// Listar todos os clubs 
export const findAllClub = async ():Promise<ClubModel[]> => {
    return database
}
