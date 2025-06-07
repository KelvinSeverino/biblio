import { useParams, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import useAuthorEdit from "../../hooks/author/useAuthorEdit";

const AuthorEdit = () => {
    const navigate = useNavigate();
    const { id } = useParams();    

    const {
        authorField,
        errorMessage,
        handleChange,
        handleSubmit
    } = useAuthorEdit(id);

    const onSubmitChange = async (e) => {
        e.preventDefault();
        const result = await handleSubmit();
        if (result.success) {
            navigate("/autores");
        }
    };

    const clickToBackHandler = () => navigate("/autores");

    return (
        <div className="container-fluid">
            <Header title="Editar Autor" />
            <div className="col-12 pt-4">
                <form onSubmit={onSubmitChange}>

                    {errorMessage && (<div className="alert alert-danger">{errorMessage}</div>)}
                    
                    <div className="row">
                        <div className="col-12">
                            <div className="mt-2">
                                <label className="form-label">Nome:</label>
                                <input type="text" className="form-control" id="nome" placeholder="Insira nome" name="nome" value={authorField.nome} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="container d-flex justify-content-center pt-4">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button className="btn btn-warning" onClick={clickToBackHandler}>
                                Voltar
                            </button>
                            <button type="submit" className="btn btn-success">
                                Atualizar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthorEdit;
