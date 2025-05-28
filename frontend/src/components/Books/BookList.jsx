import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { destroyBook, getBooks } from "../../services/bookService";
import { formatCurrencyBR } from '../../utils/currencyHelper';

const BookList = () => { 
    const [books, setBooks] = useState([]);
    const [error, setErrorMessage] = useState(null);

    async function fetchBooks() {
        try {
            const booksData = await getBooks();
            if (!Array.isArray(booksData)) {
                throw new Error("Erro ao carregar processar livros.");
            }

            setBooks(booksData);
        } catch (e) {
            setBooks([]);
            setErrorMessage(e.error || "Falha ao obter os livros.");
        }
    }

    useEffect(() => {
        fetchBooks();
    }, [])    

    async function deleteBook(id) {
        try {
            await destroyBook(id);
            fetchBooks();
        } catch (e) {
            setErrorMessage(e.error);
        }
    }

    return(
        <div className="container-fluid">
            <h3>Lista Livros</h3>
            {error && <div className="alert alert-danger">{error}</div>}
            {!error && books.length === 0 && (<div className="alert alert-info">Nenhum Livro encontrado.</div>)}
            {!error && books.length > 0 && (
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
                                            <button onClick={()=>deleteBook(book.codl)} className="btn btn-danger">Apagar</button>
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