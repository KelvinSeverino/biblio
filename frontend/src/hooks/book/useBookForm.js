import { useState, useEffect } from 'react';
import { storeBook } from '../../services/bookService';
import { getAuthors } from '../../services/authorService';
import { getSubjects } from '../../services/subjectService';
import { useNavigate } from 'react-router-dom';

const useBookForm = () => {
    const navigate = useNavigate();

    const initialBookField = {
        titulo: "",
        editora: "",
        edicao: "",
        ano_publicacao: "",
        assuntos: [],
        autores: [],
        valor: "",
    };

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState();
    const [bookField, setBookField] = useState(initialBookField);

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
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await storeBook(bookField); 
            setBookField(initialBookField);
            setSuccessMessage("Livro salvo com sucesso!");
        } catch (e) {     
            setErrorMessage(e.error);
        }
    }

    const clickToBackHome = () => {
        navigate('/');
    } 

    return {
        successMessage,
        errorMessage,
        bookField,
        authors,
        subjects,
        changeBookFieldHandler,
        handleSubmit,        
        clickToBackHome,
    };
};

export default useBookForm;
