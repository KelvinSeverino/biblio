import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById } from '../../services/subjectService';
import Header from '../Header/Header';

const SubjectView = () => {
    const {id} = useParams();

    const [subject, setSubject] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSubject = async () => {        
            const subjectData = await getById(id);
            // console.log(subjectData)
            setSubject(subjectData)
        }

        fetchSubject();
    }, [id]);

    const clickToBackHandler = () => {
        navigate('/assuntos');
    }
 
    return <div>
        <div className="container-fluid">
            <Header title="Assunto"/>
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
                                <td>{subject.descricao}</td> 
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