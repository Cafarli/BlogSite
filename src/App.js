import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blogs from './pages/Blogs/Blogs';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/blogcard' element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
