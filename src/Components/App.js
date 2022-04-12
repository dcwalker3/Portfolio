import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './NavBar';
import Portfolio from './Projects/Portfolio';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>

          <Route path="/projects/" element={<Home/>}/>
          <Route path="/projects/portfolio" element={<Portfolio/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default App;
