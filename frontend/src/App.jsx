import './App.css'
import Home from './components/Home';
import BookHome from './components/Books/BookHome';
import BookCreate from './components/Books/BookCreate';
import BookView from "./components/Books/BookView";
import BookEdit from "./components/Books/BookEdit";
import AuthorHome from './components/Authors/AuthorHome';
import AuthorCreate from './components/Authors/AuthorCreate';
import AuthorView from "./components/Authors/AuthorView";
import AuthorEdit from "./components/Authors/AuthorEdit";
import SubjectHome from './components/Subjects/SubjectHome';
import SubjectCreate from './components/Subjects/SubjectCreate';
import SubjectView from "./components/Subjects/SubjectView";
import SubjectEdit from "./components/Subjects/SubjectEdit";
import ReportPage from "./components/Reports/ReportPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route exact path="/livros" element={<BookHome />} />
          <Route exact path="/livros/criar" element={<BookCreate />}/>
          <Route exact path="/livros/visualizar/:id" element={<BookView />}/>
          <Route exact path="/livros/editar/:id" element={<BookEdit />}/>
          
          <Route exact path="/autores" element={<AuthorHome />} />
          <Route exact path="/autores/criar" element={<AuthorCreate />} />
          <Route exact path="/autores/visualizar/:id" element={<AuthorView />}/>
          <Route exact path="/autores/editar/:id" element={<AuthorEdit />}/>
          
          <Route exact path="/assuntos" element={<SubjectHome />} />
          <Route exact path="/assuntos/criar" element={<SubjectCreate />}/>
          <Route exact path="/assuntos/visualizar/:id" element={<SubjectView />}/>
          <Route exact path="/assuntos/editar/:id" element={<SubjectEdit />}/>

          
          <Route exact path="/relatorio" element={<ReportPage />} />

          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
