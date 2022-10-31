import logo from "../../assets/book.png";
import "./styles.css";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div id="landing-page">
      <div className="content">
        <header>
          <img style={{ width: 50, height: 50 }} src={logo} alt="BookTracker" />
          <h1>Book Tracker</h1>
        </header>

        <main>
          <h1>Sua plataforma de leitura favorita :)</h1>
          <p>
            Ajudamos você a acompanhar seu progresso nos seus livros de forma divertida.
          </p>

          <Link to="/main">
            <span>
              <FiLogIn />
            </span>
            <strong>Acessar plataforma</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default LandingPage;
