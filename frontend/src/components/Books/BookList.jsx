import { NavLink } from "react-router-dom";
import useBookList from '../../hooks/book/useBookList';
import useBookDelete from "../../hooks/book/useBookDelete";
import { formatCurrencyBR } from '../../utils/currencyHelper';

const BookList = () => {    
    const { books, fetchBooks, errorMessage: listError } = useBookList();
    const { deleteBook, errorMessage: deleteError } = useBookDelete();

    const handleDelete = async (id) => {
        await deleteBook(id);
        await fetchBooks();
    };

    return(
        <div className="container-fluid">
            <h3>Lista Livros</h3>
            {listError && <div className="alert alert-danger">{listError}</div>}
            {deleteError && <div className="alert alert-danger">{deleteError}</div>}

            {!listError && books.length === 0 && (
                <div className="alert alert-info">Nenhum Livro encontrado.</div>
            )}

            {!listError && books.length > 0 && (  
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Editora</th>
                            <th>Ano Pub.</th>
                            <th>Valor R$</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book, i) => {
                                return (
                                    <tr key={book.codl}>
                                        <td>{book.titulo}</td>
                                        <td>{book.editora}</td>
                                        <td>{book.ano_publicacao}</td>
                                        <td>{ formatCurrencyBR(book.valor) }</td>
                                        <td>
                                            <NavLink to={`/livros/view/${book.codl}`} className="btn btn-secondary">Abrir</NavLink>
                                            <NavLink to={`/livros/edit/${book.codl}`} className="btn btn-warning mx-2">Editar</NavLink>
                                            <button onClick={() => handleDelete(book.codl)} className="btn btn-danger">Apagar</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default BookList;