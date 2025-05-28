import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { destroyAuthor, getAuthors } from "../../services/authorService";

const AuthorList = () => { 
    const [authors, setAuthors] = useState([]);
    const [error, setErrorMessage] = useState(null);

    async function fetchAuthors() {
        try {
            const authorsData = await getAuthors();
            if (!Array.isArray(authorsData)) {
                throw new Error("Erro ao carregar processar autores.");
            }

            setAuthors(authorsData);
        } catch (e) {
            setAuthors([]);
            setErrorMessage(e.error || "Falha ao obter os autores.");
        }
    }

    useEffect(() => {
        fetchAuthors();
    }, []);

    async function deleteAuthor(id) {
        try {
            await destroyAuthor(id);
            fetchAuthors();
        } catch (e) {
            setErrorMessage(e.error);
        }
    }

    return (
        <div className="container-fluid">
            <h3>Lista Autores</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            {!error && authors.length === 0 && (<div className="alert alert-info">Nenhum autor encontrado.</div>)}
            {!error && authors.length > 0 && (
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
                                    <button onClick={() => deleteAuthor(author.codau)} className="btn btn-danger">Apagar</button>
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