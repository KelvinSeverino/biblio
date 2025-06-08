import { NavLink } from "react-router-dom";
import useBookList from "../../hooks/book/useBookList";
import useBookDelete from "../../hooks/book/useBookDelete";
import { formatCurrencyBR } from "../../utils/currencyHelper";

const BookList = () => {
    const { books, fetchBooks, errorMessage: listError } = useBookList();
    const { deleteBook, errorMessage: deleteError, successMessage: deleteSuccess } = useBookDelete();

    const handleDelete = async (id) => {
        await deleteBook(id);
        await fetchBooks();
    };

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h2 className="text-primary fw-bold mb-0">Livros</h2>
                    <small className="text-muted">Lista completa de livros cadastrados</small>
                </div>
                <div className="text-end mb-3">
                    <NavLink to="/livros/criar" className="btn btn-sm btn-outline-dark">
                        📖 Novo Livro
                    </NavLink>
                </div>
            </div>

            {listError && <div className="alert alert-danger">{listError}</div>}
            
            {deleteSuccess && <div className="alert alert-success">{deleteSuccess}</div>}   
            {deleteError && <div className="alert alert-danger">{deleteError}</div>}

            {!listError && books.length === 0 && (
                <div className="alert alert-info">Nenhum livro encontrado.</div>
            )}

            {!listError && books.length > 0 && (
                <div className="table-responsive">
                    <table className="table table-bordered table-hover align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Título</th>
                                <th>Editora</th>
                                <th>Ano Pub.</th>
                                <th>Valor R$</th>
                                <th className="text-center" style={{ width: "220px" }}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books.map((book) => (
                                <tr key={book.codl}>
                                    <td>{book.titulo}</td>
                                    <td>{book.editora}</td>
                                    <td>{book.ano_publicacao}</td>
                                    <td>{formatCurrencyBR(book.valor)}</td>
                                    <td className="text-center">
                                        <NavLink to={`/livros/visualizar/${book.codl}`} className="btn btn-sm btn-outline-secondary me-2">
                                            Abrir
                                        </NavLink>
                                        <NavLink to={`/livros/editar/${book.codl}`} className="btn btn-sm btn-outline-warning me-2">
                                            Editar
                                        </NavLink>
                                        <button onClick={() => handleDelete(book.codl)} className="btn btn-sm btn-outline-danger">
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

export default BookList;
