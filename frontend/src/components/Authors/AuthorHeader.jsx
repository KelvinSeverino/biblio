import { useNavigate } from 'react-router-dom';

function AuthorHeader({ title = "Autores", subtitle = "Adicione e edite informações de autores." }) {
    const navigate = useNavigate();

    return (
        <header className="bg-light py-4 border-bottom">
            <div className="container d-flex justify-content-between align-items-center flex-wrap">
                <div>
                    <h2 className="text-primary fw-bold mb-1">{title}</h2>
                    <p className="text-muted small m-0">{subtitle}</p>
                </div>
                <button
                    className="btn btn-success"
                    onClick={() => navigate('/autores/criar')}
                >
                    + Novo Autor
                </button>
            </div>
        </header>
    );
}

export default AuthorHeader;
