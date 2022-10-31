import myDataSource from "../app-data-source"
import { Book } from "../entities/Book"

export class DeleteBookService {
    async execute(id: string) {
        const repo = myDataSource.getRepository(Book)
        
        // Convert id to a number
        const parsedId = parseInt(id)
        
        // SELECT * FROM "books" WHERE ID = "id"
        const book = await repo.findOne({
            where: { id : parsedId }
        })

        if (!book) {
            return new Error("Book does not exists")
        }

        // Execute DELETE query on database
        await repo.delete(id)
    }
}