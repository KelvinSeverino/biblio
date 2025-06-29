import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { formatCurrencyBR } from '../../utils/currencyHelper';
import useBookView from '../../hooks/book/useBookView';

const BookView = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { book, errorMessage } = useBookView(id);

    const clickToBackHandler = () => {
        navigate('/livros');
    };

    return (
        <div>
            <Header />
            <div className="container">
                {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                )}

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
                                    <td>{book.titulo || "Livro não encontrado"}</td>
                                    <td>{book.editora || "-"}</td>
                                    <td>{book.edicao || "-"}</td>
                                    <td>{book.ano_publicacao || "-"}</td>
                                    <td>{book.valor ? formatCurrencyBR(book.valor) : "-"}</td>
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

        </div>
    );
};

export default BookView;
