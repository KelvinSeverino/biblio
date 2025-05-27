import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById, updateAuthor } from '../../services/authorService';
import Header from '../Header/Header';

const AuthorEdit = () => {   
    const navigate = useNavigate();
    
    const {id} = useParams();

    const [errorMessage, setErrorMessage] = useState();
    const [authorField, setAuthorField] = useState({
        nome: "",
    });

    useEffect(() => {
        const fetchAuthor = async () => {
            const authorData = await getById(id);

            setAuthorField({
            ...authorData,
            });
        };

        fetchAuthor();
    }, [id]);

    const changeAuthorFieldHandler = (e) => {
        setAuthorField({
            ...authorField,
            [e.target.name]: e.target.value
        });
        // console.log(authorField);
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const response = await updateAuthor(id, authorField);            
            if(response.error) throw response.error;

            navigate('/autores');
        } catch (e) {     
            setErrorMessage(e.message);     
        }
    }
    
    const clickToBackHandler = () => {
        navigate('/autores');
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
            <Header title="Editar Autor"/>
            <div className='col-12 pt-4'>
                <form>
                    {errorMessage && <div className='text-danger'>{errorMessage}</div>}
                    <div className='row'>
                        <div className='col-12'>
                            <div className="mt-2">
                                <label className="form-label">Nome:</label>
                                <input type="text" className="form-control" id="nome" placeholder="Insira nome" name="nome" value={authorField.nome} onChange={e => changeAuthorFieldHandler(e)} />
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

export default AuthorEdit;