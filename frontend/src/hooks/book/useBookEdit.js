import { useEffect, useState } from 'react';
import { getById, updateBook } from '../../services/bookService';
import { getAuthors } from '../../services/authorService';
import { getSubjects } from '../../services/subjectService';

const useBookEdit = (id) => {
    const [bookField, setBookField] = useState({
        titulo: "",
        editora: "",
        edicao: "",
        ano_publicacao: "",
        valor: "",
        assuntos: [],
        autores: [],
    });

    const [authors, setAuthors] = useState([]);
    const [subjects, setSubjects] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const [bookData, authorsData, subjectsData] = await Promise.all([
                    getById(id),
                    getAuthors(),
                    getSubjects()
                ]);

                setBookField({
                    ...bookData,
                    autores: bookData.autores.map(a => String(a.codau)),
                    assuntos: bookData.assuntos.map(a => String(a.codas)),
                });

                setAuthors(authorsData);
                setSubjects(subjectsData);
            } catch (e) {
                setErrorMessage(e.error);
            }
        };

        if (id) fetchInitialData();
    }, [id]);

    const handleChange = (e) => {
        setBookField((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleMultiSelectChange = (name, selectedValues) => {
        setBookField((prev) => ({
            ...prev,
            [name]: selectedValues
        }));
    };

    const handleSubmit = async () => {
        try {
            await updateBook(id, bookField);
            return { success: true };
        } catch (e) {
            setErrorMessage(e.error);
            return { success: false };
        }
    };

    return {
        bookField,
        authors,
        subjects,
        errorMessage,
        handleChange,
        handleMultiSelectChange,
        handleSubmit
    };
};

export default useBookEdit;
