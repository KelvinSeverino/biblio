import { useState, useEffect } from 'react';
import { getSubjects } from "../../services/subjectService";

const useSubjectList = () => {
    const [errorMessage, setErrorMessage] = useState(null);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetchSubjects();
    }, []);

    async function fetchSubjects() {
        try {
            const subjectsData = await getSubjects();
            if (!Array.isArray(subjectsData)) {
                throw new Error("Erro ao carregar processar autores.");
            }

            setSubjects(subjectsData);
        } catch (e) {
            setSubjects([]);
            setErrorMessage(e.error);
        }
    }

    return {
        errorMessage,
        fetchSubjects,
        subjects,
    };
};

export default useSubjectList;
