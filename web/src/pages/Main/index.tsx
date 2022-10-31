import React, { ChangeEvent, useEffect, useState } from "react";
import logo from "../../assets/book.png";
import { Link } from "react-router-dom";
import "./styles.css";
import { FiArrowLeft } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import api from "../../services/api";
import moment from "moment"

type BookType = {
  id: number;
  title: string;
  author: string;
  created_at: string;
  concluded_at: string;
  rate: number;
  status: string;
}

const LandingPage: React.FC = () => {

  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    api.get("/books").then((response) => {
      console.log(response.data);

      response.data.map((book: BookType) => {
        book.created_at = moment(book.created_at).format('DD/MM/YYYY')

        if (book.concluded_at) {
          book.concluded_at = moment(book.concluded_at).format('DD/MM/YYYY')
        }
      });

      setBooks(response.data);
    });
  }, []);

  async function deleteBook(id: number) {

    try {
      
      await api.delete(`/books/${id}`)
      const newUpdatedBookList = books.filter(book => book.id !== id);
      setBooks(newUpdatedBookList);

    } catch {
      alert("Não foi possível excluir o livro.")
    }

  }

  return (
    <div id="main-page">
      <header>
        <div>
          <img style={{ width: 50, height: 50 }} src={logo} alt="BookTracker" />
          <h1>Book Tracker</h1>
        </div>
        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <div className="content">
        <h1>
          <div>
            Meus livros <br /> cadastrados
          </div>
          <button type="submit">Adicionar novo livro</button>
        </h1>

        {
          books.length > 0 ?
            
            <ul className="books-grid">
              {
                books.map((book: BookType) => (
                  <li className={ book.status == 'Quero ler' ? "to-read-status" : book.status == 'Lendo' ? "reading-status" :  "read-done-status" }
                    key={book.id}
                  >
                    <BiEdit/>
                    <AiFillDelete onClick={() => {deleteBook(book.id)}}/>
                    <span>Título: {book.title}</span>
                    <span>Author: {book.author}</span>
                    <span>Criado em: {book.created_at}</span>
                    <span>Concluído em: {book.concluded_at}</span>
                    <span>Nota: {book.rate}</span>
                    <span>Status: {book.status}</span>
                  </li>
                ))
              }
            </ul>

            :

            <strong className="empty-list">Sua lista está vazia! <br /> Adicione livros para acompanhar seu progresso. </strong>
        }

      </div>
    </div>
  );
}

export default LandingPage;
