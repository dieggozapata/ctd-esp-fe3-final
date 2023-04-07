
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import {Routes,Route} from 'react-router-dom'
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";
import NotFound from "./Routes/NotFound";
import Detail from "./Routes/Detail";

function App() {
  return (
      <div className="App">        
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/favs' element={<Favs/>} />
            <Route path='/contact' element={<Contact/>} />     
            <Route path='/detail/:id' element={<Detail/>} />                 
            <Route path='*' element={<NotFound/>} />                    
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
