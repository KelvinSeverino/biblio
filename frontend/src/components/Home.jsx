import React, { } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaTags, FaUser, FaFileExport } from 'react-icons/fa';

function Home() {
    return (
        <div className="container-fluid py-5" style={{ backgroundColor: "#e6f4f9", minHeight: "100vh" }}>
            <h1 className="text-center text-primary fw-bold">Biblio</h1>
            <p className="text-center text-muted">Gerencie livros, autores, assuntos.</p>

            <div className="row text-center py-4">
                <div className="col-md-3 mb-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <FaTags size={40} className="text-primary mb-3" />
                            <h5 className="card-title">Assuntos</h5>
                            <p className="card-text">Cadastre e gerencie os assuntos literários.</p>
                            <Link to="/assuntos" className="btn btn-primary w-100">Acessar</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <FaUser size={40} className="text-success mb-3" />
                            <h5 className="card-title">Autores</h5>
                            <p className="card-text">Adicione e edite informações de autores.</p>
                            <Link to="/autores" className="btn btn-success w-100">Acessar</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <FaBook size={40} className="text-warning mb-3" />
                            <h5 className="card-title">Livros</h5>
                            <p className="card-text">Gerencie seu acervo de livros.</p>
                            <Link to="/livros" className="btn btn-warning w-100">Acessar</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <FaFileExport size={40} className="text-danger mb-3" />
                            <h5 className="card-title">Relatório</h5>
                            <p className="card-text">Baixe o relatório de gerenciamento.</p>
                            <Link to="/relatorio" className="btn btn-danger w-100">Baixar</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;