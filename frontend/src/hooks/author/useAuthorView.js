import { useEffect, useState } from 'react';
import { getById } from '../../services/authorService';

const useAuthorView = (id) => {
    const [author, setAuthor] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const fetchAuthor = async () => {        
            try {
                const authorData = await getById(id);
                setAuthor(authorData);
                setsetErrorMessage(null);
            } catch (e) {
                setAuthor({});
                setErrorMessage(e.error);
            }
        };

        if (id) {
            fetchAuthor();
        }
    }, [id]);

    return {
        author,
        errorMessage,
    };
};

export default useAuthorView;
