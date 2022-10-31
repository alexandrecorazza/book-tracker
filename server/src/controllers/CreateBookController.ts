import { Request, Response } from "express"
import { CreateBookService } from "../services/CreateBookService"

export class CreateBookController {
    async handle(request: Request, response: Response) {
        const { title, author } = request.body
       
        const service = new CreateBookService()
        
        const result = await service.execute({ title, author })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}