import { useState, useEffect } from 'react';
import { storeSubject } from '../../services/subjectService';
import { useNavigate } from 'react-router-dom';

const useSubjectForm = () => {
    const navigate = useNavigate();

    const initialSubjectField = {
        descricao: "",
    };

    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState();
    const [subjectField, setSubjectField] = useState(initialSubjectField);

    const changeSubjectFieldHandler = (e) => {        
        setSubjectField({
            ...subjectField,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await storeSubject(subjectField); 
            setSubjectField(initialSubjectField);
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
        subjectField,
        changeSubjectFieldHandler,
        handleSubmit,        
        clickToBackHome,
    };
};

export default useSubjectForm;
