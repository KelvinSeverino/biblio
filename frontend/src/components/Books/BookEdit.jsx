import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById, updateBook } from '../../services/bookService';
import { getAuthors } from '../../services/authorService';
import { getSubjects } from '../../services/subjectService';
import Header from '../Header/Header';

const BookEdit = () => {   
    const navigate = useNavigate();
    
    const {id} = useParams();

    const [errorMessage, setErrorMessage] = useState();
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

        loadAuthorData();
        loadSubjectData();
    }, []);

    useEffect(() => {
        const fetchBook = async () => {
            const bookData = await getById(id);

            setBookField({
            ...bookData,
            autores: bookData.autores.map(a => String(a.codau)),
            assuntos: bookData.assuntos.map(a => String(a.codas)),
            });
        };

        fetchBook();
    }, [id]);

    const changeBookFieldHandler = (e) => {
        setBookField({
            ...bookField,
            [e.target.name]: e.target.value
        });
        // console.log(bookField);
    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            const response = await updateBook(id, bookField);            
            if(response.error) throw response.error;

            navigate('/livros');
        } catch (e) {     
            setErrorMessage(e.message);     
        }
    }
    
    const clickToBackHandler = () => {
        navigate('/livros');
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
            <Header title="Editar Livro"/>
            <div className='col-12 pt-4'>
                <form>
                    {errorMessage && <div className='text-danger'>{errorMessage}</div>}
                    <div className='row'>
                        <div className='col-6'>
                            <div className="mt-2">
                                <label className="form-label">Título:</label>
                                <input type="text" className="form-control" id="bookname" placeholder="Insira titulo" name="titulo" value={bookField.titulo} onChange={e => changeBookFieldHandler(e)} />
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="mt-2">
                                <label className="form-label">Editora:</label>
                                <input type="text" className="form-control" id="editora" placeholder="Insira editora" name="editora" value={bookField.editora} onChange={e => changeBookFieldHandler(e)} />
                            </div>
                        </div>                        
                        <div className='col-6 py-2'>
                            <label className="form-label">Autores:</label>
                            <select
                                className="form-control form-select"
                                id="autores"
                                name="autores"
                                multiple
                                value={bookField.autores.map(String)}
                                onChange={e => {
                                    const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
                                    changeBookFieldHandler({ target: { name: "autores", value: selectedValues } });
                                }}
                                >
                                {authors.map((opcao) => (
                                    <option key={opcao.codau} value={opcao.codau}>
                                    {opcao.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='col-6 py-2'>
                            <label className="form-label">Assuntos:</label>
                            <select
                                className="form-control form-select"
                                id="assuntos"
                                name="assuntos"
                                multiple
                                value={bookField.assuntos.map(String)}
                                onChange={e => {
                                    const selectedValues = Array.from(e.target.selectedOptions, option => option.value);
                                    changeBookFieldHandler({ target: { name: "assuntos", value: selectedValues } });
                                }}
                                >
                                {subjects.map((opcao) => (
                                    <option key={opcao.codas} value={String(opcao.codas)}>
                                    {opcao.descricao}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-3'>
                            <div className="mt-2">
                                <label className="form-label">Edição:</label>
                                <input type="number" step="any" className="form-control" id="edicao" placeholder="Insira edicao" name="edicao" value={bookField.edicao} onChange={e => changeBookFieldHandler(e)} />
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className="mt-2">
                                <label className="form-label">Ano Publicação:</label>
                                <input type="number" min="1000" max="9999" className="form-control" id="ano_publicacao" placeholder="Insira Ano" name="ano_publicacao" value={bookField.ano_publicacao} onChange={e => changeBookFieldHandler(e)} />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className="mt-2">
                                <label className="form-label">Valor R$:</label>
                                <input type="text" className="form-control" id="valor" placeholder="Insira Valor" name="valor" value={bookField.valor} onChange={e => changeBookFieldHandler(e)} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
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

export default BookEdit;