import { Request, Response } from "express";
import { DeleteBookService } from "../services/DeleteBookService";

export class DeleteBookController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const service = new DeleteBookService()

        const result = await service.execute(id)

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json({ "message": "Book deleted!" })
    }
}