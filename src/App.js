
import './App.css';
import Blog from './Components/Blog';
import Singlepost from './Components/Singlepost';
import Blogfrontend from './Components/Blogfrontend'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import News from './Components/News';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/singlepost/:key" element={<Singlepost />} />
          <Route path="/blogfrontend" element={<Blogfrontend />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/news" element={<News />} />
         
            
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
