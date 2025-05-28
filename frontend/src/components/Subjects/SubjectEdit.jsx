import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById, updateSubject } from '../../services/subjectService';
import Header from '../Header/Header';

const SubjectEdit = () => {   
    const navigate = useNavigate();
    
    const {id} = useParams();

    const [errorMessage, setErrorMessage] = useState();
    const [subjectField, setSubjectField] = useState({
        nome: "",
    });

    useEffect(() => {
        const fetchSubject = async () => {
            try {
                const subjectData = await getById(id);
                setSubjectField(subjectData);
            } catch (e) {
                setErrorMessage(e.error); // 🔹 Agora usa a mensagem tratada pelo `apiService.js`
            }
        };
        fetchSubject();
    }, [id]);

    const changeSubjectFieldHandler = (e) => {
        setSubjectField({
            ...subjectField,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await updateSubject(id, subjectField);
            navigate("/assuntos");
        } catch (e) {
            setErrorMessage(e.error);
        }
    };
    
    const clickToBackHandler = () => {
        navigate('/assuntos');
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

    return(
        <div className='container-fluid'>
            <Header title="Editar Assunto"/>
            <div className='col-12 pt-4'>
                <form>
                    {errorMessage && (<div className="alert alert-danger">{errorMessage}</div>)}
                    <div className='row'>
                        <div className='col-12'>
                            <div className="mt-2">
                                <label className="form-label">Descrição:</label>
                                <input type="text" className="form-control" id="descricao" placeholder="Insira descricao" name="descricao" value={subjectField.descricao} onChange={e => changeSubjectFieldHandler(e)} />
                            </div>
                        </div>
                    </div>                
                </form>
                <div className='container d-flex justify-content-center pt-4'>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button className='btn btn-warning' onClick={clickToBackHandler}>Voltar</button>
                        <button type='submit' className='btn btn-success float-left' onClick={e => onSubmitChange(e)}>Atualizar</button>
                    </div>
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

export default SubjectEdit;