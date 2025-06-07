import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import useAuthorView from '../../hooks/author/useAuthorView';

const AuthorView = () => {    
    const { id } = useParams();
    const navigate = useNavigate();
    const { author, errorMessage } = useAuthorView(id);

    const clickToBackHandler = () => {
        navigate('/autores');
    };

    return (
        <div>
            <div className="container">
                <Header title="Autor" />
                
                {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                )}
                
                <div className='row pt-4'>
                    <div className='col-md-12'>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Nome</th>               
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{author.nome || "Autor não encontrado"}</td> 
                                </tr> 
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className='container d-flex justify-content-center'>
                <button className='btn btn-primary' onClick={clickToBackHandler}>Voltar</button>
            </div>
        </div>
    );
};

export default AuthorView;