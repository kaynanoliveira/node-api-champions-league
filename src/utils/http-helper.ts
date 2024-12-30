import { HttpResponse } from "../models/http-response-model"

export const Ok = async (data:any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    }
}

export const noContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null
    }
}

export const badRequest = async ():Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: null
    }
}

export const Created = async ():Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "Successful"
        }
    }
}