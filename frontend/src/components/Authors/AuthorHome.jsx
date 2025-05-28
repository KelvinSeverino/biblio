import React, { useEffect, useState } from 'react';
import AuthorList from './AuthorList';
import { useNavigate } from 'react-router-dom';
import { storeAuthor } from '../../services/authorService';
import Header from '../Header/Header';

const AuthorHome = () => {    
    const navigate = useNavigate();

    const [loading, setLoading] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const [authorField, setAuthorField] = useState({
        nome: "",
    });

    const changeAuthorFieldHandler = (e) => {        
        setAuthorField({
            ...authorField,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await storeAuthor(authorField);            
            setLoading(true);
        } catch (e) {     
            setErrorMessage(e.error);
        }
    }
    if(loading){
        return <AuthorHome/>
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
                        <h3>Informe Dados do Autor</h3>
                        <form>
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <div className='row'>
                                <div className='col-12'>
                                    <div className="mt-2">
                                        <label className="form-label">Nome:</label>
                                        <input type="text" className="form-control" id="nome" placeholder="Insira nome" name="nome" onChange={e => changeAuthorFieldHandler(e)} />
                                    </div>
                                </div>
                            </div>    
                            
                            <br />
                            <button type="submit" className="btn btn-success" onClick={e => onSubmitChange(e)}>Gravar</button>                             
                        </form>
                    </div>
                    <div className='col-md-8'>
                        <AuthorList />
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

export default AuthorHome;