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

    const handleChange = (e) => {        
        setBookField({
            ...bookField,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedValue = bookField.valor.replace(/\./g, '').replace(',', '.');
        const adjustedData = {
            ...bookField,
            valor: formattedValue // Agora no formato correto para a API
        };

        try {
            await storeBook(adjustedData); 
            setBookField(initialBookField);
            setErrorMessage(null);
            setSuccessMessage("Livro salvo com sucesso!");

            setTimeout(() => {
                navigate("/livros");
            }, 1000); 
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
        handleChange,
        handleSubmit,        
        clickToBackHome,
    };
};

export default useBookForm;
