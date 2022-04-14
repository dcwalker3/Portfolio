import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// Custom Components
import NavBar from './NavBar';
import Portfolio from './Projects/Portfolio';
import About from './About';

// Generic Utility CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom CSS
import './Projects/index.css';


function App() {
  return (
    <div className="App">
      <NavBar/>

      {/* BrowserRouter helps us handle routing in our application without having to do anything convuluted or complex. */}
      <BrowserRouter>

        {/* Routes is a component that allows us to define a route and what component to render when that route is hit. */}
        <Routes>

          {/* A route must always contain a path that the Route is tied too as well as the component it will render. */}
          <Route exact path="/" element={<Home/>}/>

          {/* Project Routes*/}
          {/* A route can also have a path that is a child of another route. */}
          <Route path="/projects/" element={<Home/>}/>
          <Route path="/projects/portfolio" element={<Portfolio project="portfolio"/>}/>

          {/* About Routes */}
          <Route path="/about" element={<About/>}/>

          {/* If the user tries to access a route that doesn't exist, we can redirect them to a different page. */}
          <Route path="*" element={<Navigate to="/"/>}/>
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
