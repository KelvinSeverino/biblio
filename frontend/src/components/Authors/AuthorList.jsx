import { NavLink } from "react-router-dom";
import useAuthorList from "../../hooks/author/useAuthorList";
import useAuthorDelete from "../../hooks/author/useAuthorDelete";

const AuthorList = () => {    
    const { authors, fetchAuthors, errorMessage: listError } = useAuthorList();
    const { deleteAuthor, errorMessage: deleteError } = useAuthorDelete();

    const handleDelete = async (id) => {
        await deleteAuthor(id);
        await fetchAuthors();
    };

    return (
        <div className="container-fluid">
            <h3>Lista Autores</h3>
            {listError && <div className="alert alert-danger">{listError}</div>}
            {deleteError && <div className="alert alert-danger">{deleteError}</div>}

            {!listError && authors.length === 0 && (
                <div className="alert alert-info">Nenhum Autor encontrado.</div>
            )}

            {!listError && authors.length > 0 && ( 
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {authors.map((author) => (
                            <tr key={author.codau}>
                                <td>{author.nome}</td>
                                <td>
                                    <NavLink to={`/autores/view/${author.codau}`} className="btn btn-secondary">Abrir</NavLink>
                                    <NavLink to={`/autores/edit/${author.codau}`} className="btn btn-warning mx-2">Editar</NavLink>
                                    <button onClick={() => handleDelete(author.codau)} className="btn btn-danger">Apagar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AuthorList;