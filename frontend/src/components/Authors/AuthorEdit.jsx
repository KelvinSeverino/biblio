import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getById, updateAuthor } from "../../services/authorService";
import Header from "../Header/Header";

const AuthorEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [errorMessage, setErrorMessage] = useState(null);
    const [authorField, setAuthorField] = useState({
        nome: "",
    });

    useEffect(() => {
        const fetchAuthor = async () => {
            try {
                const authorData = await getById(id);
                setAuthorField(authorData);
            } catch (e) {
                setErrorMessage(e.error); // 🔹 Agora usa a mensagem tratada pelo `apiService.js`
            }
        };
        fetchAuthor();
    }, [id]);

    const changeAuthorFieldHandler = (e) => {
        setAuthorField({
            ...authorField,
            [e.target.name]: e.target.value,
        });
    };    

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await updateAuthor(id, authorField);
            navigate("/autores");
        } catch (e) {
            setErrorMessage(e.error);
        }
    };

    const clickToBackHandler = () => navigate("/autores");
    const clickToBackHome = () => navigate("/");

    return (
        <div className="container-fluid">
            <Header title="Editar Autor" />
            <div className="col-12 pt-4">
                <form>
                    {errorMessage && (<div className="alert alert-danger">{errorMessage}</div>)}
                    <div className="row">
                        <div className="col-12">
                            <div className="mt-2">
                                <label className="form-label">Nome:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nome"
                                    placeholder="Insira nome"
                                    name="nome"
                                    value={authorField.nome}
                                    onChange={changeAuthorFieldHandler}
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <div className="container d-flex justify-content-center pt-4">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button className="btn btn-warning" onClick={clickToBackHandler}>
                            Voltar
                        </button>
                        <button type="submit" className="btn btn-success" onClick={onSubmitChange}>
                            Atualizar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorEdit;
