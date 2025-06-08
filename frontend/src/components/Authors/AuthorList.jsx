import { NavLink } from "react-router-dom";
import useAuthorList from "../../hooks/author/useAuthorList";
import useAuthorDelete from "../../hooks/author/useAuthorDelete";

const AuthorList = () => {    
    const { authors, fetchAuthors, errorMessage: listError } = useAuthorList();
    const { deleteAuthor, errorMessage: deleteError, successMessage: deleteSuccess } = useAuthorDelete();

    const handleDelete = async (id) => {
        await deleteAuthor(id);
        await fetchAuthors();
    };

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h2 className="text-primary fw-bold mb-0">Autores</h2>
                    <small className="text-muted">Lista completa de autores cadastrados</small>
                </div>
                <div className="text-end mb-3">
                    <NavLink to="/autores/criar" className="btn btn-sm btn-outline-dark">
                        🖊️ Novo Autor
                    </NavLink>
                </div>
            </div>

            {listError && <div className="alert alert-danger">{listError}</div>}
            
            {deleteSuccess && <div className="alert alert-success">{deleteSuccess}</div>}
            {deleteError && <div className="alert alert-danger">{deleteError}</div>}

            {!listError && authors.length === 0 && (
                <div className="alert alert-info">Nenhum autor encontrado.</div>
            )}

            {!listError && authors.length > 0 && (
                <div className="table-responsive">
                    <table className="table table-bordered table-hover align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Nome</th>
                                <th className="text-center" style={{ width: "220px" }}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {authors.map((author) => (
                                <tr key={author.codau}>
                                    <td>{author.nome}</td>
                                    <td className="text-center">
                                        <NavLink to={`/autores/visualizar/${author.codau}`} className="btn btn-sm btn-outline-secondary me-2">
                                            Abrir
                                        </NavLink>
                                        <NavLink to={`/autores/editar/${author.codau}`} className="btn btn-sm btn-outline-warning me-2">
                                            Editar
                                        </NavLink>
                                        <button onClick={() => handleDelete(author.codau)} className="btn btn-sm btn-outline-danger">
                                            Apagar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AuthorList;