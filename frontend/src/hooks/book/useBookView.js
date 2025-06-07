import { useEffect, useState } from 'react';
import { getById } from '../../services/bookService';

const useBookView = (id) => {
    const [book, setBook] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const bookData = await getById(id);
                setBook(bookData);
                setErrorMessage(null);
            } catch (e) {
                setBook({});
                setErrorMessage(e.error);
            }
        };

        if (id) {
            fetchBook();
        }
    }, [id]);

    return {
        book,
        errorMessage,
    };
};

export default useBookView;
