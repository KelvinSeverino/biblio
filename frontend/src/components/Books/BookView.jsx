import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById } from '../../services/bookService';
import Header from '../Header/Header';

const BookView = () => {
    const { id } = useParams();

    const [book, setBook] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBook = async () => {
            const bookData = await getById(id);
            console.log(bookData);
            setBook(bookData);
        };

        fetchBook();
    }, [id]);

    const clickToBackHandler = () => {
        navigate('/livros');
    };

    return (
        <div className="container-fluid">
            <Header title="Visualizar Livro" />
            <div className="row pt-4">
                <div className="col-md-12">
                    <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                <th>Título</th>
                                <th>Editora</th>
                                <th>Edição</th>
                                <th>Ano Publicação</th>
                                <th>Valor R$</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{book.titulo}</td>
                                <td>{book.editora}</td>
                                <td>{book.edicao}</td>
                                <td>{book.ano_publicacao}</td>
                                <td>{book.valor}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="col-md-6">
                    <h5>Autores:</h5>
                    <ul className="list-group">
                        {book.autores?.length > 0 ? (
                            book.autores.map((autor) => (
                                <li key={autor.codau} className="list-group-item">
                                    {autor.nome}
                                </li>
                            ))
                        ) : (
                            <li className="list-group-item">Nenhum autor informado</li>
                        )}
                    </ul>
                </div>

                <div className="col-md-6">
                    <h5>Assuntos:</h5>
                    <ul className="list-group">
                        {book.assuntos?.length > 0 ? (
                            book.assuntos.map((assunto) => (
                                <li key={assunto.codas} className="list-group-item">
                                    {assunto.descricao}
                                </li>
                            ))
                        ) : (
                            <li className="list-group-item">Nenhum assunto informado</li>
                        )}
                    </ul>
                </div>
            </div>

            <div className="container d-flex justify-content-center pt-4">
                <button className="btn btn-primary" onClick={clickToBackHandler}>
                    Voltar
                </button>
            </div>
        </div>
    );
};

export default BookView;
