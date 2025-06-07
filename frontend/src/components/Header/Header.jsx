import { NavLink, useNavigate } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="px-3 py-2 border-bottom bg-light">
                <div className="container d-flex flex-wrap justify-content-center">
                    <nav className="nav nav-pills">
                        <NavLink to="/" className="nav-link text-dark">🏠 Home</NavLink>
                        <NavLink to="/livros" className="nav-link text-dark">📚 Livros</NavLink>
                        <NavLink to="/autores" className="nav-link text-dark">✍️ Autores</NavLink>
                        <NavLink to="/assuntos" className="nav-link text-dark">📖 Assuntos</NavLink>
                        <NavLink to="/relatorio" className="nav-link text-dark">📊 Relatório</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
