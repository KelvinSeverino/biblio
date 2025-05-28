import React, { useEffect, useState } from 'react';

import BookList from './BookList';
import { useNavigate } from 'react-router-dom';
import { storeBook } from '../../services/bookService';
import { getAuthors } from '../../services/authorService';
import { getSubjects } from '../../services/subjectService';
import Header from '../Header/Header';

const BookHome = () => {    
    const navigate = useNavigate();

    const [loading, setLoading] = useState()
    const [errorMessage, setErrorMessage] = useState()

    const [bookField, setBookField] = useState({
        titulo: "",
        editora: "",
        edicao: "",
        ano_publicacao: "",
        assuntos: [],
        autores: [],
    });

    const [authors, setAuthorData] = useState([]);
    const [subjects, setSubjectData] = useState([]);

    useEffect(() => {
        const loadAuthorData = async () => {
            const data = await getAuthors();
            setAuthorData(data);
        };

        const loadSubjectData = async () => {
            const data = await getSubjects();
            setSubjectData(data);
        };        

        loadSubjectData();
        loadAuthorData();
    }, []);

    const changeBookFieldHandler = (e) => {        
        setBookField({
            ...bookField,
            [e.target.name]: e.target.value
        });
        console.log(bookField);
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await storeBook(bookField);            
            setLoading(true);
        } catch (e) {     
            setErrorMessage(e.error);
        }
    }
    if(loading){
        return <BookHome/>
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
                <Header title="Livros"/>
                <div className='row pt-4'>
                    <div className='col-md-4'>
                        <h3>Informe Dados do Livro</h3>
                        <form>
                            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                            <div className='row'>
                                <div className='col-6'>
                                    <div className="mt-2">
                                        <label className="form-label">Título:</label>
                                        <input type="text" className="form-control" id="titulo" placeholder="Insira titulo" name="titulo" onChange={e => changeBookFieldHandler(e)} />
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className="mt-2">
                                        <label className="form-label">Editora:</label>
                                        <input type="text" className="form-control" id="editora" placeholder="Insira editora" name="editora" onChange={e => changeBookFieldHandler(e)} />
                                    </div>
                                </div>
                                <div className='col-6 py-2'>
                                    <label className="form-label">Autores:</label>
                                    <select className="form-control form-select" id="autores" name="autores" multiple
                                        onChange={e => {
                                            const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
                                            changeBookFieldHandler({ target: { name: "autores", value: selectedValues } });
                                        }}>
                                        {authors.map((opcao) => (
                                        <option key={opcao.codau} value={opcao.codau}>
                                            {opcao.nome}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='col-6 py-2'>
                                    <label className="form-label">Assuntos:</label>
                                    <select className="form-control form-select" id="assuntos" name="assuntos" multiple
                                        onChange={e => {
                                            const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
                                            changeBookFieldHandler({ target: { name: "assuntos", value: selectedValues } });
                                        }}>
                                        {subjects.map((opcao) => (
                                        <option key={opcao.codas} value={opcao.codas}>
                                            {opcao.descricao}
                                        </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className='row pb-3'>
                                <div className='col-3'>
                                    <div className="mt-2">
                                        <label className="form-label">Edição:</label>
                                        <input type="number" step="any" className="form-control" id="edicao" placeholder="Insira edicao" name="edicao" onChange={e => changeBookFieldHandler(e)} />
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <div className="mt-2">
                                        <label className="form-label">Ano Publicação:</label>
                                        <input type="number" min="1000" max="9999" className="form-control" id="ano_publicacao" placeholder="Insira Ano" name="ano_publicacao" onChange={e => changeBookFieldHandler(e)} />
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <div className="mt-2">
                                        <label className="form-label">Valor:</label>
                                        <input type="text" className="form-control" id="valor" placeholder="Insira valor" name="valor" onChange={e => changeBookFieldHandler(e)} />
                                    </div>
                                </div>
                            </div>
                             
                             <button type="submit" className="btn btn-success" onClick={e => onSubmitChange(e)}>Gravar</button>                             
                        </form>
                    </div>
                    <div className='col-md-8'>
                        <BookList />
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

export default BookHome;