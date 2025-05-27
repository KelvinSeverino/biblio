import './App.css'
import Home from './components/Home';
import BookHome from './components/Books/BookHome';
import BookView from "./components/Books/BookView";
import BookEdit from "./components/Books/BookEdit";
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

          <Route path="*" element={<p>Path not resolved</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
