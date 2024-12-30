import * as PlayerRepository from "../repositories/players-repository"
import * as StatusCode from "../utils/http-helper"

export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers()
    let response = null

    if(data){
        response = await StatusCode.Ok(data)
    } else {
        response = await StatusCode.noContent()
    }

    return response
}

export const getPlayerByIdService = async (id: number) => {
    // pedir pro respositorio de dados
    const data = await PlayerRepository.findPlayerById(id)
    let response = null

    if(data){
        response =  await StatusCode.Ok(data)
    } else {
        response = await StatusCode.noContent()
    }
    return response
}