import Home from './Pages/Home/Home';
import Create from './Pages/Create/Create';
import Footer from './Components/Footer/Footer';
import Article from './Pages/Article/Article';
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams
} from "react-router-dom";
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
      <div className="App">
        <h1 className='header'>Eqaim Blog</h1>
        <Routes>
          <Route path='/' element={<Home navigate={navigate} />} />
          <Route path='new_article' element={<Create navigate={navigate} />} />
          <Route path='/:slug' element={<Article useParams={useParams} navigate={navigate} />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
