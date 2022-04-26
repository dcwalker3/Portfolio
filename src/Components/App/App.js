
import About from '../About';
import Project from '../Projects';

// Generic Utility CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css"

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <About/>
      </div>
      <Project/>
    </div>
  );
}

export default App;
