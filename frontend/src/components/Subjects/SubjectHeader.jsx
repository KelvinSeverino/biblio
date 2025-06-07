import { useNavigate } from 'react-router-dom';

function SubjectHeader({ title = "Assuntos", subtitle = "Adicione e edite informações de assuntos." }) {
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
                    onClick={() => navigate('/assuntos/criar')}
                >
                    + Novo Autor
                </button>
            </div>
        </header>
    );
}

export default SubjectHeader;
