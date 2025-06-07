import { useState } from 'react';
import { destroyBook } from '../../services/bookService';

const useBookDelete = () => {
    const [errorMessage, setErrorMessage] = useState();    

    async function deleteBook(id) {
        try {
            await destroyBook(id);
        } catch (e) {
            setErrorMessage(e.error);
        }
    }

    return {
        errorMessage,
        deleteBook,
    };
};

export default useBookDelete;
