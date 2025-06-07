import { useState } from 'react';
import { destroySubject } from '../../services/subjectService';

const useSubjectDelete = () => {
    const [errorMessage, setErrorMessage] = useState();    

    async function deleteSubject(id) {
        try {
            await destroySubject(id);
        } catch (e) {
            setErrorMessage(e.error);
        }
    }

    return {
        errorMessage,
        deleteSubject,
    };
};

export default useSubjectDelete;
