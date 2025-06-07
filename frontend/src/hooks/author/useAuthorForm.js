import { useState, useEffect } from 'react';
import { storeAuthor } from '../../services/authorService';
import { useNavigate } from 'react-router-dom';

const useAuthorForm = () => {
    const navigate = useNavigate();

    const initialAuthorField = {
        nome: "",
    };

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState();
    const [authorField, setAuthorField] = useState(initialAuthorField);

    const changeAuthorFieldHandler = (e) => {        
        setAuthorField({
            ...authorField,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await storeAuthor(authorField); 
            setAuthorField(initialAuthorField);
            setErrorMessage(null);
            setSuccessMessage("Autor salvo com sucesso!");
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
        authorField,
        changeAuthorFieldHandler,
        handleSubmit,        
        clickToBackHome,
    };
};

export default useAuthorForm;
