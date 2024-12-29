import * as PlayerRepository from "../repositories/players-repository"
import { noContent, Ok } from "../utils/http-helper"

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers()
    let response = null

    if(data){
        response = await Ok(data)
    } else {
        response = await noContent()
    }

    return response
}