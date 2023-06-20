import Navbar from './elements/Navbar';
import Home from './pages/Home';
import Judaism from './pages/Judaism';
import Christianity from './pages/Christianity';
import Islam from './pages/Islam';
import Unknown from './pages/404'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <Routes>
          <Route path="religion-cpt" element={<Home/>}/>
          <Route path="religion-cpt/Judaism" element={<Judaism/>}/>
          <Route path="religion-cpt/Christianity" element={<Christianity/>}/>
          <Route path="religion-cpt/Islam" element={<Islam/>}/>
          <Route path="*" element={<Unknown/>}/>
        </Routes>
        <div class="fixed left-0 right-0 top-0 bottom-0 bg-c1-100/50 -z-50"></div>
        <Navbar></Navbar>
    </div>
  );
}

export default App;
