
import './App.css';
import Blog from './Components/Blog';
import Singlepost from './Components/Singlepost';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/singlepost/:key" element={<Singlepost />} />
        
          <Route path="/contacts" element={<Contact />} />
   
          <Route path="/footer" element={<Footer />} />
       
         
            
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
