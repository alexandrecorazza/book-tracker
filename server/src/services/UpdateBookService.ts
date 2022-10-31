import myDataSource from "../app-data-source";
import { Book } from "../entities/Book";

type UpdateBookServiceType = {
    id: string;
    title: string;
    author: string;
}

export class UpdateBookService {
    async execute({ id, title, author }: UpdateBookServiceType): Promise<Book | Error> {

        const repo = myDataSource.getRepository(Book)

        // Convert id to a number
        const parsedId = parseInt(id)

        // SELECT * FROM "books" WHERE ID = "id"
        const book = await repo.findOne({
            where: { id : parsedId}
        })

        if (!book) {
            return new Error("Book does not exists")
        }

        book.title = title ? title : book.title
        book.author = author ? author : book.author

        // Execute UPDATE query into database
        await repo.save(book)

        return book
    }
}