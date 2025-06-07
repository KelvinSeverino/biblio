import { useState } from 'react';
import { destroyAuthor } from '../../services/authorService';

const useAuthorDelete = () => {
    const [errorMessage, setErrorMessage] = useState();    

    async function deleteAuthor(id) {
        try {
            await destroyAuthor(id);
        } catch (e) {
            setErrorMessage(e.error);
        }
    }

    return {
        errorMessage,
        deleteAuthor,
    };
};

export default useAuthorDelete;
