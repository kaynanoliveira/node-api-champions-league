import { noContent, Ok } from "../utils/http-helper"

export const getPlayerService = async () => {
    const data = {player: "ronaldo"}
    let response = null

    if(data){
        response = await Ok(data)
    } else {
        response = await noContent()
    }
    
    return response
}