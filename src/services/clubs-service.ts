import * as ClubRepository from "../repositories/clubs-repository"
import * as StatusCode from "../utils/http-helper"

export const getClubService = async () => {
    const data = await ClubRepository.findAllClub()
    const response = StatusCode.Ok(data)
    return response
}   