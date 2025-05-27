import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { destroyAuthor, getAuthors } from "../../services/authorService";

const AuthorList = () => { 
    const [authors, setAuthors] = useState([])

    async function fetchAuthors() {
        const authorsData = await getAuthors();
        // console.log(authorsData);
        setAuthors(authorsData)
    }

    useEffect(() => {
        fetchAuthors();
    }, [])    

    async function deleteAuthor(id) {
        await destroyAuthor(id);
        fetchAuthors();
    }

    return(
        <div className="container-fluid">
            <h3>Lista Autores</h3>
            {<table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, i) => {
                            return (
                                <tr key={author.codau}>
                                    <td>{author.nome}</td>
                                    <td>
                                        <NavLink to={`/autores/view/${author.codau}`} className="btn btn-secondary">Abrir</NavLink>
                                        <NavLink to={`/autores/edit/${author.codau}`} className="btn btn-warning mx-2">Editar</NavLink>
                                        <button onClick={()=>deleteAuthor(author.codau)} className="btn btn-danger">Apagar</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>}
        </div>
    )
}

export default AuthorList;