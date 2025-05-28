import React, { useEffect, useState } from 'react';
import SubjectList from './SubjectList';
import { useNavigate } from 'react-router-dom';
import { storeSubject } from '../../services/subjectService';
import Header from '../Header/Header';

const SubjectHome = () => {    
    const navigate = useNavigate();

    const [loading, setLoading] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const [subjectField, setSubjectField] = useState({
        nome: "",
    });

    const changeSubjectFieldHandler = (e) => {        
        setSubjectField({
            ...subjectField,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await storeSubject(subjectField);            
            setLoading(true);
        } catch (e) {     
            setErrorMessage(e.error);
        }
    }
    if(loading){
        return <SubjectHome/>
    }

    const clickToBackHome = () => {
        navigate('/');
    }

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color: color,
                backgroundColor: color,
                height: 3
            }}
        />
    );

    return (
        <div className="container-fluid">
                <Header title="Autor"/>
                <div className='row pt-4'>
                    <div className='col-md-4'>
                        <h3>Informe Dados do Assunto</h3>
                        <form>
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <div className='row'>
                                <div className='col-12'>
                                    <div className="mt-2">
                                        <label className="form-label">Descrição:</label>
                                        <input type="text" className="form-control" id="descricao" placeholder="Insira descricao" name="descricao" onChange={e => changeSubjectFieldHandler(e)} />
                                    </div>
                                </div>
                            </div>    
                            
                            <br />
                            <button type="submit" className="btn btn-success" onClick={e => onSubmitChange(e)}>Gravar</button>                             
                        </form>
                    </div>
                    <div className='col-md-8'>
                        <SubjectList />
                    </div>
                </div>
            <ColoredLine color="black"/>
            <div className='container d-flex justify-content-center'>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button className='btn btn-secondary' onClick={clickToBackHome}>Home</button>
                </div>
            </div>
        </div>
    ) 
}

export default SubjectHome;