import { useEffect, useState } from 'react';
import { getById, updateSubject } from '../../services/subjectService';

const useSubjectEdit = (id) => {    
    const [errorMessage, setErrorMessage] = useState(null);
    const [subjectField, setSubjectField] = useState({
        descricao: "",
    });

    useEffect(() => {
        const fetchSubject = async () => {
            try {
                const subjectData = await getById(id);
                setSubjectField(subjectData);
            } catch (e) {
                setErrorMessage(e.error);
            }
        };

        if (id) fetchSubject();
    }, [id]);

    const handleChange = (e) => {
        setSubjectField((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };   

    const handleSubmit = async () => {
        try {
            await updateSubject(id, subjectField);
            return { success: true };
        } catch (e) {
            setErrorMessage(e.error);
            return { success: false };
        }
    };

    return {
        subjectField,
        errorMessage,
        handleChange,
        handleSubmit
    };
};

export default useSubjectEdit;
