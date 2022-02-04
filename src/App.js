// import Header from "./components/header/header";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Work from './pages/work';
import Resume from './pages/resume';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';

function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' exact element={<About/>} />
          <Route path='/work' element={<Work />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>


  )
}

export default App;
