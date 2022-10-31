import { Request, Response } from "express";
import { UpdateBookService } from "../services/UpdateBookService";

export class UpdateBookController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const { title, author } = request.body

        const service = new UpdateBookService()

        const result = await service.execute({ id, title, author })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}