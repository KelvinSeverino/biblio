import { useEffect, useState } from 'react';
import { getById } from '../../services/subjectService';

const useSubjectView = (id) => {
    const [subject, setSubject] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        const fetchSubject = async () => {        
            try {
                const subjectData = await getById(id);
                setSubject(subjectData);
                setErrorMessage(null);
            } catch (e) {
                setSubject({});
                setErrorMessage(e.error);
            }
        };

        if (id) {
            fetchSubject();
        }
    }, [id]);

    return {
        subject,
        errorMessage,
    };
};

export default useSubjectView;
