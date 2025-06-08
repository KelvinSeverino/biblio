import { useState } from 'react';
import { destroySubject } from '../../services/subjectService';

const useSubjectDelete = () => {
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState();    

    async function deleteSubject(id) {
        try {
            await destroySubject(id);
            setErrorMessage(null);
            setSuccessMessage("Assunto apagado com sucesso!");
            
            setTimeout(() => {
                setSuccessMessage(null);
            }, 1000); 
        } catch (e) {
            setErrorMessage(e.error);
        }
    }

    return {
        successMessage,
        errorMessage,
        deleteSubject,
    };
};

export default useSubjectDelete;
