import { useEffect, useState } from 'react';
import { getById, updateSubject } from '../../services/subjectService';
import { useNavigate } from 'react-router-dom';

const useSubjectEdit = (id) => {    
    const navigate = useNavigate();

    const [successMessage, setSuccessMessage] = useState(null);
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
            setErrorMessage(null);
            setSuccessMessage("Assunto atualizado com sucesso!");

            setTimeout(() => {
                navigate("/assuntos");
            }, 1000); 
        } catch (e) {
            setErrorMessage(e.error);
            return { success: false };
        }
    };

    return {
        successMessage,
        errorMessage,
        subjectField,
        handleChange,
        handleSubmit
    };
};

export default useSubjectEdit;
