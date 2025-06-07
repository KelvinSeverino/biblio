import { useEffect, useState } from 'react';
import { getById, updateAuthor } from '../../services/authorService';

const useAuthorEdit = (id) => {    
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
            return { success: true };
        } catch (e) {
            setErrorMessage(e.error);
            return { success: false };
        }
    };

    return {
        authorField,
        errorMessage,
        handleChange,
        handleSubmit
    };
};

export default useAuthorEdit;
