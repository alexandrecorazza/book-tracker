import React, { useEffect, useState } from "react";
import logo from "../../assets/book.png";
import { Link } from "react-router-dom";
import "./styles.css";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../services/api";

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
      setBooks(response.data);
    });
  }, []);

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
                  <li
                    key={book.id}
                  >
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
