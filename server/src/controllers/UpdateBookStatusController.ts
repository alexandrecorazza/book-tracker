import { Request, Response } from "express";
import { UpdateBookStatusService } from "../services/UpdateBookStatusService";

export class UpdateBookStatusController {
    async handle(request: Request, response: Response) {
        const { id } = request.params

        const { rate, status } = request.body

        const service = new UpdateBookStatusService()

        const result = await service.execute({ id, rate, status })

        if (result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}