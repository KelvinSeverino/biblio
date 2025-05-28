import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById } from '../../services/subjectService';
import Header from '../Header/Header';

const SubjectView = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    
    const [subject, setSubject] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const fetchSubject = async () => {        
            try {
                const subjectData = await getById(id);
                setSubject(subjectData);
                setErrorMessage(null);
            } catch (e) {
                setSubject({});
                setErrorMessage(e.error);
            }
        };

        fetchSubject();
    }, [id]);

    const clickToBackHandler = () => {
        navigate('/assuntos');
    }
 
    return <div>
        <div className="container-fluid">
            <Header title="Assunto"/>

            {errorMessage && (
                <div className="alert alert-danger">{errorMessage}</div>
            )}

            <div className='row pt-4'>
                <div className='col-md-12'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Descrição</th>               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{subject.descricao || "Assunto não encontrado"}</td> 
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

export default SubjectView;