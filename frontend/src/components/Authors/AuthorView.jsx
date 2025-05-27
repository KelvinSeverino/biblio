import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById } from '../../services/authorService';
import Header from '../Header/Header';

const AuthorView = () => {
    const {id} = useParams();

    const [author, setAuthor] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAuthor = async () => {        
            const authorData = await getById(id);
            console.log(authorData)
            setAuthor(authorData)
        }

        fetchAuthor();
    }, [id]);

    const clickToBackHandler = () => {
        navigate('/autores');
    }
 
    return <div>
        <div className="container">
            <Header title="Autor"/>
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
                                <td>{author.nome}</td> 
                            </tr> 
                        </tbody>
                    </table>
                </div>
 
            </div>
        </div>
        <div className='container d-flex justify-content-center'>
            <div><button className='btn btn-primary' onClick={clickToBackHandler}>Voltar</button></div>
        </div>
    </div>   
}

export default AuthorView;