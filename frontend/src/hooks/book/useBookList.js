import { useState, useEffect } from 'react';
import { getBooks } from '../../services/bookService';

const useBookList = () => {
    const [errorMessage, setErrorMessage] = useState();
    const [books, setBooks] = useState([]);

    useEffect(() => {  
        fetchBooks();
    }, []);

    async function fetchBooks() {
        try {
            const booksData = await getBooks();
            if (!Array.isArray(booksData)) {
                throw new Error("Erro ao carregar processar livros.");
            }

            setBooks(booksData);
        } catch (e) {
            setBooks([]);
            setErrorMessage(e.error);
        }
    }

    return {
        errorMessage,
        fetchBooks,
        books,
    };
};

export default useBookList;
