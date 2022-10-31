import myDataSource from "../app-data-source";
import { Book } from "../entities/Book";

type BookRequestType = {
    title: string;
    author: string;
}

export class CreateBookService {
    async execute({ title, author }: BookRequestType): Promise<Book | Error> {

        const repo = myDataSource.getRepository(Book)

        // SELECT * FROM "books" WHERE TITLE = "title"
        let book = await repo.findOne({
            where: { title }
        })

        if (book) {
            return new Error("Book already exists")
        }

        book = repo.create({
            title,
            author
        })

        // Execute INSERT query into database
        await repo.save(book)

        return book
    }
}