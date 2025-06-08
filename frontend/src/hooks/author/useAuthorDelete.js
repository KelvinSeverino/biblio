import { useState } from 'react';
import { destroyAuthor } from '../../services/authorService';

const useAuthorDelete = () => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState();    

    async function deleteAuthor(id) {
        try {
            await destroyAuthor(id);
            setErrorMessage(null);
            setSuccessMessage("Autor apagado com sucesso!");

            setTimeout(() => {
                setSuccessMessage(null);
            }, 1000); 
        } catch (e) {
            setErrorMessage(e.error);
        }
    }

    return {
        successMessage,
        errorMessage,
        deleteAuthor,
    };
};

export default useAuthorDelete;
