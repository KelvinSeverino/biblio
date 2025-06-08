import { useEffect, useState } from 'react';
import { getById, updateAuthor } from '../../services/authorService';
import { useNavigate } from 'react-router-dom';

const useAuthorEdit = (id) => {  
    const navigate = useNavigate();
      
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [authorField, setAuthorField] = useState({
        nome: "",
    });

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const authorData = await getById(id);
                setAuthorField(authorData);
            } catch (e) {
                setErrorMessage(e.error);
            }
        };

        if (id) fetchAuthor();
    }, [id]);

    const handleChange = (e) => {
        setAuthorField((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };   

    const handleSubmit = async () => {
        try {
            await updateAuthor(id, authorField);            
            setErrorMessage(null);
            setSuccessMessage("Autor atualizado com sucesso!");

            setTimeout(() => {
                navigate("/autores");
            }, 1000); 
        } catch (e) {
            setErrorMessage(e.error);
        }
    };

    return {
        successMessage,
        errorMessage,
        authorField,
        handleChange,
        handleSubmit
    };
};

export default useAuthorEdit;
