import myDataSource from "../app-data-source";
import { Book } from "../entities/Book";

type UpdateBookStatusServiceType = {
    id: string;
    rate: number;
    status: string;
}

export class UpdateBookStatusService {
    async execute({ id, rate, status }: UpdateBookStatusServiceType): Promise<Book | Error> {

        const repo = myDataSource.getRepository(Book)

        // Convert id to a number
        const parsedId = parseInt(id)
        
        // SELECT * FROM BOOKS WHERE ID = "id"
        const book = await repo.findOne({
            where: { id: parsedId }
        })

        if (!book) {
            return new Error("Book does not exists")
        }

        if (status == "Quero ler" || status == "Lendo" || status == "Lido") {
            if (status == "Lido") {
                const dateNow = new Date
                book.concluded_at =  dateNow
                book.rate = rate
            } else {
                // If status is set to "Lido" and we change to "Quero ler" or "lendo", concluded date and rate flags must be restarted
                book.concluded_at = null
                book.rate = null
            }
    
            book.status = status
    
            // Execute UPDATE query into database
            await repo.save(book)
    
            return book
        }

        return new Error("Invalid status!")

    }
}