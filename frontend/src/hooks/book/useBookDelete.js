import { useState } from 'react';
import { destroyBook } from '../../services/bookService';

const useBookDelete = () => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState();    

    async function deleteBook(id) {
        try {
            await destroyBook(id);
            setErrorMessage(null);
            setSuccessMessage("Livro apagado com sucesso!");

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
        deleteBook,
    };
};

export default useBookDelete;
