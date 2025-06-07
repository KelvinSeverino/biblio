import { useState, useEffect } from 'react';
import { getAuthors } from "../../services/authorService";

const useAuthorList = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetchAuthors();
    }, []);

    async function fetchAuthors() {
        try {
            const authorsData = await getAuthors();
            if (!Array.isArray(authorsData)) {
                throw new Error("Erro ao carregar processar autores.");
            }

            setAuthors(authorsData);
        } catch (e) {
            setAuthors([]);
            setErrorMessage(e.error);
        }
    }

    return {
        errorMessage,
        fetchAuthors,
        authors,
    };
};

export default useAuthorList;
