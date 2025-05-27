import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { destroyBook, getBooks } from "../../services/bookService";

const BookList = () => { 
    const [books, setBooks] = useState([])

    async function fetchBooks() {
        const booksData = await getBooks();
        console.log(booksData);
        setBooks(booksData)
    }

    useEffect(() => {
        fetchBooks();
    }, [])    

    async function deleteBook(id) {
        await destroyBook(id);
        fetchBooks();
    }

    return(
        <div className="container-fluid">
            <h3>Lista Livros</h3>
            {<table className="table table-bordered">
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
                                    <td>{book.valor}</td>
                                    <td>
                                        <NavLink to={`/livros/view/${book.codl}`} className="btn btn-secondary">Abrir</NavLink>
                                        <NavLink to={`/livros/edit/${book.codl}`} className="btn btn-warning mx-2">Editar</NavLink>
                                        <button onClick={()=>deleteBook(book.codl)} className="btn btn-danger">Apagar</button>
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

export default BookList;