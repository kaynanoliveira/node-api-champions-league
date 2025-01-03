import { PlayerModel } from "../models/player-model"
import { statisticsModel } from "../models/statistics-model"
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

export const createPlayerService = async (player: PlayerModel) => {
    let response = null
    // verifica se está vazio 
    if(Object.keys(player).length !== 0){
        await PlayerRepository.insertPlayer(player)
        response =  await StatusCode.Created()
    } else {
        response = await StatusCode.badRequest()
    }
    return response
}

export const deletePlayerService = async (id: number) => {
    let response = null
    const isDeleted = await PlayerRepository.deleteOnePlayer(id)
    if(isDeleted){
        response = await StatusCode.Ok({message: "Deleted"})
    }else{
        response = await StatusCode.badRequest()
    }
    
    return response
}

export const updatePlayerService = async (id: number, statistics: statisticsModel) => {
    let response = null
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics)
    
    if(Object.keys(data).length === 0){
        response = await StatusCode.badRequest()
    } else {
        response = await StatusCode.Ok(data)
    }
    return response 
}