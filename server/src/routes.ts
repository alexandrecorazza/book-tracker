import { Router } from "express";
import { CreateBookController } from "./controllers/CreateBookController";
import { DeleteBookController } from "./controllers/DeleteBookController";
import { GetAllBooksController } from "./controllers/GetAllBooksController";
import { UpdateBookStatusController } from "./controllers/UpdateBookStatusController";
import { UpdateBookController } from "./controllers/UpdateBookController";

const routes = Router()

routes.get("/books", new GetAllBooksController().handle)
routes.post("/books", new CreateBookController().handle)
routes.put("/books/:id", new UpdateBookController().handle)
routes.put("/books/status/:id", new UpdateBookStatusController().handle)
routes.delete("/books/:id", new DeleteBookController().handle)

export { routes }