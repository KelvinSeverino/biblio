import './App.css'
import Home from './components/Home';
import BookHome from './components/Books/BookHome';
import BookView from "./components/Books/BookView";
import BookEdit from "./components/Books/BookEdit";
import AuthorHome from './components/Authors/AuthorHome';
import AuthorView from "./components/Authors/AuthorView";
import AuthorEdit from "./components/Authors/AuthorEdit";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route exact path="/livros" element={<BookHome />} />
          <Route exact path="/livros/view/:id" element={<BookView />}/>
          <Route exact path="/livros/edit/:id" element={<BookEdit />}/>
          
          <Route exact path="/autores" element={<AuthorHome />} />
          <Route exact path="/autores/view/:id" element={<AuthorView />}/>
          <Route exact path="/autores/edit/:id" element={<AuthorEdit />}/>

          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
