import './App.css';
import { Route, Routes} from 'react-router-dom'

import Header from './pages/Header/Header'
import Home from './pages/Home/Home'
import Nav from './pages/Nav/Nav'
import Footer from './pages/Footer/Footer'
import Tasks from './pages/Tasks/Tasks'
import Websites from './pages/Websites/Websites'
import Spellbook from './pages/Spellbook/Spellbook'

function App() {
  return (
    <div className="App">

      <Header />
      <Nav />
      <div className="margin routecontainer">
      <Routes>
      
        <Route path='/' element={<Home />}/>
        <Route path='/Tasks' element={<Tasks />} />
        <Route path='/Websites' element={<Websites />}/>
        <Route path='/Spellbook' element={<Spellbook />}/>

      </Routes>      
      </div>
      <Footer />

    </div>
  );
}

export default App;
