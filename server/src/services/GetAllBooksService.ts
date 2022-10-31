import myDataSource from "../app-data-source";
import { Book } from "../entities/Book";

export class GetAllBooksService {
    async execute() {
        const repo = myDataSource.getRepository(Book)

        //SELECT * FROM "books"
        const book = await repo.find()

        return book
    }
}