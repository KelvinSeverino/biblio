import { useNavigate } from 'react-router-dom';

function BookHeader({ title = "Livros", subtitle = "Adicione e edite informações de livros." }) {
    const navigate = useNavigate();

    return (
        <header className="bg-light py-4 border-bottom">
            <div className="container d-flex justify-content-between align-items-center flex-wrap">
                <div>
                    <h2 className="text-primary fw-bold mb-1">{title}</h2>
                    <p className="text-muted small m-0">{subtitle}</p>
                </div>
                <button className="btn btn-success" onClick={() => navigate('/livros/criar')}>+ Novo Autor
                </button>
            </div>
        </header>
    );
}

export default BookHeader;
