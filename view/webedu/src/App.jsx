import Main from './pages/Main';
import Login from './pages/Login';
import Game from './pages/Game';
import Win from './pages/Win'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Award from './pages/Award';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="/start" element={<Game/>}/>
        <Route path="/win" element={<Win/>}/>
        <Route path="/award" element={<Award/>}/>
        <Route path="/login" element={<Login/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
