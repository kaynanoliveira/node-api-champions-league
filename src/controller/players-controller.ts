import { Request, Response } from "express"
import getPlayerService from "../services/players-service"

export const getPlayer = (req:Request, res: Response) => {
    const data = getPlayerService()
    res.status(200).json(data)
}